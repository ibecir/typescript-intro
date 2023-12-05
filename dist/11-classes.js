"use strict";
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
;
const pt = new Point(10, 12);
pt.x = 0;
pt.y = 0;
class Student {
    constructor(name) {
        this.name = name || 'empty name';
    }
}
let s = new Student();
console.log(s.name);
var Gender;
(function (Gender) {
    Gender["MALE"] = "MALE";
    Gender["FEMALE"] = "FEMALE";
})(Gender || (Gender = {}));
class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    getAge() {
        return this.age;
    }
    greetMe() {
        console.log("Greeting from base class");
    }
    greet() {
        console.log("Hello, world!");
    }
}
class Professor extends Person {
    get title() {
        return this._title;
    }
    set title(title) {
        this._title = title;
    }
    constructor(name, age, gender, title) {
        super(name, age, gender);
        this._title = title;
    }
    greetMe() {
        console.log("Greeting from derived class");
    }
    greet(name) {
        if (name === undefined) {
            super.greet();
        }
        else {
            console.log(`Hello, ${name.toUpperCase()}`);
        }
    }
}
let p = new Professor("Becir", 29, Gender.MALE, 'PhD');
console.log(p.name, p.getAge(), p.gender, p.title);
p.greet("bele");
class Greeter {
    greet() {
        console.log("Hello, " + this.getName());
    }
    getName() {
        return "hi";
    }
}
class SpecialGreeter extends Greeter {
    howdy() {
        console.log("Howdy, " + this.getName());
    }
}
const g = new SpecialGreeter();
g.greet();
class Vehicle {
}
Vehicle.x = 0;
let v = new Vehicle();
console.log(Vehicle.x);
//# sourceMappingURL=11-classes.js.map