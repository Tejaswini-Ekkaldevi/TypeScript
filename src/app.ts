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

//Intersection Types

type Admin = {
    name: string;
    privileges: string[];
};

type Employee1 = {
    name: string;
    startDate: Date;
};

type ElevatedEmployee = Admin & Employee1;

const e1 : ElevatedEmployee = {
    name: 'Raj',
    privileges: ['create-server'],
    startDate: new Date()
};
console.log(e1);

// Type Guards
type combinable = string | number;
//function overloading
function sum(a: number, b: number): number;
function sum(a: string, b: string): string;
function sum(a: combinable, b: combinable) {
    if(typeof a === 'string' || typeof b === 'string' ) {
        return a.toString() + b.toString();
    }
    return a + b;
}

type unknownEmp = Admin | Employee1;

function printEmpInfo(emp: unknownEmp){
    console.log('Name: '+emp.name);
    if('privileges' in emp){
        console.log('Previleges : '+emp.privileges);
    }
    if('startDate' in emp){
        console.log('Start Date : '+emp.startDate);
    }
}
printEmpInfo(e1);


class Car{
    drive(){
        console.log('Driving...')
    }
}

class Truck{
    drive(){
        console.log('Driving a Truck...');
    }
    loadCargo(amount){
        console.log('LoadCarGo...'+amount);
    }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle){
    vehicle.drive();
    //vehicle.loadCargo();
    if('loadCargo' in vehicle){
        vehicle.loadCargo(1000);
    }

}
useVehicle(v1);
useVehicle(v2);

//Discriminated Unions

interface Bird{
    type: 'bird';
    flyingSpeed: number;
}
interface Horse{
    type: 'horse';
    runningSpeed: number;
}

type Animal =Bird | Horse;
function moveAnimal(animal: Animal){
    //we can use like this also
    //if('flyingSpeed' in animal){
      //  console.log('Moving with speed : '+animal.flyingSpeed);
    //}
    let speed;
    switch(animal.type){
        case 'bird':
            console.log('Moving at speed : '+animal.flyingSpeed);
            break;
        case 'horse':
            console.log('Moving at speed : '+animal.runningSpeed);
    }
}
moveAnimal({type: 'bird', flyingSpeed: 10});

// Type Casting
const userInput = document.getElementById('user-input');
if(userInput){
    (userInput as HTMLInputElement).value = 'Hello Welcome';
}

//Index Properties
interface errorContainer{
    [prop: string]: string;
}

const errorBag: errorContainer ={
    email: 'Not a valid email',
    uname: 'Must start with capital character.'
}

//OPtinal Chaining

const fetchedUserData = {
    id: 'u1',
    name: 'raj',
    job: {title: 'SE', description:'My own job'}
};
console.log(fetchedUserData?.job?.title, fetchedUserData?.job?.description);

//Generics
function merge<T, U>(objA: T, objB: U){
    //return Object.assign(objA, objB);
}
const mergeObj = merge({name: 'Raj', hobbies: 'travelling'}, {age: 25});
console.log(mergeObj);

//Working with contraints
function merge1<T extends object, U extends object>(objA: T, objB: U){
    //return Object.assign(objA, objB);
}
const mergeObj1 = merge1({name: 'Raj', hobbies: 'travelling'}, {age: 25});
console.log(mergeObj1);

// Another Generic Function

interface Lengthy{
    length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
    let descriptionText = 'Got no value';
    if(element.length === 1){
        descriptionText = 'Got 1 element';
    }else if(element.length > 1) {
        descriptionText = 'Got ' + element.length + ' elements.'
    }
    return[element, descriptionText];
}
console.log(countAndDescribe('Hi There!'));

// keyof contraint
function extractAndCovert<T extends object, U extends keyof T>(obj: T, key: U) {
    return 'Value ' + obj[key];
} 
const s = extractAndCovert({age:  20}, 'age');
console.log(s);

//Generic Classes

class dataDtorage<T> {
    private data: T[] = [];

    addItem(item: T){
        this.data.push(item);
    }

    removeItem(item: T){
        this.data.splice(this.data.indexOf(item),1);
    }

    getItems(){
        return [...this.data];

    }
}
const textStorage = new dataDtorage<string>();
textStorage.addItem('Raj');
textStorage.addItem('Max');
textStorage.addItem('Smith');
textStorage.removeItem('Max');
console.log(textStorage.getItems());
