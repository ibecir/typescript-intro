let sales: number = 123_456_789;
let course: string = 'TypeScript';
let is_published: boolean = true;

let level; // The TS compiler will infer that this can by of any type
level = 1;
level = "My number"; // Any type just goes the opposite of what TS is and we should avoid using it whenever possible

// This error can be removed by changing the param "noImplicitAny" to false in config file
function render(document: any) {
    console.log(document);
}

// arrays
let numbers: number[] = [1, 2, 3];
numbers.forEach(n => n.toFixed(2)) // The benefit of TS is that you get the autocomplete on the objects and variables

// tuples - fixed length array where each element has a specific type
// Internally, they are using the plain arrays in JS
// Use them only when you have two values in your tuple, having multiple values is confusing
let user: [number, string] = [1, 'Becir'];
user.push(1); // Gap in TS this should not be allowed

// Enums - list of related constants
// Use the PascalNamingConvention
enum Size {
    SMALL,  // 0
    MEDIUM, // 1
    LARGE   // 2
}

enum SizeV2 {
    SMALL = 2,  // 2
    MEDIUM,     // 3
    LARGE       // 4
}

// Use it to generate more optimized JS code
const enum SizeV3 {
    SMALL = 'S',
    MEDIUM = 'M',
    LARGE = 'L'
}

let mySize: Size = Size.SMALL;
console.log(mySize); // 0 is the output

