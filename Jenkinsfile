pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                // Install Node.js dependencies
                sh 'npm install'
            }
        }

        stage('Run Application') {
            steps {
                // Run your Node.js application
                sh 'npm run start'
            }
        }
    }

    post {
        always {
            echo "always"
            discordSend description: "jenkins pipeline running", footer: "notification aja", link: env.BUILD_URL, result: currentBuild.currentResult, title: JOB_NAME, webhookURL:"https://discord.com/api/webhooks/1194213985571057675/drGm9PN8WX6rCclGDXw48qJhO6HUl3iwD-k1pkbOfNup_QAAy7DbcrtVtvTUqDp9dDNV"
        }
    }
}
