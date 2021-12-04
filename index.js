// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer')
const readMe = require('./utils/readme-template')
    // TODO: Create a function to write README file
    // writing files
const writeToFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        // Project title?
        {
            type: 'input',
            name: 'projectTitle',
            message: 'What is your project title? (Required)',
            validate: projectTitleInput => {
                if (projectTitleInput) {
                    return true;
                } else {
                    console.log('Please enter project title!');
                    return false;
                }
            }
        },
        // App Description
        {
            type: 'input',
            name: 'description',
            message: 'Enter project description (Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter a description!');
                    return false;
                }
            }
        },
        // Provide installation guidance when confirmed above
        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps required to install your project?',
        },
        // App Usage
        {
            type: 'input',
            name: 'usage',
            message: 'Provide usage instructions and examples for use. (Required)',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('Please provide usage instructions!');
                    return false;
                }
            }
        },
        // Screenshots?
        {
            type: 'confirm',
            name: 'confirmScreenshots',
            message: 'Would you like to include screenshots?',
            default: false
        },
        {
            type: 'input',
            name: 'screenshots',
            message: 'If you would like to include screenshots, please type the file name followed by the file type (example: screenshot.png).',
            when: ({ confirmScreenshots }) => confirmScreenshots
        },
        // Licese
        {
            type: 'rawlist',
            name: 'license',
            message: 'Please select the license that better suits your project:',
            choices: ['Unlicense', 'MIT', 'GPLv2', 'Apache', 'GPLv3', 'BSD 3-clause', 'BSD 2-clause', 'LGPLv3', 'AGPLv3']
        },
        // Explain how to contribute to your project
        {
            type: 'input',
            name: 'contributing',
            message: 'Explain what is needed to allow contributing.'
        },
        // Write tests for your application
        {
            type: 'input',
            name: 'tests',
            message: 'Write tests for your application. Then provide examples on how to run them.'
        },
        // Questions
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username (Required)',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email address!');
                    return false;
                }
            }
        },

    ]);
};
questions().then(answer => {
        return readMe(answer)
    })
    .then(writeResponses => { return writeToFile(writeResponses) })