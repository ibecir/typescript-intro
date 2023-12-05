type Customer = {
    birthday?: Date
};

function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(0);
// console.log(customer.birthday) // Will return us an error us the customer can be null or undefined
if (customer != null && customer != undefined)
    console.log(customer.birthday);

// The ?. is referred to as an optional property access operator
console.log(customer?.birthday?.getFullYear());

// Optional element access operator used for the arrays
// Let us say we have an array of customers and we want to access the first element of the array
// But what if that array is null or undefined? The error will happen if we try to access it
let customers: number[] | undefined = undefined;
console.log(customers?.[0])

// Optional call operator
let log: any = (message: string) => console.log(message);
log('becir');

let logAgain: any = null;
// logAgain('becir'); // Will throw an error as logAgain is null
logAgain?.('becir'); // The code will not execute at all as the logAgain is null

