// Arrow Function
const createArray = (param: string): string[] => {
  return [param];
};

// single param
const createArray1 = <T>(param: T): T[] => {
  return [param];
};

// multiple param
const createArray2 = <X, Y>(param1: X, param2: Y): [X, Y] => {
  return [param1, param2];
};

function createArray3<X, Y>(param1: X, param2: Y): [X, Y] {
  return [param1, param2];
}

const result1 = createArray1<string>("Bangladesh");
const result2 = createArray1<boolean>(true);

type NameType = {
  name: string;
};

const result3 = createArray1<NameType>({ name: "Bangladesh" });

const result4 = createArray2<boolean, Array<string>>(false, ["USA"]);

// Spread Operator

const addMeInMyCrushMind = <T>(myInfo: T): T => {
  const crush5 = "Kate Winslet";
  const newData = { ...myInfo, crush5 };
  return newData;
};

interface MyInfoInterface {
  name: string;
  age: number;
  salary: number;
}

const myInfo = {
  name: "Siyam",
  age: 24,
  salary: 1000000,
};

const result6 = addMeInMyCrushMind<MyInfoInterface>(myInfo);
