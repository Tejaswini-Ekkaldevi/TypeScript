function add(a: number, b: number){
    return a + b;
}

function printResult(num: number): void {
    console.log('Result is : ' +num);
}

printResult(add(10,40));

let combineValues;
combineValues = add ;
console.log(combineValues(8, 8));

//callbacks

function Handle(n1: number, n2: number, cb: (num: number) =>void) {
    const res = n1 + n2;
    cb(res);
}
Handle(50, 20, (res)=>
console.log(res));

