const { Square, Triangle, Circle } = require('./shapes')

describe('Circle', () => {
    test('Render method returns correct SVG string.', () => {
        const circle = new Circle('SVG','blue', 'green' );
        const expectedOutput = `<circle cx="50" cy="50" r="50" fill="green"/><text x="150" y="150" font-size="48" text-anchor="middle" fill="blue">SVG</text>`;
        expect(circle.renderSVG()).toEqual(expectedOutput);
    });
});

describe('Triangle', () => {
    test('Render method returns correct SVG string.', () => {
        const triangle = new Triangle('SVG','blue', 'green' );
        const expectedOutput = `<polygon cx="50" cy="50" r="50" fill="green"/><text x="150" y="150" font-size="48" text-anchor="middle" fill="blue">SVG</text>`;
        expect(triangle.renderSVG()).toEqual(expectedOutput);
    });
});

describe('Square', () => {
    test('Render method returns correct SVG string.', () => {
        const square = new Square('SVG','blue', 'green' );
        const expectedOutput = `<rect x="50" y="50" width="150" height="150" fill="green"/><text x="150" y="150" font-size="48" text-anchor="middle" fill="blue">SVG</text>`;
        expect(square.renderSVG()).toEqual(expectedOutput);
    });
});