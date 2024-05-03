const fs = require('fs')
const inquirer = require('inquirer');
const shapes = require('./lib/shapes');

// Function to generate SVG Data Based on User Input and Gives a Choice of Different Shapes Data That Will Be Outputted in the Newly Created SVG File.
function generateSVG(data) {
    let shapeSVG;
    switch (data.shape) {
        case 'Circle':
            shapeSVG = new shapes.Circle(data.title, data.titleColor, data.shapeColor).renderSVG();
            break;
        case 'Triangle':
            shapeSVG = new shapes.Triangle(data.title, data.titleColor, data.shapeColor).renderSVG();
            break;
        case 'Square':
            shapeSVG = new shapes.Square(data.title, data.titleColor, data.shapeColor).renderSVG();
            break;
        default:
            shapeSVG = '';
            break;
    }
    return shapeSVG; // Return the generated SVG
}

// Prompt For an Array of Questions That Takes in the SVG Parameters
const questions = [
    {
        name: 'title',
        message: 'Choose a short title for your logo (3 character Max).',
        prefix: '\n',
        validate: function(input) {
            if (input.length > 3) {
                return 'Title must be 3 characters max';
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
];

// Inquirer Prompt - Asks Questions and Takes User Input for Building File. Then Generates SVG File Output and Writes the File Using FS Dependency (Native to Node).
inquirer
    .prompt(questions)
    .then(answers => {
        console.log('Answers:', answers);
        const shapeSVG = generateSVG(answers);

        const svgCode = `
        <svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg">
        ${shapeSVG}
        </svg>`;

        // Writes SVG Code to a Newly Created File
        fs.writeFileSync('./examples/logo.svg', svgCode);

        console.log('Generated logo.svg file successfully!');
    })
    .catch((err) => {
        console.error('Error:', err);
    });