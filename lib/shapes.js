class Shape {
    constructor(title, titleColor, shapeColor) {
        this.title = title;
        this.titleColor = titleColor;
        this.shapeColor = shapeColor;
    }
}

class Circle extends Shape {
    constructor(title, titleColor, shapeColor) {
        super(title, titleColor, shapeColor)
    }

    renderSVG() {
        return ``
    }
}

class Square extends Shape {
    constructor(title, titleColor, shapeColor) {
        super(title, titleColor, shapeColor)
    }

    renderSVG() {
        return ``
    }
}

class Triangle extends Shape {
    constructor(title, titleColor, shapeColor) {
        super(title, titleColor, shapeColor)
    }

    renderSVG() {
        return ``
    }
}