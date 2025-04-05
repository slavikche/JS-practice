/* const namesList = ['John', 'Alex', 'Serg', 5, true, false, 'Test string'];
console.log(namesList[3]);
*/

// console.log(typeof namesList[4]);
// console.log(namesList[namesList.length - 1]);

/* let firstName = namesList[0];
 console.log(firstName);
 console.log(namesList[3] + 10);
*/

/* 
namesList[0] = 'Daniel';
console.log(namesList);
*/

// const namesList2 = new Array('John', 'Alex', 'Serg'); // old method

// array + cycle
// #1
/*
const namesList = ['John', 'Alex', 'Serg', 5, true, false, 'Test string'];

for (let i = 0; i < namesList.length; i++) {
    console.log(`Name is index ${i} is - ${namesList[i]}`);
}

// #2
for (const name of namesList) {
    console.log(name);
}
*/

/*
const array = [1, 2, 3, 4, 'abc', 'qwerty', false, 4, 5, 6];

for (const element of array) {
    if (typeof element === 'number') {
        console.log(element);
    }
}
*/

/*
let namesList = ['John', 'Alex', 'Serg'];
let namesUpperCase = [];

for (let i = 0; i < namesList.length; i++) {
    namesUpperCase[i] = namesList[i].toUpperCase();
}

console.log(namesUpperCase);
*/

/*
let x = 10;
let y = x;
x = 20;
console.log(x);
console.log(y);
*/

/* const arrA = [1, 2, 3];
const arrB = arrA;
arrA.push(4);
arrB[0] = 'New array';
console.log(arrA);
console.log(arrB);
*/

//Method - Split

/*
const sentence = 'Here there are several words';
//const sentence = 'Here, there, are, several, words';
//const words = sentence.split(' ');
//const words = sentence.split('e');
//const words = sentence.split(',');

console.log(words);
*/

//Method - Join

/*
const fruits = ['apple', 'peach', 'pineapple'];
const fruitsString = fruits.join('; ');
console.log(fruitsString);
*/

//Method - indexOf

/*
const numbers = [10, 20, 30, 40, 50];
console.log(numbers.indexOf(30)); // Will be 2 
*/


//Method - includes

/*
const numbers = [10, 20, 30, 40, 50];
console.log(numbers.includes(30));
*/

//Методи по додаванню елементів в масив - push, pop, shift, unshift

//const array = [1, 2, 3, 4, 5];
//array.push(6)
// array.pop();
// array.shift();
// array.unshiftshift();

//console.log(array.pop()); 
//console.log(array.shift()); 
// console.log(array.unshift(0, 2, 3, 4)); 
// console.log(array); 


//Method - slice()
/*
const sliceArray = array.slice(1, 3);
console.log(sliceArray);
*/


//Method - splice()

/*
const colors = ['red', 'blue', 'green'];
//colors.splice(1, 0, 'yellow', 'orange'); // 1 - з якого індекса встивити нові значення, 0 - яке значення видалити або ніякі
colors.splice(1, 1, 'yellow', 'orange');
console.log(colors);
*/

//Method - concat()

/*
const firstArray = [1, 2];
const secondArray = [3, 4];
const combinedArray = firstArray.concat(secondArray);
console.log(combinedArray); // [1, 2, 3, 4]
*/

/*
let string = 'one two three four';
let wordsCount = 0;

let wordsArray = string.split(' ');
wordsCount = wordsArray.length;
console.log(wordsArray);
*/

// Method forEach

/*
const array = [1, 2, 3, 4, 5];

array.forEach((number) => {
    //console.log(index);
    console.log(number * 2);
})
*/

//Method filter 

/*
const numbers = [10, 15, 20, 25, 30];
const greaterThan20 = numbers.filter((num) => num > 20);

const greaterThan20Func = numbers.filter(function (num) {
    return num >= 20;
})

console.log(greaterThan20);
console.log(greaterThan20Func);
*/


const numbers = [5, 10, 1]; // Масив чисел

const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0); // Початкове значення суми — 0

console.log(`Сума всіх елементів: ${sum}`);
