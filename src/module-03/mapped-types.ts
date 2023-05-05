const arrayOfNumbers = [1, 2, 3];
const arrayOfStrings = arrayOfNumbers.map((number) => number.toString);
// console.log(arrayOfNumbers);

type AreaNumber = {
  height: number;
  width: number;
};

type Volume = {
  height: number;
  width: number;
  depth: number;
};

// mapped type
type Area<T> = {
  //   [key in keyof Volume]: Volume[key];
  // Generic type
  [key in keyof T]: T[key];

  //readonly
  //   readonly[key in keyof T]: T[key];
};

const area1: Area<{ height: number; width: number }> = {
  height: 10,
  width: 10,
};

type AreaString = {
  height: string;
  width: string;
};

type AreaReadonly = {
  readonly height: number;
  readonly width: number;
};
const rectangularArea: AreaReadonly = {
  height: 10,
  width: 12,
};

// rectangularArea.height = 10;

type A = AreaNumber["height"]; // Look up type
// type B = keyof AreaNumber;

interface Person {

    firstName: string;
  
    lastName: string;
  
  }
  
  
  
  function fullName1<T extends Person>(person: T): string {
  
    return `${person.firstName} ${person.lastName}`;
  
  }