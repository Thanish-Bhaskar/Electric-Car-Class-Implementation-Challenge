//U08201790
//CREATING CLASS
class Car {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    accelerate() {
        this.speed = this.speed + 10;
        console.log(`${this.make} is going at ${this.speed} kmph`);
    }

    brake() {
        this.speed =this.speed - 5;
        console.log(`${this.make} is going at ${this.speed} kmph`);
    }
}
// EXTENDING CAR CLASS
class EV extends Car {
    constructor(make, speed, charge) {
        super(make, speed);
        this.charge = charge;
    }

    chargeBattery(chargeTo) {
        this.charge = chargeTo;
    }
// Conditional statements to highlight relation between battery and acceleration
    accelerate() {
        if (this.charge > 0) {
            this.speed = this.speed + 20;
            this.charge--;
            console.log(`${this.make} is going at ${this.speed} kmph, with a charge of ${this.charge}%`);
        } else {
            console.log(`${this.make} cannot accelerate because the battery is empty.`);
        }
    }
}
//TESTING
const tesla = new EV('Tesla', 120, 23);// sample va;ue provided
tesla.accelerate();
tesla.accelerate(); 
tesla.brake();
tesla.chargeBattery(50);
console.log(`Charge after charging: ${tesla.charge}%`); 
tesla.accelerate(); 
