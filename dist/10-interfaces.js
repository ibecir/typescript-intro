"use strict";
class Cow {
    constructor(thing, numOfLegs) {
        this.thing = thing;
        this.numOfLegs = numOfLegs;
    }
    walk() {
        throw new Error("Method not implemented.");
    }
    eat() {
        throw new Error("Method not implemented.");
    }
    stop() {
        throw new Error("Method not implemented.");
    }
}
let CowX = {
    thing: "Becir",
    numOfLegs: 2,
    walk() {
        throw new Error("Method not implemented.");
    },
    eat() {
        throw new Error("Method not implemented.");
    }
};
//# sourceMappingURL=10-interfaces.js.map