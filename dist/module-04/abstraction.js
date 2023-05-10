"use strict";
// interface
// interface IVehicle {
//   startEngine(): void;
//   stopEngine(): void;
//   move(): void;
// }
// class Vehicle implements IVehicle {
//   constructor(
//     public name: string,
//     public brand: string,
//     public model: number,
//   ) {}
//   startEngine(): void {
//     console.log("I'm start Engine");
//   }
//   stopEngine(): void {
//     console.log("I'm stop Engine");
//   }
//   move(): void {
//     console.log("I'm start Engine");
//   }
//   test(): void {
//     console.log("I'm for testing purpose");
//   }
// }
// const vehicle1 = new Vehicle("Car", "Toyota", 2020);
// abstract class
class Vehicle {
    constructor(name, brand, model) {
        this.name = name;
        this.brand = brand;
        this.model = model;
    }
    move() {
        console.log("I'm start Engine");
    }
    test() {
        console.log("I'm for testing purpose");
    }
}
class Car extends Vehicle {
    startEngine() {
        console.log("I'm start Engine");
    }
    stopEngine() {
        console.log("I'm stop Engine");
    }
}
// const car1 = new Vehicle("car", "honda", 2015);
