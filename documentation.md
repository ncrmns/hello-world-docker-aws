## How to deploy:

#### 1. Set up the Elastic Beanstalk Command Line Interface
####   Clone the aws-elastic-beanstalk-cli-setup repository from GitHub.
        $ git clone https://github.com/aws/aws-elastic-beanstalk-cli-setup.git
####   Run the bundled installer.
        $ ./aws-elastic-beanstalk-cli-setup/scripts/bundled_installer
####   Follow the instructions that the bundled installer outputs to add Python and the EB CLI to your PATH variable.
####
#### 2. Initialize EB CLI in your working directory
        $ eb init
####   Provide your credentials.
#### 
#### You are ready to deploy with:
        $ eb deploy
