function add(n1: number, n2: number, showResult: boolean, phrase: string) {
    const result = n1 + n2 ;
    if (showResult) {
        console.log(phrase + result);
    } else {
        return result;
    }
}

const num1 = 5;
const num2 = 3.5;
const printPhrase = "Result is : ";
const printResult = true;
add(num1, num2, printResult, printPhrase);