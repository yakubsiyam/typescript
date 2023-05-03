type UserType = {
  name: string;
  age: number;
};

interface IUserType {
  name: string;
  age: number;
}

type newUserType = UserType & {
  role: string;
};

interface INewUserType extends IUserType {
  role: string;
}

const uUser: INewUserType = {
  name: "Siyam",
  age: 24,
  role: "Web",
};
