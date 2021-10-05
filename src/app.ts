// spread operator
const hobbies = ['sports', 'cooking'];
const activehobby = ['travelling'];

activehobby.push(...hobbies);

console.log(activehobby);

const person = {
    uname : 'max',
    age : 20
}
const copiedPerson = {...person};

// Rest parameter

const add = (...numbers: number[]) => {
    return numbers.reduce((curRes, curVal) => {
        return curRes + curVal;
    },0);
}
const addnumbers = add(10, 25, 4.5, 6);
console.log(addnumbers);

// Arrays and Object Destructuring

const [hobby1, hobby2, ...remainingHobbies] = hobbies;
console.log(hobbies, hobby1, hobby2);

const {uname: firstName, age} = person;
console.log(firstName, age, person);


