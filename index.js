// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer');

// Create an array of questions for user input
const questions = [
    {
        name: 'title',
        message: 'Choose a short title for your logo (3 character Max).',
        prefix: '\n',
        validate: function(input) {
            if (input.length > 3) {
                return 'Title must be 3 characters max'
            }
            return true;
        }
    },

    {
        type: 'list',
        name: 'titleColor',
        message: 'What color do you want the title to be?',
        choices: ['Red', 'Blue', 'Green', 'Yellow', 'Purple', 'Black']
    },

    {
        type: 'list',
        name: 'shape',
        message: 'What shape do you want to choose',
        choices: ['Square', 'Circle', 'Triangle'],
    },

    {   
        type: 'list',
        name: 'shapeColor',
        message: 'What color do you want the shape to be?',
        choices: ['Red', 'Blue', 'Green', 'Yellow', 'Purple', 'Black']
    }
];

// Function that writes SVG file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log(err)
        }

        console.log('SVG File successfully generated.')
    })
}

// Function that triggers prompt and asks questions for building markdown data
function ask() {
    inquirer.prompt(questions)
    .then(answers => {
        console.log('Answer', answers)
        const newLogoFile = generateSVG(answers)

        writeToFile('logo.svg', newLogoFile)
    })
    .catch((err) => {
        console.log(err)
    })
}

// Function call to initialize app
ask();