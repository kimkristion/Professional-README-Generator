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
        
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your GitHub username: '
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is a good email for users to reach you at?'
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
        const github = answer.github;
        const email = answer.email;

        const generateMarkdown = require('./utils/generateMarkdown');
       

        let READMETemplate = `# ${projectTitle} 

## Overview
The README Generator is a command-line application that streamlines the process of creating high-quality, professional README.md files for your projects. With this tool, you can efficiently generate README files that include essential sections such as project descriptions, installation instructions, usage guidelines, licensing details, contributing guidelines, testing procedures, and contact information. Say goodbye to manually formatting your READMEs, and let the README Generator simplify your project documentation, ensuring consistency and professionalism in every README you create.

 ## Table of Contents
『1』 [Description](#description) 『2』 [Installation](#installation) 『3』 [Usage](#usage) 『4』 [Credits](#credits) 『5』 [License](#license) 『6』 [Contribution](#contribution)

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
${contribution}

## License 
${license} 

## Questions
If you have any questions, encounter issues, or would like to discuss this project further, please feel free to reach out. You can contact me using the following methods:
**Email**: [${email}](mailto:${email})
**GitHub**: [${github}](https://github.com/${github}) `

        fs.appendFile(pathway, READMETemplate, (err) => err ? console.error(err) : console.log('check this out'))



    })
}

// Function call to initialize app
init();
