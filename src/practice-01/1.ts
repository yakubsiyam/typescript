// Convert the following JavaScript array into a TypeScript tuple
//     const userInfo = [101, "Ema", "John", true,  , "2023"];

let userInfo: [number, string, string, boolean, any, string] = [
  101,
  "Ema",
  "John",
  true,
  "",
  "2023",
];

console.log(userInfo);
