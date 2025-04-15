// const person = {
//     name: "Олександр",
//     age: 35,
//     city: "Львів"
// };

// for (let key in person) {
//     console.log(`${key}: ${person[key]}`);
// }


/* const person = {
    name: "Анна",
    age: 29,
    isStudent: false
};

console.log(person.age);
console.log(person.name);
console.log(Object.keys(person)); // ["name", "age", "isStudent"]
console.log(Object.values(person)); // ["Анна", 29, false]
console.log(Object.entries(person)); // [["name", "Анна"], ["age", 29], ["isStudent", false]]
*/

/*
const person = {
    name: 'David',
    age: 25,
    sayHello: function () {
        console.log(`Hello, my name is ${this.name}. I'm ${this.age} years old`);
    }

};

console.log(person);
console.log(person.name);
console.log(person.age);

person.age = 50;

person.number = '333';
console.log(person);

person.sayHello();
*/

/*
const name = 'Peter';
const age = 30;

const user = {
    name,
    age,
}
console.log(user);
*/


// const person = {
//     name: 'David',
//     age: 25,
//     address: 'Test street 15'

// };

// for (const key in person) {
//     console.log(key);
//     console.log(person[key]);

// }

const obj = {
    foo() {
      return "bar";
    },
  };
  
  console.log(obj.foo());