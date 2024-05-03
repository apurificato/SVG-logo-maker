# SVG-logo-maker Program
Node.js command line application that accepts user input to generate new SVG logo files based on a prompt and user inputs.

![GitHub license](https://img.shields.io/badge/License-MIT-brightgreen.svg)

## Description
This SVG Logo File generator program was built exclusively with JavaScript, Node.js, and use of two node packages (inquirer and jest). This little project is aimed at providing users with a tool that they can use to generate a very simple SVG logo file in the command line terminal of VS Code. It's useful bc the program can be run in the VS Code platform in a separate window, while working on other web projects. The user can run this program for the quick generation of a SVG without having to search elsewhere to create one. Instead, the user makes use of shell commands to initiate a prompt that includes a series of questions that recieve input and then that input gets written into a newly generated, completed SVG file that is created based on input data for a 3-word title, a color for that title, a shape, and a color for that shape.

## Project Structure
- ./examples (folder that will recieve the newly generated SVG file that gets outputted by the inquirer prompt)
    - logo.svg (SVG file that is outputted)
- ./lib (folder that contains JavaScript for the shapes data)
    - shapes.js (JavaScript file containing different shape models/variables and data that will get rendered into SVG file)
    - shapes.test.js (JavaScript file that is used and tested by the jest npm to see if shapes will be rendered correctly)
- ./node_modules/ (folder containing data and modules for node.js)
- .gitignore (file that lists other files to be ignored by Github when pushing to repository)
- index.js (main JavaScript file that requires Inquirer API and FileSystem API; includes functions to prompt questions and write new file)
- LICENSE (license used for this repository - MIT License)
- README (information file containing information about this specific project/application)
- package.json (file containing JSON dependencies and script commands that are used by inquirer npm and jest npm)

## Tools and Technologies Used in This Project
- Javascript coding language
- Node JS (and node modules)
  - Inquirer Module (found on npmjs.com)
  - FS Module (native/included in Node.js)
  - Jest Module (found on jestjs.io)
- VS Code platform used to code and build pages
- Github (website hosted and deployed on Github servers)

## How to Use
Open project file in VS Code platform (this is where the files can be tested and the program can be run since it is not a front-end program or application). When folders/files are loaded into workstation tab on left, then open an integrated terminal in VS Code to use the command line. To run the program use commands in the terminal shell, specifically "node index.js". This will start the inquirer module as well; it begins by triggering a prompt series of questions, beginning with asking what the user wants to name the title for the new SVG file they are creating. Additional questions in the prompt include a choice of color for the title, a choice of shape (triangle, circle, or square), and a choice of different color options for this shape.

The user continues to answer each question by inputting text of their choosing, corresponding to each question. The program then completes by writing a new file that is created in VS Code in the user's current open workstation, specifically outputted to the /examples folder. A new SVG logo file titled "logo.svg" then gets created; this new file will contain data in that the user initially inputted into the prompts as they went through each question. This file is essentially a basic, organized template that can be used/copied for a website or other use that requires a simple logo.


## Contribution/Author
- Anthony Purificato


## Credits
- Rutgers Coding Bootcamp provided resources and support for this project
- OpenAI ChatGPT utilized for general coding assistance and aid upon encountering problems with JavaScript code


## License
Website is available for public use, hosted on Github servers, utilizing an MIT License - see the LICENSE file for details.

![GitHub license](https://img.shields.io/badge/License-MIT-brightgreen.svg)
  
For more information on license please click the [Link](https://opensource.org/licenses/MIT)

## Questions
Check out my [GitHub](https://github.com/apurificato) 
  
For questions, reach out to me at undefined.