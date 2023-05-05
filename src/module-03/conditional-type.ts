// A type is dependent on another type

type a1 = number;
type a2 = a1 extends string ? string : null;
type a3 = undefined;
type a4 = number;

//nested conditional type
type d = a1 extends null
  ? null
  : a3 extends number
  ? number
  : a4 extends null
  ? null
  : never;

type SheikhType = {
  wife1: string;
  wife2: string;
};

type A = keyof SheikhType;

type CheckProperty<T, K> = K extends keyof SheikhType ? true : false;

type CheckWife1 = CheckProperty<SheikhType, "wife1">;

// Matha Kharap Example

type Bandhubi =  'Manika' | 'Rachel' | 'Pheobe';

type Removebandhubi<T, K> = T extends K ? never : T;

type CurrentBandhubi = Removebandhubi<Bandhubi, "Pheobe">;