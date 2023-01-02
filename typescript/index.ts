// Alias type

type Age = number;

type Name = string;

type Player = {
  name: Name;
  age?: Age;
};

// const playerYena: Player = {
//   name: "yena",
// };

// const playerLynn: Player = {
//   name: "lynn",
//   age: 12,
// };

const playerMaker = (name: string): Player => ({
  name,
});
const yena = playerMaker("yena");
yena.age = 12;
