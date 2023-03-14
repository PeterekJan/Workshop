// class = A "blueprint" for creating objects.
//               Define properties and/or methods.

// constructor = A special method for assigning properties.
//                          Automatically called when creating an object.


class Chair {
    constructor(color, seatHeight, recliningAngle, backSupport, headSupport, padding, armRests, seatSize, isHeightAdjustable, isMovable){
        //Defaults which can be changed by the subclass class.
        this.color = color;
        this.seatHeight = seatHeight;
        this.recliningAngle = recliningAngle;
        this.backSupport = true;
        this.headSupport = false;
        this.padding = "3 inch";
        this.armRests = true;
        this.seatSize = "16 inch";
        this.isHeightAdjustable = false;
        this.isMovable = false;
        this.type = "Chair";
    }
    
    adjustableHeight() {};
    adjustAngle(){};
    moveChair(){};    
}

const newChair = new Chair();


////////////////////////////////////////////////////////////////////////////
var Person = function(name, yearBirth, job){
    this.name = name;
    this.yearBirth = yearBirth;
    this.job = job;
};

var david = new Person ("David", 1980, "Programator");


////////////////////////////s funkci ///////////////////////////////////////

class Car{
    constructor(make, model, year, color){
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color
        
    }

    drive(){
        console.log("You drive the car!")
    };
    brake(){
        console.log("You step on the brakes!")
    };
};

var car1 = new Car("Ford","MUstang", 2022, "Red" );
var car2 = new Car("Chevy", "Corvete", 2222, "Non");

car1.drive();

//////////////////////////////////////////////////////////////////////////////
class Rectangle {
    constructor(width, height, color){
        console.log("The rectangle is being created!");

        this.width = width;
        this.height = height;
        this.color = color;
    };

    getArea() {
        return this.width * this.height;
        
    };
    printDescription(){
        console.log(`I am rectangle of ${this.width} x ${this.height}, I am ${this.color} with content: ${this.getArea()}`)
    }
    

};

let myRectangle1 = new Rectangle (5, 3, "Blue");
let myRectangle2 = new Rectangle (10, 5, "Red");

myRectangle2.printDescription();

/////////////////////////////////////////////////////////////////////////////////////////////////


// class Chair {
//     constructor(color, seatHeight, recliningAngle, backSupport, headSupport, padding, armRests, seatSize, isHeightAdjustable, isMovable){
//         //Defaults which can be changed by the subclass class.
//         this.color = color;
//         this.seatHeight = seatHeight;
//         this.recliningAngle = recliningAngle;
//         this.backSupport = true;
//         this.headSupport = false;
//         this.padding = "3 inch";
//         this.armRests = true;
//         this.seatSize = "16 inch";
//         this.isHeightAdjustable = false;
//         this.isMovable = false;
//         this.type = "Chair";
//     }
    
//     adjustableHeight() {};
//     adjustAngle(){};
//     moveChair(){};    
// }

// const newChair = new Chair();

// newChair;


class OfficeChair extends Chair{
    constructor(color, isHeightAdjustable, seatHeight, recliningAngle){
        super();
        this.type = "Office Chair";
        this.color = color;
        this.isHeightAdjustable = isHeightAdjustable;
        this.seatHeight = seatHeight;
        this.recliningAngle = recliningAngle;
        this.isMovable = true;
    }
    
    adjustableHeight(height){
        if(height > this.seatHeight){
            console.log(`Chair height changed to ${height}`);        
        } else {
            console.log(`Height cannot be decreased more than the seat height ${this.seatHeight}`);
        }
    }
    
    adjustAngle(angle){
        if(angle >= this.recliningAngle){
            console.log(`Chair angle changed to ${angle}`);        
        } else {
            console.log(`Angle cannot be decreased more than the min reclining angle ${this.recliningAngle}`);
        }
    }
    
    moveChair(x,y){
        console.log(`Chair moved to co-ordinates = (${x}, ${y})`);
    }
}

const newOfficeChair = new OfficeChair("Red", true, 30, 30);

console.log(newOfficeChair.adjustableHeight(31));
console.log(newOfficeChair.adjustAngle(40));
console.log(newOfficeChair.moveChair(10,20));



//////////////////////////////////////////////////////////////////////

class Rectangle {
    constructor(){
        console.log("Rectangle is being created")
    }
}



let myRectangle1 =


