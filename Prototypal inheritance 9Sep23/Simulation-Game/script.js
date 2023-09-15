
function Vehicle(brand, model, speed, fuelType) {
    this.brand = brand;
    this.model = model;
    this.speed = speed;
    this.fuelType = fuelType;
  }
  
  
  Vehicle.prototype.accelerate = function (amount) {
    this.speed += amount;
    displayOutput(`${this.brand} ${this.model} is accelerating to ${this.speed} km/h.`);
  };
  
  Vehicle.prototype.brake = function (amount) {
    this.speed -= amount;
    displayOutput(`${this.brand} ${this.model} is slowing down to ${this.speed} km/h.`);
  };
  
  Vehicle.prototype.refuel = function () {
    displayOutput(`${this.brand} ${this.model} is refueling with ${this.fuelType} fuel.`);
  };
  
  
  function Car(brand, model, speed, fuelType, numberOfWheels) {
    
    Vehicle.call(this, brand, model, speed, fuelType);
    this.numberOfWheels = numberOfWheels;
  }
  
  
  Car.prototype = Object.create(Vehicle.prototype);
  
  
  Car.prototype.honk = function () {
    displayOutput(`Honk! ${this.brand} ${this.model} is honking.`);
  };
  
  
  function Airplane(brand, model, speed, fuelType, numberOfEngines, hasLandingGear) {

    Vehicle.call(this, brand, model, speed, fuelType);
    this.numberOfEngines = numberOfEngines;
    this.hasLandingGear = hasLandingGear;
  }
  
  
  Airplane.prototype = Object.create(Vehicle.prototype);
  
  
  Airplane.prototype.takeOff = function () {
    displayOutput(`Preparing for takeoff: ${this.brand} ${this.model} is taking off.`);
  };
  
  
  function displayOutput(message) {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML += `<p>${message}</p>`;
  }
  
  
  const myCar = new Car("Toyota", "Camry", 60, "Gasoline", 4);
  const myAirplane = new Airplane("Boeing", "747", 850, "Jet Fuel", 4, true);
  
  
  myCar.accelerate(20);
  myCar.honk();
  myCar.refuel();
  
  myAirplane.accelerate(100);
  myAirplane.takeOff();
  myAirplane.brake();
  