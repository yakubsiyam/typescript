type PersonType = {
  name: string;
  age: number;
  salary: number;
};

type newType = "name" | "age" | "salary"; // manually korsi

type newTypeUsingKeyOf = keyof PersonType;

// const a : newType = "salary";
// const b : newTypeUsingKeyOf = "age";

function getProperty<X, Y extends keyof X>(obj: X, key: Y) {
  obj[key];
}

const property = getProperty({ name: "Mr. X", age: 10 }, "age");
