class Transport{
    constructor(type, engine, numberOfSeats){
        this.type = type;
        this.engine = engine;
        this.numberOfSeats = numberOfSeats;
    }

    startEngine() {
        console.log(`${this.title} engine started`);
    }
}

class Car extends Transport{
    constructor(type, engine, numberOfSeats, bodyType, transmission, speed, brand){
    super(type, engine, numberOfSeats);
    this.bodyType = bodyType;
    this.transmission = transmission;
    this.speed = speed;
    this.brand = brand;
    }
    startEngine() {
        console.log(`Good morning ${this.brand} is ready to run`);
    }
    
}

const toyota = new Car('Car', 'Petrol', 5, 'HatchBack', 'Automatic', 10, 'toyota')
console.log(toyota);
toyota.startEngine();

class Helicopter extends Transport{
    constructor(type, engine, numberOfSeats, startedOperationYear, numberOfEngines, takeOffWeight, maximumFlightRange, cruiseSpeed, fuelConsumption, manufacturer){
    super(type, engine, numberOfSeats);
    this.startedOperationYear = startedOperationYear;
    this.numberOfEngines = numberOfEngines;
    this.takeoffWeight = takeOffWeight;
    this.maximumFlightRange = maximumFlightRange;
    this.cruiseSpeed = cruiseSpeed;
    this.fuelConsumption = fuelConsumption;
    this.manufacturer = manufacturer;
    }
}

const R44 = new Helicopter('Helicopter', 'Petrol', 3, 1992, 1, '1089kg', '680km', '209km/h', '27kg/h', 'Robinson Helicopter')
console.log(R44);