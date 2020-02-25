console.log("\n\n-----CLASSES-----\n\n");

// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMakerClass {
    constructor(length, width, height) {
        this.length = length;
        this.width = width;
        this.height = height;
    }

    volume() {
        return this.length * this.width * this.height;
    }
    
    surfaceArea() {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    };
}

const cuboid2 = new CuboidMakerClass(4, 5, 5);

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log("Cuboid 2's Volume:", cuboid2.volume()); // 100
console.log("Cuboid 2's Surface Area:", cuboid2.surfaceArea()); // 130


console.log("\n-----STRETCH-----\n");
// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
class CubeMaker extends CuboidMakerClass {
    constructor(side_sizes) { // All sides of a cube are the same size
        super(side_sizes, side_sizes, side_sizes);
    }
}

const cube = new CubeMaker(5); 

console.log("Cube's Volume:", cube.volume()); // 125
console.log("Cube's Surface Area:", cube.surfaceArea()); // 150