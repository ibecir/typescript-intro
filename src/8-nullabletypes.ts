function greet(name: string | null | undefined) {
    if (name)
        console.log(name.toUpperCase);
}

// In JS it is valid to call this function with null or undefined, ts does not allow this
// greet(undefined); or greet(null); will return nas a compile time error
greet(null);