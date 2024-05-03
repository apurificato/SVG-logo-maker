// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// Generate SVG File by shape // case breaks depending on shape chosen
function generateSVG(data) {
    let shapeSVG;
    switch (data.shape) {
        case 'Circle':
            shapeSVG = new Circle(data.title, data.textColor, data.shapeColor).renderSVG();
            break;
        case 'Triangle':
            shapeSVG = new Triangle(data.title, data.textColor, data.shapeColor).renderSVG();
            break;
        case 'Square':
            shapeSVG = new Square(data.title, data.textColor, data.shapeColor).renderSVG();
            break;
        default:
            shapeSVG = '';
            break;
    }
};

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
    <svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg">
    ${shapeSVG}
    </svg>`;

    // Write SVG to file
    fs.writeFileSync('logo.svg', svgCode);

    console.log('Generated logo.svg file successfully!');
}).catch(error => {
    console.error('Error:', error);
});

// Function that triggers prompt and asks questions for building markdown data
// function ask() {
//     inquirer.prompt(questions)
//     .then(answers => {
//         console.log('Answer', answers)
//         const newLogoFile = generateSVG(answers)

//         writeToFile('logo.svg', newLogoFile)
//     })
//     .catch((err) => {
//         console.log(err)
//     })
// }

// Function call to initialize app
// ask();