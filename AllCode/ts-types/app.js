function add(n1, n2, showResult, phrase) {
    var result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
var num1 = 5;
var num2 = 3.5;
var printPhrase = "Result is : ";
var printResult = true;
add(num1, num2, printResult, printPhrase);
