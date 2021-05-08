let numType: number = 5;

numType = 3;

// numType = 'hei'; //cool.

const objectType: { name: string; age: number } = { name: 'Joe', age: 1 };

objectType.name = 'bob';
// objectType.name = 7;

const objectType2 = { title: 'Sam', age: 6 };

const { title, age }: { title: string; age: number } = objectType2;

const sayHi = ({ title, age }: { title: string; age: number }): void => {
  console.log(`Hi ${title}, ${age}`);
};

sayHi(objectType2);

const colors: string[][] = [
  ['blue', 'green'],
  ['red', 'orange'],
];
