// Pick

interface Person {
  name: string;
  email?: string;
  contactNo: string;
}

type Contact = Pick<Person, "email" | "contactNo">;

// Omit

type Name = Omit<Person, "email" | "contactNo">;

// Partial and Required
// To make all the properties be optional type

type optional = Partial<Person>;
type RequiredProps = Required<Person>;

// Readonly
// const person5: Readonly<Person> = {
//   name: "Siyam",
//   email: "abc@gmail.com",
//   contactNo: "123456789",
// };

// person5.name = "Ali";

// type myObj = {
//   a: string;
//   b: string;
//   c: string;
// };

// Using index signature
// type myObj = {
//     [key: string]: string;
// };

// Record Type

type myObj = Record<"a" | "b" | "c" | "d", string>;

const obj: myObj = {
  a: "1",
  b: "2",
  c: "3",
  d: "4",
};
