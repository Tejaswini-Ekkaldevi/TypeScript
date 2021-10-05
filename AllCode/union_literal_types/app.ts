function combine(
    //Union
    input1: number | string, 
    input2: number | string,
    //literal
    resultConversion: 'as-number' | 'as-text') {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2;
    } else {
         result = input1.toString() + input2.toString();
    }
    return result;
}
const combineAges = combine(10, 20, 'as-number');
console.log(combineAges);

const combineword = combine('max', 'min', 'as-text');
console.log(combineword);