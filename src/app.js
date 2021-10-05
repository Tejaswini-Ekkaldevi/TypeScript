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
