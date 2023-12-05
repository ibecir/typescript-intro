// 1st
var rect = { x: 0, y: 10, width: 15, height: 20 };

// Destructuring assignment
var { x, y, width, height } = rect;
console.log(x, y, width, height); // 0,10,15,20

rect.x = 10;
({ x, y, width, height } = rect); // assign to existing variables using outer parentheses
console.log(x, y, width, height); // 10,10,15,20

// 2nd
var { w, x, ...remaining } = { w: 1, x: 2, y: 3, z: 4 };
console.log(w, x, remaining); // 1, 2, {y:3,z:4}


// 3rd
// Example function
function goto(point2D: { x: number, y: number }) {
    // Imagine some code that might break
    // if you pass in an object
    // with more items than desired
}
// Some point you get from somewhere
const point3D = { x: 1, y: 2, z: 3 };
/** A nifty use of rest to remove extra properties */
const { z, ...point2D } = point3D;
goto(point2D);

// 4th
var x = 1, y = 2;
[x, y] = [y, x];
console.log(x, y); // 2,1

//5th
var [x, y, ...remainings] = [1, 2, 3, 4];
console.log(x, y, remainings); // 1, 2, [3,4]

//6th
var [x, , ...remaininga] = [1, 2, 3, 4];
console.log(x, remaininga); // 1, [3,4]