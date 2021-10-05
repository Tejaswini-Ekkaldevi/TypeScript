const hobbies = ['sports', 'cooking'];
const activehobby = ['travelling'];

activehobby.push(...hobbies);

console.log(activehobby);

const person = {
    uname : 'max',
    age : 20
}
const copiedPerson = {...person};