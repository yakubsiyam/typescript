type NoobDeveloper = {
  name: string;
};

type JuniorDeveloper = NoobDeveloper & {
  expertise: string;
  experience: number;
};

const newDeveloper: NoobDeveloper | JuniorDeveloper = {
  name: "Siyam",
  expertise: "JS",
  experience: 1,
};
