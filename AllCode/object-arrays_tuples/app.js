var person = {
    name: 'Teju',
    age: 21,
    // array
    hobbies: ['Cooking', 'Travelling'],
    // typle
    role: [2, 'author']
};
console.log(person);
//console.log(person.hobbies);
//person.role.push('abc');
// person.role[1] = 10;
console.log(person.role);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
}
var product = {
    id: 'abc1',
    price: 12.99,
    tags: ['great-offer', 'hot-and-new'],
    details: {
        title: 'Red Carpet',
        description: 'A great carpet - almost brand-new!'
    }
};
console.log(product);
