// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projecttitle',
        message: 'What is the title of your project?',
    }, 
    {
        type: 'input',
        name: 'descriptionintro',
        message: 'What was your motivation?',
    },
    {
        type: 'input',
        name: 'descriptionwhy',
        message: 'Why did you build this project?',
    },
    {
        type: 'input',
        name: 'descriptionsolving',
        message: 'What problem does your project solve?',
    },
    {
        type: 'input',
        name: 'descriptionafterview',
        message: 'What did you learn?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your projects?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions for how users should use your project'
    },
    {
        type: 'input',
        name: 'usageimg',
        message: 'Provide example URL for usage',
    },
    {
        type: 'input',
        name: 'credits',
        message: 'List your collaborators, if any, with a link to their GitHub profiles: '
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'How can users contribute to your project?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license was used in your project?',
        choices: ['MIT License', 'GPL', 'Apache', 'N/A']
        
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then(answer => {
        console.log('README created');

        const pathway = 'README.md'
        
        const projectTitle = answer.projecttitle;
        const descriptionPtOne = answer.descriptionintro;
        const descriptionPtTwo = answer.descriptionwhy;
        const descriptionPtThree = answer.descriptionsolving;
        const descriptionPtFour = answer.descriptionafterview;
        const installation = answer.usage;
        const usage = answer.usage;
        const usageURL = answer.usageimg;
        const credits = answer.credits;
        const contribution = answer.contribution;
        const license = answer.license;

        let READMETemplate = `# ${projectTitle}
## Description 
- ${descriptionPtOne}
- ${descriptionPtTwo}
- ${descriptionPtThree}
- ${descriptionPtFour}
        
## Installation
${installation}
        
## Usage 
${usage}
        
## Credits 
${credits}
        
## Contribution 
${contribution}`

        fs.appendFile(pathway, READMETemplate, (err) => err ? console.error(err) : console.log('check this out'))



    })
}

// Function call to initialize app
init();
