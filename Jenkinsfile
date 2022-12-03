pipeline{
    agent any
    environment{
        dockerImage=''
        registry='bhasmeht/electricequipmentimage'
        registryCredential='dockerhub_id'
    }
    stages{
        stage('clone repo'){
            steps{
              checkout([$class: 'GitSCM', branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/bhaskarmehta/ElectronicEquipmentAngular.git']]])  
            }
        }
        stage('build image'){
            steps{
                script{
                    dockerImage = docker.build registry
                }
            }
        }
        stage('stop the running container'){
            steps{
                sh 'docker stop  mycontainer | xargs --no-run-if-empty'
                sh 'docker rm mycontainer | xargs -r'
            }
        }
        stage('run image'){
            steps{
                script{
                    dockerImage.run("-p 80:80 --name angularcontanier")
                }
            }
        }
        stage('push image to docker hub'){
            steps{
                script{
                    docker.withRegistry('',registryCredential){
                        dockerImage.push()
                    }
                }
            }
        }
        stage('Deploy App') {
            steps{
                sshagent(['kubernetes_id']) {
                    
                    sh "scp -r -o StrictHostKeyChecking=no deploymentservice.yaml ubuntu@3.88.200.75:~/"
                    script{
                        try{
                            
                            sh "ssh ubuntu@3.88.200.75 kubectl apply -f ."
                        }
                        catch(error){
                           sh "ssh ubuntu@3.88.200.75 kubectl create -f ." 
                        }
                    }
                }
            }
        }
        
    }
}