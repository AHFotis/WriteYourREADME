// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project name?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a short descripion for your project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What command needs to be run to install your project?',
        default: "npm install"
    },
    {
        type: 'input',
        name: 'usage',
        message: "What does a user need to know about using your repo/application?"
    },
    {
        type: 'input',
        name: 'contribution',
        message: "What does the user need to know about your project's contribution guidelines?"
    },
    {
        type: 'input',
        name: 'test',
        message: 'What command needs to be run to test your project?',
        default: "npm test"
    },
    {
        type: "list",
        name: "license",
        message: "What kind of license are you using?",
        choices: ["MIT", "GPLv3", "Apache 2.0",	"BSD 3", "None"]
    },
    {
        type: 'input',
        name: 'gitName',
        message: "What is your GitHub username?"
    },
    {
        type: 'input',
        name: 'email',
        message: "Please enter your e-mail address."
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init(prompts) {
    inquirer.prompt(prompts)

}

// Function call to initialize app
init(questions);
