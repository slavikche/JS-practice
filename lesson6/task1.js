function handleNum(num, handleEven, handleOdd) {
    console.log(`Random number - ${num}`);

    if (num % 2 === 0) {
        handleEven();
    } else {
        handleOdd();
    }
}

function handleEven(num) {
    console.log(`Number is even`);
    
}

function handleOdd() {
    console.log(`Number is odd`);
}

handleNum(Math.floor(Math.random() * 20), handleEven, handleOdd);

