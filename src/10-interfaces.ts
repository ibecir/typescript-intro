interface Eatable {
    thing: string;
    eat(): string;
}

interface Walkable {
    numOfLegs: number;
    walk(): void;
}

interface Walkable {
    stop(): void;
}

class Cow implements Eatable, Walkable {
    thing: string;
    numOfLegs: number;
    constructor(thing: string, numOfLegs: number) {
        this.thing = thing
        this.numOfLegs = numOfLegs;
    }
    walk(): void {
        throw new Error("Method not implemented.");
    }
    eat(): string {
        throw new Error("Method not implemented.");
    }
    stop(): void {
        throw new Error("Method not implemented.");
    }
}

// Types

type EatableX = {
    thing: string;
    eat(): string;
}

type WalkableX = {
    numOfLegs: number;
    walk(): void;
}

type Ability = WalkableX & EatableX;

let CowX: Ability = {
    thing: "Becir",
    numOfLegs: 2,
    walk(): void {
        throw new Error("Method not implemented.");
    },
    eat(): string {
        throw new Error("Method not implemented.");
    }
}

/* 
In TypeScript, both types and interfaces are used to define shapes or structures of objects, but there are some differences between them. Here are the key distinctions:

1. Declaration Keyword:

Type: Defined using the type keyword.
Interface: Defined using the interface keyword.

2. Extending and Merging:

Type: Can be used to create union types, intersections, and mapped types. 
It can also be used to define primitive types, aliases, and tuple types.

Interface: Can be extended by other interfaces, allowing for the merging 
of interface declarations with the same name.

3. Declaration Merging:

Type: Does not support declaration merging.
Interface: Supports declaration merging. When you declare two 
interfaces with the same name, they are merged into a single interface.

4. Compatibility:

Type: Can represent primitives, unions, intersections, and other complex types.
Interface: Primarily used for defining object shapes and contracts. Interfaces 
can be more suitable when you want to explicitly define a contract that a class 
or object must adhere to.

5. Implements Clause:

Type: Cannot be used with the implements clause.
Interface: Can be used with the implements clause to explicitly state that a 
class adheres to the structure defined by the interface.

In practice, both types and interfaces can often be used interchangeably, and 
the choice between them depends on the specific use case and personal or team 
preference. Some developers prefer using interfaces for object shapes and types 
for other scenarios, while others use them interchangeably based on their specific 
features and requirements.
*/