function combine(
//Union
input1, input2, 
//literal
resultConversion) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var combineAges = combine(10, 20, 'as-number');
console.log(combineAges);
var combineword = combine('max', 'min', 'as-text');
console.log(combineword);
