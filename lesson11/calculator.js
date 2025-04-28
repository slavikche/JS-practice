//export default 
 
class Calculator {

    static add(num1, num2) {
        return num1 + num2;
    }

    static minus(num1, num2) {
        return num1 - num2;
    }

    static divide(num1, num2) {
        return (num1 / num2) + 1; // функція з багом
    }
}

module.exports = Calculator;