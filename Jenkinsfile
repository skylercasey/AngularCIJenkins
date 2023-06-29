pipeline{
    agent any
    environment{
        dockerImage=''
        registry='bhasmeht/angular-image:2.0.0'
        registryCredential='dockerhub_id'
    }
    stages{
        stage('clone repo'){
            steps{
              checkout([$class: 'GitSCM', branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/bhaskarmehta/AngularCIJenkins.git']]])  
            }
        }
        stage('build image'){
            steps{
                script{
                    dockerImage = docker.build registry
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
