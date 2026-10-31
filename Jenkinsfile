
pipeline {
    agent any

    options {
        timestamps()
        skipDefaultCheckout(true)
    }

    parameters {
        string(
            name: 'TEST_FILE',
            defaultValue: 'tests/NewTab.spec.ts',
            description: 'Playwright test file to execute'
        )

        choice(
            name: 'BROWSER',
            choices: ['chromium', 'firefox', 'webkit'],
            description: 'Select browser'
        )

        choice(
            name: 'MODE',
            choices: ['headless', 'headed'],
            description: 'Execution mode'
        )
    }

    environment {
        NODE_ENV = 'test'
        CI = '1'
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                powershell 'npm ci'
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                powershell 'npx playwright install'
                
                powershell '''
                if (!(Test-Path '.env') -and (Test-Path '.env.example')) {
                    Copy-Item '.env.example' '.env'
                }
                '''
            }
        }

        stage('Run Playwright Tests') {
            steps {
                script {
                    def modeFlag = params.MODE == 'headed' ? '--headed' : ''

                    powershell """
                    npx playwright test '${params.TEST_FILE}' --project=${params.BROWSER} ${modeFlag}
                    """
                }
            }
        }
    }

    post {

        always {

            // Generate ZIP containing the Playwright HTML report
            powershell '''
            if (Test-Path 'reports') {
                if (Test-Path 'playwright-report.zip') {
                    Remove-Item 'playwright-report.zip' -Force
                }

                Compress-Archive -Path 'reports\\*' `
                    -DestinationPath 'playwright-report.zip' -Force
            }
            '''

            // Publish Playwright HTML report in Jenkins
            publishHTML([
                allowMissing: true,
                alwaysLinkToLastBuild: true,
                keepAll: true,
                reportDir: 'reports',
                reportFiles: 'index.html',
                reportName: 'Playwright HTML Report'
            ])

            // Publish JUnit test results
            junit(
                testResults: 'test-results/results.xml',
                allowEmptyResults: true
            )

            // Send report through Gmail
            emailext(
                subject: "Playwright Build #${env.BUILD_NUMBER} - ${currentBuild.currentResult}",

                body: """
                    <h2>Playwright Test Execution Report</h2>

                    <p><b>Job:</b> ${env.JOB_NAME}</p>
                    <p><b>Build:</b> #${env.BUILD_NUMBER}</p>
                    <p><b>Status:</b> ${currentBuild.currentResult}</p>
                    <p><b>Test File:</b> ${params.TEST_FILE}</p>
                    <p><b>Browser:</b> ${params.BROWSER}</p>
                    <p><b>Mode:</b> ${params.MODE}</p>

                    <p>
                        <a href="${env.BUILD_URL}">
                            Open Jenkins Build
                        </a>
                    </p>

                    <p>Playwright HTML report is attached as a ZIP file.</p>
                """,

                to: "singhapurv94@live.com",
                from: "apurvsinghhh@gmail.com",
                replyTo: "apurvsinghhh@gmail.com",
                mimeType: 'text/html',

                attachmentsPattern: 'playwright-report.zip'
            )
        }
    }
}
