// let x = 600;

// if (x > 5) {
//     console.log('X is bigger than 5');

//     if (x > 100) {
//         console.log('X is too much');
//     }
// }

// if (x < 5) {
//     console.log('X is less than 5');
// }


// let x = 6;
// if (x > 5) console.log('X is bigger than 5');

// let time = 19; // current time
// let greeting;

// if (time < 10) {
//     greeting = 'Good morning'; 
// }
// if (time > 12) {
//     greeting = 'Good afternoon';
// } 
// if (time > 18) {
//     greeting = 'Good evening';
// }

// console.log(greeting);


// let time = 19;
// let greeting;

// if (time >=4 && time <= 12) {
//     consol1e.log('Good morning');

// } else if (time > 12 && time < 18) {
//     console.log('Good day');

// } else if (time > 18 && time < 22) {
//     console.log('Good evening');

// } else if (time <= 24) {
//     console.log('Good night');
// } else {
//     console.log('Your input is wrong');
// }


/*
let time = 4; // hours
let greeting;

if (!typeof time === 'number'){
    console.log('Your input should be a number');
}

if (time >4 && time <= 12) {
    console.log('Good morning');

} else if (time < 18) {
    console.log('Good day');

} else if (time < 22) {
    console.log('Good evening');

} else if (time <= 24 || time >= 0) {
    console.log('Good night');
} else {
    console.log('Your input is wrong');
}
*/

/* let x = 3;
const message = x > 5 ? 'X is bigger than 5' : 'X is less of equals 5';
console.log(message);
*/

//Age example
let age = 26;
let stage;

if (age >=3 && age <=13) {
    stage = 'Child';
} else if (age < 18) {
    stage = 'Teenager';
} else if (age < 25) {
    stage = 'Young';
} else {
    stage = "Too young / old"
}
console.log(stage);


for (let i = 0; i < 3; i++) {
    console.log(i);
}
