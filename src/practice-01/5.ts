const sumEvenNum = (num: Array<number>): number => {
  let sum: number = 0;
  for (let i: number = 0; i < num.length; i++) {
    if (num[i] % 2 === 0) {
      sum += num[i];
    }
  }
  return sum;
};

const num: Array<number> = [1, 2, 3, 4, 5, 6];
console.log(sumEvenNum(num));
