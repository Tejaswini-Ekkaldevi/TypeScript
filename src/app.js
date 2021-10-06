var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var _a, _b;
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
//Classes and Interfaces
var Department = /** @class */ (function () {
    function Department(id, n) {
        this.id = id;
        this.name = n;
    }
    //Static Methods and properties
    Department.createEmployee = function (name) {
        return { name: name };
    };
    //constructor function
    Department.prototype.describe = function () {
        console.log("Department (" + this.id + ") : " + this.name);
    };
    return Department;
}());
var employee1 = Department.createEmployee('Shri');
console.log(employee1);
//Inheritance
var ITDepartment = /** @class */ (function (_super) {
    __extends(ITDepartment, _super);
    function ITDepartment(id, admins) {
        var _this = _super.call(this, id, 'IT') || this;
        _this.admins = admins;
        return _this;
    }
    return ITDepartment;
}(Department));
var cse = new ITDepartment('d1', ['max']);
cse.describe();
var cseCopy = { name: 'Dummy', describe: cse.describe };
//cseCopy.describe();
//private and public Access Modifiers
var Employee = /** @class */ (function () {
    function Employee(id, n) {
        this.employees = [];
        this.id = id;
        this.name = n;
    }
    //constructor function
    Employee.prototype.describe = function () {
        console.log("Department (" + this.id + ") : " + this.name);
    };
    Employee.prototype.addEmployee = function (emp) {
        this.employees.push(emp);
    };
    Employee.prototype.printEmpDetails = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    return Employee;
}());
var cse1 = new Employee('d2', 'Computer Science');
cse1.addEmployee('Jhon');
cse1.addEmployee('Smith');
//cse1.employees[2] = 'anna';
cse1.describe();
cse1.name = 'Nae name';
var cseCopy1 = { name: 'Dummy', describe: cse.describe };
// cseCopy1.describe();
cse1.printEmpDetails();
// Overriding Properties and protected modifier
var Accounting = /** @class */ (function (_super) {
    __extends(Accounting, _super);
    //Singletones or private constructors
    function Accounting(id, reports) {
        var _this = _super.call(this, id, 'Accounting') || this;
        _this.reports = reports;
        return _this;
    }
    Accounting.getInstance = function () {
        if (Accounting.instance) {
            return this.instance;
        }
        this.instance = new Accounting('d3', []);
        return this.instance;
    };
    Accounting.prototype.addEmployee = function (name) {
        if (name = 'Max') {
            return;
        }
        this.employees.push(name);
    };
    Accounting.prototype.addReport = function (text) {
        this.reports.push(text);
    };
    Accounting.prototype.printReports = function () {
        console.log(this.reports);
    };
    return Accounting;
}(Employee));
//const account = new Accounting('d2', []);
var account = Accounting.getInstance();
console.log(account);
account.addReport('Something went wrong');
account.printReports();
var Person = /** @class */ (function () {
    // age: 30;
    function Person(n) {
        this.name = n;
    }
    Person.prototype.greet = function (phrase) {
        console.log(phrase + ' ' + this.name);
    };
    return Person;
}());
var user;
user = new Person('Raj');
user.greet('Hello, I am ');
var addFn;
addFn = function (n1, n2) {
    return n1 + n2;
};
console.log(addFn(4, 4));
var e1 = {
    name: 'Raj',
    privileges: ['create-server'],
    startDate: new Date()
};
console.log(e1);
function sum(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
function printEmpInfo(emp) {
    console.log('Name: ' + emp.name);
    if ('privileges' in emp) {
        console.log('Previleges : ' + emp.privileges);
    }
    if ('startDate' in emp) {
        console.log('Start Date : ' + emp.startDate);
    }
}
printEmpInfo(e1);
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log('Driving...');
    };
    return Car;
}());
var Truck = /** @class */ (function () {
    function Truck() {
    }
    Truck.prototype.drive = function () {
        console.log('Driving a Truck...');
    };
    Truck.prototype.loadCargo = function (amount) {
        console.log('LoadCarGo...' + amount);
    };
    return Truck;
}());
var v1 = new Car();
var v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    //vehicle.loadCargo();
    if ('loadCargo' in vehicle) {
        vehicle.loadCargo(1000);
    }
}
useVehicle(v1);
useVehicle(v2);
function moveAnimal(animal) {
    //we can use like this also
    //if('flyingSpeed' in animal){
    //  console.log('Moving with speed : '+animal.flyingSpeed);
    //}
    var speed;
    switch (animal.type) {
        case 'bird':
            console.log('Moving at speed : ' + animal.flyingSpeed);
            break;
        case 'horse':
            console.log('Moving at speed : ' + animal.runningSpeed);
    }
}
moveAnimal({ type: 'bird', flyingSpeed: 10 });
// Type Casting
var userInput = document.getElementById('user-input');
if (userInput) {
    userInput.value = 'Hello Welcome';
}
var errorBag = {
    email: 'Not a valid email',
    uname: 'Must start with capital character.'
};
//OPtinal Chaining
var fetchedUserData = {
    id: 'u1',
    name: 'raj',
    job: { title: 'SE', description: 'My own job' }
};
console.log((_a = fetchedUserData === null || fetchedUserData === void 0 ? void 0 : fetchedUserData.job) === null || _a === void 0 ? void 0 : _a.title, (_b = fetchedUserData === null || fetchedUserData === void 0 ? void 0 : fetchedUserData.job) === null || _b === void 0 ? void 0 : _b.description);
//Generics
function merge(objA, objB) {
    //return Object.assign(objA, objB);
}
var mergeObj = merge({ name: 'Raj', hobbies: 'travelling' }, { age: 25 });
console.log(mergeObj);
//Working with contraints
function merge1(objA, objB) {
    //return Object.assign(objA, objB);
}
var mergeObj1 = merge1({ name: 'Raj', hobbies: 'travelling' }, { age: 25 });
console.log(mergeObj1);
function countAndDescribe(element) {
    var descriptionText = 'Got no value';
    if (element.length === 1) {
        descriptionText = 'Got 1 element';
    }
    else if (element.length > 1) {
        descriptionText = 'Got ' + element.length + ' elements.';
    }
    return [element, descriptionText];
}
console.log(countAndDescribe('Hi There!'));
// keyof contraint
function extractAndCovert(obj, key) {
    return 'Value ' + obj[key];
}
var s = extractAndCovert({ age: 20 }, 'age');
console.log(s);
//Generic Classes
var dataDtorage = /** @class */ (function () {
    function dataDtorage() {
        this.data = [];
    }
    dataDtorage.prototype.addItem = function (item) {
        this.data.push(item);
    };
    dataDtorage.prototype.removeItem = function (item) {
        this.data.splice(this.data.indexOf(item), 1);
    };
    dataDtorage.prototype.getItems = function () {
        return __spreadArray([], this.data, true);
    };
    return dataDtorage;
}());
var textStorage = new dataDtorage();
textStorage.addItem('Raj');
textStorage.addItem('Max');
textStorage.addItem('Smith');
textStorage.removeItem('Max');
console.log(textStorage.getItems());
//First class Decorator
function Logger(constructor) {
    console.log('Logging...');
    console.log(constructor);
}
var PersonData = /** @class */ (function () {
    function PersonData() {
        this.name = 'Max';
        console.log('Creating person object');
    }
    PersonData = __decorate([
        Logger
    ], PersonData);
    return PersonData;
}());
var pers = new PersonData();
console.log(pers);
//Decorator Factory
function Logger1(logString) {
    return function (constructor) {
        console.log(logString);
        console.log(constructor);
    };
}
function withTemplate(template, hookId) {
    return function (_) {
        var hookEl = document.getElementById(hookId);
        if (hookEl) {
            hookEl.innerHTML = template;
        }
    };
}
var PersonData1 = /** @class */ (function () {
    function PersonData1() {
        this.name = 'Max';
        console.log('Creating person object');
    }
    PersonData1 = __decorate([
        withTemplate('<h2>My Person Object</h2>', 'app')
        //@Logger1('LOGGING-PERSON')
    ], PersonData1);
    return PersonData1;
}());
var pers1 = new PersonData1();
console.log(pers1);
// Decorator Property
function Log(target, propertyName) {
    console.log('Property Decorator');
    console.log(target, propertyName);
}
var Product = /** @class */ (function () {
    function Product(t, p) {
        this.title = t;
        this._price = p;
    }
    Object.defineProperty(Product.prototype, "price", {
        set: function (val) {
            if (val > 0) {
                this._price = val;
            }
            else {
                throw new Error('Invalid price - should be positive!');
            }
        },
        enumerable: false,
        configurable: true
    });
    Product.prototype.getPriceWithTax = function (tax) {
        return this._price * (1 + tax);
    };
    __decorate([
        Log
    ], Product.prototype, "title");
    return Product;
}());
