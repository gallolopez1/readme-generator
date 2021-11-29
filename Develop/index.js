// TODO: Include packages needed for this application
const inquirer = require('inquirer');
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
        // Installation?
        {
            type: 'confirm',
            name: 'confirmInstallation',
            message: 'Would you like to provide steps required to install your project?',
            default: true
        },
        // Provide installation guidance when confirmed above
        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps required to install your project?',
            when: ({ confirmInstallation }) => confirmInstallation
        },
        // App Usage
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples for use. Include screenshots as needed. (Required)',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('Please provide usage instructions!');
                    return false;
                }
            }
        },
        // Credits?
        {
            type: 'confirm',
            name: 'confirmCredits',
            message: 'Would you like to give credit or list any collaborators?',
            default: true
        },
        // Credits when confirmed
        {
            type: 'input',
            name: 'credits',
            message: 'Give credit: ',
            when: ({ confirmCredits }) => confirmCredits
        },
        // Licese
        {
            type: 'rawlist',
            name: 'license',
            message: 'Please select the license that better suits your project:',
            choices: ['Apache License 2.0', 'Boost Software License 1.0', 'BSD 3-Clause License', 'Eclipse Public License 1.0', 'GNU GPL v3', 'GNU AGPL v3', 'GNU LGPL v3', 'GNU FDL v1.3', 'The Hippocratic License 3.0', 'IBM Public License Version 1.0', 'ISC License (ISC)', 'MIT License', 'Mozilla Public License 2.0', 'Attribution License (BY)', 'Open Database License (ODbL)', 'Public Domain Dedication and License (PDDL)', 'The Perl License', 'The Artistic License 2.0', 'SIL Open Font License 1.1', 'The Unlicense', 'The zlib/libpng License']
        },
        // Allow contributing?
        {
            type: 'confirm',
            name: 'confirmContributing',
            message: 'Would you like to allow contributing?',
            default: true
        },
        // Explain how to contribute to your project
        {
            type: 'input',
            name: 'contributing',
            message: 'Explain what is needed to allow contributing.',
            when: ({ confirmContributing }) => confirmContributing
        },
        // Test?
        {
            type: 'confirm',
            name: 'confirmTest',
            message: 'Would you like to add any tests?',
            default: true
        },
        // Write tests for your application
        {
            type: 'input',
            name: 'tests',
            message: 'Write tests for your application. Then provide examples on how to run them.',
            when: ({ confirmTests }) => confirmTests
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

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();