// Function to generate markdown data for README
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

    return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            ${shapeSVG}
        </svg>`;
}
  
  module.exports = generateSVG;
  