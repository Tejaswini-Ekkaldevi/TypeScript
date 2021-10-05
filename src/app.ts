// spread operator
const hobbies = ['sports', 'cooking'];
const activehobby = ['travelling'];

activehobby.push(...hobbies);

console.log(activehobby);

const person = {
    uname : 'max',
    age : 20
}
const copiedPerson = {...person};

// Rest parameter

const add = (...numbers: number[]) => {
    return numbers.reduce((curRes, curVal) => {
        return curRes + curVal;
    },0);
}
const addnumbers = add(10, 25, 4.5, 6);
console.log(addnumbers);

// Arrays and Object Destructuring

const [hobby1, hobby2, ...remainingHobbies] = hobbies;
console.log(hobbies, hobby1, hobby2);

const {uname: firstName, age} = person;
console.log(firstName, age, person);


//Classes and Interfaces

class Department {
    id: string;
    name: string;

    constructor(id:string, n: string) {
        this.id = id;
        this.name = n ;
    }

    //Static Methods and properties
    static createEmployee(name: string){
        return{name: name};
    }
    //constructor function
    describe(this: Department) {
       console.log(`Department (${this.id}) : ${this.name}`)
    } 
}

const employee1 = Department.createEmployee('Shri');
console.log(employee1);
//Inheritance

class ITDepartment extends Department {
    admins: string[];
    constructor(id: string, admins: string[]) {
        super(id, 'IT');
        this.admins = admins;
    }
}

const cse = new ITDepartment('d1',['max']);
cse.describe();

const cseCopy = {name: 'Dummy', describe:cse.describe};
//cseCopy.describe();



//private and public Access Modifiers

class Employee {
    id: string;
    name: string;
    protected employees: string[] = [];

    constructor(id:string, n: string) {
        this.id = id;
        this.name = n ;
    }
    //constructor function
    describe(this: Employee) {
        console.log(`Department (${this.id}) : ${this.name}`)
    } 
    addEmployee (emp: string) {
        this.employees.push(emp);
    }
    printEmpDetails() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

const cse1 = new Employee('d2', 'Computer Science');
cse1.addEmployee('Jhon');
cse1.addEmployee('Smith');
//cse1.employees[2] = 'anna';

cse1.describe();
cse1.name = 'Nae name';
const cseCopy1 = {name: 'Dummy', describe:cse.describe};
// cseCopy1.describe();
cse1.printEmpDetails();

// Overriding Properties and protected modifier

class Accounting extends Employee {
    private static  instance: Accounting;
    //Singletones or private constructors
     private constructor(id: string, private reports: string[]) {
        super(id, 'Accounting');
    }
    static getInstance() {
        if(Accounting.instance){
            return this.instance;
        }
        this.instance = new Accounting('d3', []);
        return this.instance;
    }

    addEmployee(name: string) {
        if(name = 'Max') {
            return;
        }
        this.employees.push(name);
    }

    addReport(text: string) {
        this.reports.push(text);
    }

    printReports(){
        console.log(this.reports);
    }
}

//const account = new Accounting('d2', []);
const account = Accounting.getInstance();
console.log(account);
account.addReport('Something went wrong');
account.printReports(); 


// Interface
//& Using Interfaces with class 
interface Named {
    readonly name: string;
    //Optional property indicated using the '?'
    outputName?: string;
}
//Extending interfaces

interface Greetable extends Named {
    greet(phrase: string):void;
}
class Person implements Greetable {
    name:string;
    age: 30;
    constructor(n: string) {
        this.name = n;
    }
    greet(phrase: string){
        console.log(phrase + ' ' + this.name);      
    }
}

let user: Greetable;
user = new Person('Raj');
user.greet('Hello, I am ');
/*
 user = {
     name:'Raj',
    age: 25;
     greet(phrase: string) {
         return(phrase + ' ' + this.name);
     }
 }
 console.log(user.greet('Hello, I am '));
 */

// Interfaces as function Types
interface AddFn {
    (a: number, b: number): number;
}
let addFn: AddFn;
addFn = (n1: number, n2: number) => {
    return n1 + n2;
};
console.log(addFn(4,4));
