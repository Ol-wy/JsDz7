class Transport{
    constructor(type, engine, numberOfSeats){
        this.type = type;
        this.engine = engine;
        this.numberOfSeats = numberOfSeats;
    }
}

class Car extends Transport{
    constructor(type, engine, numberOfSeats, bodyType, transmission, speed){
    super(type, engine, numberOfSeats);
    this.bodyType = bodyType;
    this.transmission = transmission;
    this.speed = speed;
    }
    _currentSpeed = 0;

    speed() {
        let slow = document.querySelector('.btnSlow');
        let gas = document.querySelector('.btnGas');
        let inp = document.querySelector('.input');
        let num = 0;
        let list = document.querySelectorAll('car');
        
        slow.addEventListener('click', () => {
            num--;
            inp.value = num;
        });
        
        gas.addEventListener('click', () => {
            num++;
            inp.value = num;
        });
        }
        
        
        
        speed()
    }

const toyota = new Car('Car', 'Petrol', 5, 'HatchBack', 'Automatic', 10)
console.log(toyota);

const CAR = document.getElementById('car')

const panel = document.createElement('div')
panel.style.cssText =`
background-color: lightgreen;
width: 700px;
height: 700px;
margin: auto;
border-radius: 10px;
`
CAR.append(panel)

const input = document.createElement('input')
input.style.cssText = `
padding: 10px 90px;
margin: 400px 0 0 100px; 
border-radius: 15px;
border-color: lightgreen;
font-size: 27px;
text-transform: uppercase;
text-align: center;
`
panel.append(input)

const btnSlow = document.createElement('button')
btnSlow.className = 'btnSlow'
panel.append(btnSlow)

const btnGas = document.createElement('button')
btnGas.className = 'btnGas'
panel.append(btnGas)

btnSlow.textContent = "brake"
btnSlow.style.cssText =`
font-size: 20px;
padding: 20px 70px;
margin: 50px 154px 0 100px;
border-radius: 15px;
border: white;
cursor: pointer;
background-color: gray;
`

btnGas.textContent = "gas"
btnGas.style.cssText =`
font-size: 20px;
padding: 20px 70px;
border-radius: 15px;
border: white;
cursor: pointer;
background-color: gray;
`















































// class Helicopter extends Transport{
//     constructor(type, engine, numberOfSeats, startedOperationYear, numberOfEngines, takeOffWeight, maximumFlightRange, cruiseSpeed, fuelConsumption, manufacturer){
//     super(type, engine, numberOfSeats);
//     this.startedOperationYear = startedOperationYear;
//     this.numberOfEngines = numberOfEngines;
//     this.takeoffWeight = takeOffWeight;
//     this.maximumFlightRange = maximumFlightRange;
//     this.cruiseSpeed = cruiseSpeed;
//     this.fuelConsumption = fuelConsumption;
//     this.manufacturer = manufacturer;
//     }
// }

// const R44 = new Helicopter('Helicopter', 'Petrol', 3, 1992, 1, '1089kg', '680km', '209km/h', '27kg/h', 'Robinson Helicopter')
// console.log(R44);

