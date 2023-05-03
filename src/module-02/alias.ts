type CrushType = {
  name: string;
  age?: number;
  profession: string;
  address: string;
};

const crush1: CrushType = {
  name: "moina",
  age: 22,
  profession: "Web Developer",
  address: "Moner Vitor",
};

type OperationType = (x: number, y: number) => number;

const calculate = (
  number1: number,
  number2: number,
  operation: OperationType
) => {
  return operation(number1, number2);
};

console.log(calculate(10, 20, (x, y) => x + y));
