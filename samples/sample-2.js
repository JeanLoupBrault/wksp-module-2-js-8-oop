class FourSided {
    constructor(name) {
        this.numSides = 4;
                this.name = name;
                this.area = area;
                this.height = height;
                this.width = width;
    }
    
    area() {
        return this.height * this.width;
    }
}

class Square extends FourSided{
    constructor(size) {
        super("square");
        this.height = size;
        this.width = size;
    }
}

let mySquare = new Square(4);
console.log(mySquare.name);
console.log(mySquare.area(10, 20));
