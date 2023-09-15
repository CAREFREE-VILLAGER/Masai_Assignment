
function FourWheeler(brand, model) {
    this.brand = brand;
    this.model = model;
    this.numberOfWheels = 4;
    this.numberOfSeats = 5;
    this.numberOfLights = 5;
    this.bodyType = "aluminium";
    this.numberOfGears = 6;
    this.currentGear = 0;
}


FourWheeler.prototype = {
    gearShift: function (num) {
        if (this.numberOfGears === 0) {
            console.log(`This vehicle has no gears.`);
        } else {
            if (num < 0) {
                console.log(`Gear Shifted from ${this.currentGear} to ${this.currentGear - 1}`);
                this.currentGear--;
            } else if (num > 0) {
                console.log(`Gear Shifted from ${this.currentGear} to ${this.currentGear + 1}`);
                this.currentGear++;
            } else {
                console.log(`No gear shift.`);
            }
        }
    },
    lightsTurnOn: function () {
        console.log(`${this.brand} ${this.model}'s lights are turned On!`);
    },
    lightsTurnOff: function () {
        console.log(`${this.brand} ${this.model}'s lights are turned Off!`);
    },
    honk: function () {
        console.log(`${this.brand} ${this.model} is honking (PeePee PooPoo)`);
    },
    accelerate: function () {
        console.log(`${this.brand} ${this.model} is accelerating`);
    },
    brake: function () {
        console.log(`${this.brand} ${this.model} applied brakes`);
    }
};


function Car(brand, model, numberOfSeats) {
    FourWheeler.call(this, brand, model);
    this.numberOfSeats = numberOfSeats;
}


Car.prototype = Object.create(FourWheeler.prototype);
Car.prototype.constructor = Car;


Car.prototype.honk = function () {
    console.log(`${this.brand} ${this.model} is honking (Beep Beep)`);
};


let car1 = new Car("TATA", "Nexon", 7);

console.log(car1);
console.log(`Number of gears ${car1.numberOfGears}`);
console.log(`Number of wheels ${car1.numberOfWheels}`);
console.log(`Number of seats ${car1.numberOfSeats}`);
car1.gearShift(1);
car1.brake();
car1.lightsTurnOn();
car1.lightsTurnOff();
car1.accelerate();
car1.honk();
