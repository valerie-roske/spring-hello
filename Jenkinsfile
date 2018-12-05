pipeline {
    agent {
        node {
            // checkout scm
            def customImage = docker.build("spring-hello-image:${env.BUILD_ID}")
            // customImage.push()
        }
    }
    stages {
        stage('Run a command') {
            steps {
                sh 'printenv'
            }
        }
    }
}