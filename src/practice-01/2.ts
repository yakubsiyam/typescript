function findDuplicate(
  array1: Array<number>,
  array2: Array<number>
): Array<number> {
  return array1.filter((value) => array2.includes(value));
}

const array1: Array<number> = [1, 2, 3, 4, 5];
const array2: Array<number> = [2, 4, 6, 8];

console.log(findDuplicate(array1, array2));
