const person = {
    firstName: 'Slavik',
    lastName: 'Chernysh',
    age: 35,
};

person.email = 'slavik@test.com';
delete person.age;

console.log(person);