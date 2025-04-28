// test('Test 1', () => {
//     console.log('Test message 1 ')

// })

// test('Test 2', () => {
//     console.log('Test message 2')

// })

// test('Test 3', () => {
//     console.log('Test message 3')

// })

// test ('Add 5 + 6 equals 11', () => {
//     const result = 5 + 6;
//     expect(result).toBe(11);
// })

const Calculator = require('./calculator.js')
// import Calculator from "./calculator";

beforeAll(() => {
    console.log('Before all');
})

beforeEach(() => {
    console.log('Before each');
})

afterEach(() => {
    console.log('After each');
})

afterAll(() => {
    console.log('After all');
})

// describe('Calculator test results'), () => {
test('Add function returns 10 with number 5, 5', () => {
    const result = Calculator.add(5, 5);
    expect(result).toBe(10);

})

test('Minus function returns 3 with number 10, 7', () => {
    const result = Calculator.minus(10, 7);
    expect(result).toBe(3);

})

test('Divide function returns 2 with number 10, 5', () => {
    const result = Calculator.divide(10, 5);
    expect(result).toBe(2);

})

//}