pipeline{
    agent any
    environment{
        dockerImage=''
        registry='pappukumar27/angular-image:2.0.1'
        registryCredential='dockerhub_id'
    }
    stages{
        stage('clone repo'){
            steps{
              checkout([$class: 'GitSCM', branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/skylercasey/AngularCIJenkins.git']]])  
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
                    dockerImage.run("-p 82:80 --name mycontainer")
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
    }
}
