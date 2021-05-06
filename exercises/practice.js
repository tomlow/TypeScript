var numType = 5;
numType = 3;
// numType = 'hei'; //cool.
var objectType = { name: 'Joe', age: 1 };
objectType.name = 'bob';
// objectType.name = 7;
var objectType2 = { title: 'Sam', age: 6 };
var title = objectType2.title, age = objectType2.age;
var sayHi = function (_a) {
    var title = _a.title, age = _a.age;
    console.log("Hi " + title + ", " + age);
};
sayHi(objectType2);
