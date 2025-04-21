
//
/* class Car {

    turnOn() {
        console.log('The car is turned on');
    }

    turnOff() {
        console.log('The car is  turned off');
    }

    fillPetrol(liters) {
        console.log(`${liters} liters of petrol filled`);
    }
}

//BMW and Ford are objects
const BMW = new Car();
BMW.turnOn();
BMW.fillPetrol(100);
BMW.turnOff();

const Ford = new Car();
Ford.turnOn();
*/

/*
class Car {

    constructor (brand, color, speed, litersInside) {
        this.brand = brand;
        this.color = color;
        this.speed = speed;
        this.litersInside = litersInside;
    }

    turnOn() {
        console.log('The car is turned on');
    }

    turnOff() {
        console.log('The car is  turned off');
    }

    fillPetrol(liters) {
        console.log(`${liters} liters of petrol filled`);
    }
}

//BMW and Ford are objects
const BMW = new Car('BMW', 'Red', 150, 20);
const Ford = new Car('BMW', 'Blue', 120, 25);

console.log(BMW);
console.log(Ford);
*/

class Car {

    _vinNumber;
    constructor (brand, color, vinNumber, litersInside) {
        this.brand = brand;
        this.color = color;
        //this.vinNumber = vinNumber;
        this._vinNumber = vinNumber;
        this.litersInside = litersInside;
    }

    // set _vinNumber(carVinNumber) {
       
    //     console.log('Test');

    //     if(carVinNumber.length <= 5) {
    //         console.log('Wrong number');
    //     } else {
    //         this.vinNumber = carVinNumber;
    //     }


    get color() {
        if (this.brand === 'BWM') {
            return this.color;
        }
    }


    turnOn() {
        console.log(`The car ${this.brand} is turned on`);
    }

    turnOff() {
        console.log(`The car is ${this.brand} turned off`);
    }

    printVinNumber() {
        console.log(this._vinNumber);
    }

    fillPetrol(liters) {
        console.log(`${liters} leters of petrol filled`);
        this.litersInside += liters;
        console.log(`Now there are ${this.litersInside} liters in the cart`);
    }
}

//BMW and Ford are objects

const BMW = new Car('BMW', 'Red', '14', 20);
console.log(BMW);

const Ford = new Car('BMW', 'Blue', '2342344353', 25);
console.log(Ford);

Ford._vinNumber= '23523523523';
console.log(Ford);

//console.log(BMW);
//console.log(Ford);

// BMW.turnOn();
// BMW.fillPetrol(30);
// BMW.fillPetrol(20);
// BMW.turnOff();