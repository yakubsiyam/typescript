let emni: any;

emni = "Next level";

<string>emni;

function kgToGram(param: string | number): string | number | undefined {
  if (typeof param === "string") {
    return `${parseFloat(param) * 1000} gram`;
  }
  if (typeof param === "number") {
    return param * 1000;
  }
}

const resultToBeNumber = <number>kgToGram(1000);
const resultToBeString = kgToGram("1000") as string;

console.log(resultToBeNumber);
console.log(resultToBeString);

type CustomType = {
  message: string;
};

try {
} catch (err) {
  console.log((err as CustomType).message);
}
