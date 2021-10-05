const uname ='xyz';
let age = 20;
age= 30;
//error const cannot modified once we assign a value to it
// uname= 'abc';

function add(a: number, b: number) {
    let result = a + b;
    return result;
    console.log(result);
}
//we cannot access the value outside the block when we declare it as local 
//console.log(result);