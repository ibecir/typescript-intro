class Point {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
};

const pt = new Point(10, 12);
pt.x = 0;
pt.y = 0;

// Fields may be prefixed with the readonly modifier.
// This prevents assignments to the field outside of the constructor.
class Student {
    // We will not set it in the constructor, we will initialize it latter
    readonly name!: string;

    constructor(name?: string) {
        this.name = name || 'empty name';
    }
}

let s = new Student();
console.log(s.name);

enum Gender {
    MALE = 'MALE',
    FEMALE = 'FEMALE'
}

class Person {
    public name: string;
    protected age: number;
    readonly gender: Gender;

    constructor(name: string, age: number, gender: Gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    getAge(): number {
        return this.age;
    }

    greetMe(): void {
        console.log("Greeting from base class");
    }

    greet() {
        console.log("Hello, world!");
    }
}

// Change strictPropertyInitialization in tsconfig
class Professor extends Person {
    private _title: string;

    get title(): string {
        return this._title;
    }

    set title(title: string) {
        this._title = title;
    }

    constructor(name: string, age: number, gender: Gender, title: string) {
        super(name, age, gender);
        this._title = title;
    }

    greetMe(): void {
        console.log("Greeting from derived class");
    }

    greet(name?: string) {
        if (name === undefined) {
            super.greet();
        } else {
            console.log(`Hello, ${name.toUpperCase()}`);
        }
    }
}

let p = new Professor("Becir", 29, Gender.MALE, 'PhD');
console.log(p.name, p.getAge(), p.gender, p.title);
p.greet("bele");

class Greeter {
    public greet() {
        console.log("Hello, " + this.getName());
    }
    protected getName() {
        return "hi";
    }
}

class SpecialGreeter extends Greeter {
    public howdy() {
        console.log("Howdy, " + this.getName());
    }
}
const g = new SpecialGreeter();
g.greet(); // OK
// g.getName(); // Property 'getName' is protected and only accessible within class 'Greeter' and its subclasses.

class Vehicle {
    static x: number = 0;
}
let v = new Vehicle();
console.log(Vehicle.x);
let dino = new Vehicle();

// console.log(v.x); // Not allowed as it is static field
console.log(Vehicle.x);

