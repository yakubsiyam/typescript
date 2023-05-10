"use strict";
// // keyof guard
// type Alphanumeric = string | number;
// function add(param1: Alphanumeric, param2: Alphanumeric): Alphanumeric {
//   if (typeof param1 === "number" && typeof param2 === "number") {
//     return param1 + param2;
//   } else {
//     return param1.toString() + param2.toString();
//   }
// }
// // console.log(add("2", "3"));
// // console.log(add(2, 3));
// // In Guard(uses Object type)
// type NormalUserType = {
//   name: string;
// };
// type AdminUserType = {
//   name: string;
//   role: "admin";
// };
// function getUser(user: NormalUserType | AdminUserType): string {
//   if ("role" in user) {
//     return `I am admin`;
//   } else {
//     return `I am normal user`;
//   }
// }
// const normalUser1: NormalUserType = { name: "Kallu" };
// const adminUser1: AdminUserType = { name: "Gallu", role: "admin" };
// console.log(getUser(normalUser1));
// console.log(getUser(adminUser1));
// // instanceof guard
// class Animal {
//   name: string;
//   species: string;
//   constructor(name: string, species: string) {
//     this.name = name;
//     this.species = species;
//   }
//   public makeSound() {
//     console.log("I'm making sound");
//   }
// }
// class Dog extends Animal {
//   constructor(name: string, species: string) {
//     super(name, species);
//   }
//   makeBark() {
//     console.log("I'm barking");
//   }
// }
// class Cat extends Animal {
//   constructor(name: string, species: string) {
//     super(name, species);
//   }
//   makeMeaw() {
//     console.log("I'm meawing");
//   }
// }
// function isDog(animal : Animal):animal is Dog{
//     return animal instanceof Dog;
// }
// function isCat(animal : Animal):animal is Cat{
//     return animal instanceof Cat;
// }
// function getAnimal(animal: Animal):void {
//     if(isDog(animal)){
//         animal.makeBark();
//     }
//     else if(isCat(animal)){
//         animal.makeMeaw();
//     }
//     else{
//         animal.makeSound();
//     }
// }
// const animal1 = new Dog("German shepard", "dog");
// const animal2 = new Cat("Persian", "cat");
// console.log(getAnimal(animal2));
