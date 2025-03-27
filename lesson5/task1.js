//Function Declaration

function rectangle1(width, height) {
    return width * height;
}
console.log('Площа прямокутника - ' + rectangle1(5, 5));


//Function Expression

const rectangle2 = function (width, height) {
    return width * height;
}
console.log('Площа прямокутника - ' + rectangle2(2, 9));


//Arrow Function
const rectangle3 = (width, height) => width * height;
console.log('Площа прямокутника - ' + rectangle3(3, 9));
