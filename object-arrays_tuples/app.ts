const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
    name : 'Teju',
    age : 21,
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

for(let hobby of person.hobbies) {
  console.log(hobby);
}

const product = {
    id: 'abc1',
    price: 12.99,
    tags: ['great-offer', 'hot-and-new'],
    details: {
      title: 'Red Carpet',
      description: 'A great carpet - almost brand-new!'
    }
  }

  console.log(product);