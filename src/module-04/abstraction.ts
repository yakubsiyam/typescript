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

abstract class Vehicle {
  constructor(
    public name: string,
    public brand: string,
    public model: number
  ) {}

  abstract startEngine(): void;

  abstract stopEngine(): void;

  move(): void {
    console.log("I'm start Engine");
  }

  test(): void {
    console.log("I'm for testing purpose");
  }
}

class Car extends Vehicle {
  startEngine(): void {
    console.log("I'm start Engine");
  }

  stopEngine(): void {
    console.log("I'm stop Engine");
  }
}

// const car1 = new Vehicle("car", "honda", 2015);
