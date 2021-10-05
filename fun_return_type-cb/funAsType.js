function add(a, b) {
    return a + b;
}
function printResult(num) {
    console.log('Result is : ' + num);
}
printResult(add(10, 40));
var combineValues;
combineValues = add;
console.log(combineValues(8, 8));
//callbacks
function Handle(n1, n2, cb) {
    var res = n1 + n2;
    cb(res);
}
Handle(50, 20, function (res) {
    return console.log(res);
});
