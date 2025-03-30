/*
const hof = (callback, text) => { 
    console.log('Inside HOF');
    callback(text);
}

function sayHi() {
    console.log('Hi from callback');
}

function sayBye() {
    console.log('Bye from callback');
}

function saySomething(text) {
    console.log(text);
}

 hof(sayHi);
 hof(sayBye);

hof(saySomething, 'text from parameter')
*/

// function processPayment(onSuccessCb, onFailureCb, paymentID) {
//     const isPaymentSuccess = true;

//     if (isPaymentSuccess) {
//         onSuccessCb(paymentID);
//     } 
//     else {
//         onFailureCb(paymentID);
//     }
// }

// function onPaymentSuccess(paymentID) {
//     console.log(`Payment ${paymentID} is successful`);
// }

// function onPaymentFailure(paymentID) {
//     console.log(`Payment ${paymentID} is failed`)
// }

// let id = String(Math.random()).slice(2, 7);

// processPayment(onPaymentSuccess, onPaymentFailure, id);

// const obj = {
//     name: 'Maria',
//     sayHello: () => console.log(`Привіт, ${this.name}!`)
//   };
  
//   obj.sayHello(); // 'Привіт, undefined!'

// const user = {
//     name: 'Anna',
//     greet() {
//         console.log(`Привіт, ${this.name}!`)
//     }
// }

// user.greet();


// Замикання 
/*function counter() {
    let num = 1;
    return function() {
        return num ++;
    }

}

let counter1 = counter();
let counter2 = counter();

console.log(counter1());
console.log(counter1());
console.log(counter1());
console.log('------');
console.log(counter2());
console.log(counter2());
console.log(counter2());
*/

// function multiplier(factor) {
//     return function (number) {
//         return factor * number;
//     }
// }

// const double = multiplier(2);
// const triple = multiplier(3);

// console.log(double(10));

// console.log(triple(5));

/* function countToTen(startValue) {
    for (let i = startValue; i <= 10; i++) {
        console.log(i);
    }
}
countToTen(4);
*/

/*
function countToTenREcursion(startValue) {
    if (startValue <= 10) {
        console.log(startValue);
        //startValue++;
        //countToTenREcursion(startValue);

        countToTenREcursion(++startValue)
    }
}
countToTenREcursion(2);
*/

/*function greet() {
    console.log(`Hi, ${this.name}`);
}

const user1 = {name: 'Ivan'};
const user2 = {name: 'Tomas'};

greet.call(user1);
*/

function calculateNumbers(num1 = 100, num2 =2) {
    console.log(num1);
    console.log(num2);
    return num1 * num2;
}
console.log(calculateNumbers(undefined, 200));
//console.log(calculateNumbers(200));