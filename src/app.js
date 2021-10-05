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
var hobbies = ['sports', 'cooking'];
var activehobby = ['travelling'];
activehobby.push.apply(activehobby, hobbies);
console.log(activehobby);
var person = {
    uname: 'max',
    age: 20
};
var copiedPerson = __assign({}, person);
