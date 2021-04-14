// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generator = require('./utils/generateMarkdown.js')
const technologiesList = ['HTML', 'CSS', 'Bootstrap', 'Foundation','JavaScript','ES5','HTML DOM','JSON','XML','jQuery','Angular','React','Redux','PHP','C++','C#','Java','Python','Node.js','Express.js','Ruby','REST','GO','SQL','MongoDB']

// TODO: Create an array of questions for user input
const questions = ['What is the name of the application?', 'Do you have a deployed project link?', 'Please describe this project,its purpose, intallation, and setup!', 'What technologies were used in the making of this application? Please separate each using commas!', 'Who are the main contributors for this project? Sepearate names with single spaces!', 'What tests were performed to determine the proper functionality of this application?','What license is affiliated with this application?', 'What is your GitHub username for additional questions or concerns?', 'What is your email address for additional questions or concerns?'];
const licenses = ['Apache license 2.0', 'Boost Software License 1.0', 'BSD 2-clause "Simplified" license', 'BSD 3-clause "New" or "Revised" license', 'Creative Commons Zero', 'Creative Commons Zero v1.0 Universal', 'Creative Commons Attribution 4.0', 'Creative Commons Attribution ShareAlike 4.0', 'Eclipse Public License 1.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU General Public License v3.0', 'GNU Lesser General Public License v3.0', 'IBM v1.0', 'ISC', 'MIT', 'Mozilla Public License 2.0', 'The Perl License', 'SIL Open Font License 1.1', 'The Unlicense', 'zLib License']

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // This refines the value of data.deployedLink in the case no deployed link exists
    fs.writeFile(fileName, generator.genearteMarkdown(data), (err) => {
        err ? console.log(err) : console.log(`Success!`)
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt([
        {
            type: 'input',
            message: questions[0],
            name: 'appName'
        },
        {
            type: 'input',
            message: `${questions[1]} If not, enter 'N/a'!`,
            name: 'deployedLink'
        },
        {
            type: 'input',
            message: questions[2],
            name: 'descriptionAndSetup'
        },
        {
            type: 'checkbox',
            message: questions[3],
            name: 'technologies',
            choices: technologiesList
        },
        {
            type: 'input',
            message: questions[5],
            name: 'testing'
        },
        {
            type: 'input',
            message: questions[4],
            name: 'contributors'
        },
        {
            type: 'list',
            message: questions[6],
            name: 'license',
            choices: licenses
        },
        {
            type: 'input',
            message: questions[7],
            name: 'gitHubUsername'
        },
        {
            type: 'input',
            message: questions[8],
            name: 'email'
        },
    ])
    .then((response) => {
        writeToFile('customREADME.md', response)
    })
}

// Function call to initialize app
init();
