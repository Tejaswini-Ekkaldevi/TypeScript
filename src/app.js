var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// spread operator
var hobbies = ['sports', 'cooking'];
var activehobby = ['travelling'];
activehobby.push.apply(activehobby, hobbies);
console.log(activehobby);
var person = {
    uname: 'max',
    age: 20
};
var copiedPerson = __assign({}, person);
// Rest parameter
var add = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (curRes, curVal) {
        return curRes + curVal;
    }, 0);
};
var addnumbers = add(10, 25, 4.5, 6);
console.log(addnumbers);
// Arrays and Object Destructuring
var hobby1 = hobbies[0], hobby2 = hobbies[1], remainingHobbies = hobbies.slice(2);
console.log(hobbies, hobby1, hobby2);
var firstName = person.uname, age = person.age;
console.log(firstName, age, person);
