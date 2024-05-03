// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
import ('shapes.js', 'generateSVG')


// Prompt for an array of questions to take SVG Parameters
const questions = inquirer.prompt ([
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
        choices: ['Red', 'Blue', 'Green', 'Yellow', 'Purple', 'Black'],
        prefix: '\n'
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
        choices: ['Red', 'Blue', 'Green', 'Yellow', 'Purple', 'Black'],
        prefix: '\n'
    }
]).then(answers => {
    // Generate SVG code
    const svgCode = `
        <svg width="${answers.width}" height="${answers.height}" xmlns="http://www.w3.org/2000/svg">
            <rect width="100%" height="100%" fill="${answers.backgroundColor}"/>
            <!-- Add more SVG elements here based on user input -->
        </svg>
    `;

    // Write SVG to file
    fs.writeFileSync('output.svg', svgCode);

    console.log('SVG file generated successfully!');
}).catch(error => {
    console.error('Error:', error);
});

// Function that writes SVG file
// function writeToFile('Logo.svg', svgCode) {
//     fs.writeFile('Logo.svg', svgCode, (err) => {
//         if (err) {
//             return console.log(err)
//         }
//         console.log('SVG File successfully generated.')
//     })
// }

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