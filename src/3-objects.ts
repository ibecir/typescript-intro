// Objects in JS are dynamic (you can change the properties)
let employee = {
    id: 1
};

// employee.name = 'Becir'; // This is not allowed in the TS

let student: {
    readonly id: number, // You cannot modify this property
    name: string,
    fax?: string, // Optional parameter in this object
    enroll: (date: Date) => void
} = {
    id: 1,
    name: 'Becir',
    enroll: (date: Date) => {
        console.log("The enrollment date is ", date);
    }
};