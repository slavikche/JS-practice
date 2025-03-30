// for (let i = 0; i < 10; i++) {
//     if (i % 2 === 0){
//     console.log(i);
//     }
// }

// for (let a = 0, b = 5; a < 10 && b < 10; a++, b++) {
//     //if (a % 2 === 0){
//     console.log(a);
//     console.log(b);
//     }

// for (let i = 0; i < 10; i++) {
//     if (i === 3){
//     break; // повністю зупиняє цикл
//     }
//     console.log(i);
// }

// for (let i = 0; i < 10; i++) {
//     if (i === 3){
//     continue; // зупиняє тільки поточну ітерацію, а не весь цикл
//     }
//     console.log(i);
// } 

// for (let i = 0; i < 10; i++) {
//     for (let j = 0; j < 10; j++) { 
//         console.log(`${i}x${j} = ${i * j}`);
//     }
//     console.log('---------');
// }

// // i = 0
// // while (i < 10) {
// //     console.log(i);
// //     i++;
// // }

// let i = 444;
// do {
//     console.log(i);
//     i++;
// } while (i < 5);

// let userInput = 'test string';
// let vowelCount = 0;
// for (let i = 0; i < userInput.length; i++) {
//     if (userInput[i] === 'a' || userInput[i] === 'o' || userInput[i] === 'e' || userInput[i] === 'u' || userInput[i] === 'i') {
//         vowelCount++;
//         console.log(`Знайдена голосна лытера Індекс ${i}, літера ${userInput[i]}`);
//     }
// }

let userInput = 'test string';
let vowelCount = 0;
for (let i = 0; i < userInput.length; i++) {
    let currentChar = userInput[i];
    if (currentChar === 'a' || currentChar === 'o' || currentChar === 'e' || currentChar === 'u' || currentChar === 'i') {
        vowelCount++;
        console.log(`Знайдена голосна лытера Індекс ${i}, літера ${currentChar}`);
    }
}
