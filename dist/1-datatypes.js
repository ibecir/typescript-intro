"use strict";
let sales = 123456789;
let course = 'TypeScript';
let is_published = true;
let level;
level = 1;
level = "My number";
function render(document) {
    console.log(document);
}
let numbers = [1, 2, 3];
numbers.forEach(n => n.toFixed(2));
let user = [1, 'Becir'];
user.push(1);
var Size;
(function (Size) {
    Size[Size["SMALL"] = 0] = "SMALL";
    Size[Size["MEDIUM"] = 1] = "MEDIUM";
    Size[Size["LARGE"] = 2] = "LARGE";
})(Size || (Size = {}));
var SizeV2;
(function (SizeV2) {
    SizeV2[SizeV2["SMALL"] = 2] = "SMALL";
    SizeV2[SizeV2["MEDIUM"] = 3] = "MEDIUM";
    SizeV2[SizeV2["LARGE"] = 4] = "LARGE";
})(SizeV2 || (SizeV2 = {}));
let mySize = Size.SMALL;
console.log(mySize);
//# sourceMappingURL=1-datatypes.js.map