// // Generic Interface

// interface CrushInterface<T> {
//   name: string;
//   husband: T;
// }

// interface CrushInterface1<T, U = null> {
//   name: string;
//   husband: T;
//   wife?: U;
// }

// const crush2: CrushInterface1<boolean, string> = {
//   name: "kate",
//   husband: true,
//   wife: "Chokina",
// };

// interface PersonInterface {
//   name: string;
//   age: number;
// }

// const crush4: CrushInterface1<PersonInterface, PersonInterface> = {
//   name: "Wislet",
//   husband: {
//     name: "Dory",
//     age: 40,
//   },
//   wife: {
//     name: "Kobori",
//     age: 50,
//   },
// };

// interface husbndInterface {
//   name: string;
//   salary: number;
// }
// const crush3: CrushInterface<husbndInterface> = {
//   name: "Kate",
//   husband: {
//     name: "Siyam",
//     salary: 100,
//   },
// };
