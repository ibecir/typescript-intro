type NumericRecord = Record<string, number>
const salary: NumericRecord = { annual: 56000, bonus: 1200 } // OK
const salary1: NumericRecord = { annual: 56000 } // OK
const salary2: NumericRecord = { monthly: 8000 } // OK
const salary3: NumericRecord = {}               // OK
const salary4: NumericRecord = { foo: 0, bar: 1, baz: -2 } // OK

type T1 = Record<string, string>           // OK
type T2 = Record<number, number>           // OK
type T3 = Record<string, () => void>       // OK
type T4 = Record<number | 'key1', boolean> // OK
type T5 = Record<'key1' | 'key2', boolean> // OK

type T6 = Record<string, Record<string, number>> // OK
type T7 = Record<string, { payment: number }>    // OK

// Types like boolean, object, Function, etc.are not accepted as keys:

// Unions
type Salary = Record<'annual' | 'bonus', number>
const salary12: Salary = { annual: 56000, bonus: 1200 } // OK


//Using less than necessary or keys than aren't in the union is prohibited:

// const salary14: Salary = { annual: 56000 } // Type error!
// const salary24: Salary = { bonus: 1200 }   // Type error!
// const salary34: Salary = {}               // Type error!
// const salary44: Salary = { monthly: 8000 } // Type error!

// Usage
type SalaryX = Record<'annual' | 'bonus', number>
// is equivalent to
type SalaryObjX = {
    annual: number
    bonus: number
}

interface CatInfo {
    age: number;
    breed: string;
}

type CatName = "miffy" | "boris" | "mordred";

const cats: Record<CatName, CatInfo> = {
    miffy: { age: 10, breed: "Persian" },
    boris: { age: 5, breed: "Maine Coon" },
    mordred: { age: 16, breed: "British Shorthair" },
};

cats.boris;