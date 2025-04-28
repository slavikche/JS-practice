// console.log('Початок виконнаня');

// console.log('Операція 1 - Розрахунок');

// let result = 2 + 2;

// console.log('Операція 2 - Вивід результату');
// console.log(result);
// console.log('Завершення виконання');


// console.log('Start program');
// setTimeout(function() {
//     console.log('Async operation is done')
// }, 4000);

// console.log('Finish program');


// will return 'Undefined'
/*
function getData () {
    console.log('Request to DB sent');
    setTimeout(function () {
        return {
            userName: 'Test name',
            userEmail: 'test@gmail.com'
        }
    }, 2000);
}


const data = getData();
console.log('Data:' + data);
*/

// Call back to fix Undefined
/* 
function getData (callback) {
    console.log('Request to DB sent');
    
    setTimeout(function () {
        const result = {
            userName: 'Test name',
            userEmail: 'test@gmail.com'
        }
        callback(result);
    }, 2000);
}

function printData(data) {
    console.log(data);
}
const data = getData(printData);
*/




/*
// Resolve
const newPromise = new Promise((resolve, reject) => { 
    setTimeout(function () {
        const result = {
        userName: 'Test name',
        userEmail: 'test@gmail.com',
        userAge: 18
        }
        resolve(result);
    }, 5000);
    
})

//console.log(newPromise);
//newPromise.then(value => console.log(value));

newPromise.then(value => value.userAge += 10).then(value => ++value).then(value => console.log(value)); // стрілочна функція

*/

// newPromise.then(function (value) {
//     return value.userAge += 10;
// });



/*
//Resolve
const getNumber = new Promise((resolve, reject) => { 
    setTimeout(function () {
        const randomNumber = Math.random();
        if (randomNumber > 0.5) {
            resolve(randomNumber);
        } else {
            reject(new Error('Wrong number'));
        }

    }, 1000);
    
})

getNumber.then(value => console.log(value)).catch(error => console.error('getNumber викликав помилку. ' + error.message));

*/

// Promise.all{
// }



// function fetchPostById(postId) {
//     return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
// }

// //console.log(fetchPostById(2));
// fetchPostById(4)
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(error => {
//     console.error('Error message: ' + error.message);

// })


// function fetchPostById(postId) {
//     return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
// }


// async function printPostData() {
//     const postData = await fetchPostById(5);
//     const parsedBody = await postData.json();
//     console.log(parsedBody);

// }

// printPostData();

// function goHome(callback) {
//     console.log('Викликаємо таксі');
//     console.log('В дорозі...');
//     callback();
//   }
  
//   function arrived() {
//     console.log('Ми вдома!');
//   }
  
//   goHome(arrived);
  

//   function saySomething(message, name) {
//     console.log(`${message} ${name}!`);
//   }
  
//   setTimeout(saySomething, 2000, 'Привіт', 'Анна');
  
// function greet(name) {
//     console.log(`Привіт, ${name}!`);
//   }
  
//   const intervalId = setInterval(greet, 1000, 'Анна');
  
// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('Дані успішно отримані');
//     }, 2000);
//   });
  
//   myPromise.then(result => console.log(result));
  
// new Promise((_, reject) => reject(new Error('Помилка')))
//   .catch(() => 'Значення за замовчуванням')
//   .then(console.log);

// async function greet() {
//     return 'Привіт';
//   }
  
//   greet().then(console.log);

