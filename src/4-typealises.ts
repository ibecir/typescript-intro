// 1. Do not repeat yourself - DRY
type Employee = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
};

let employeeObject: Employee = {
    id: 1,
    name: 'Becir',
    retire: retireEmployee
};

function retireEmployee(date: Date): void {
    console.log("The retirement date is ", date);
}