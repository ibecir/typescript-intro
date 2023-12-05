// Always specify the return type of a method to get the full 
// benefit of using the TS (error will be returned if wrong type is used or returned)
// Uncomment the "noUnusedParameters" property in config so compiler
// can give you warning when there are unused variables in the code
function calculateTax(income: number): number {
    if (income < 50_000)
        return income * 1.2;
    return income * 1.3;
}

function calculateTaxExpanded(income: number, taxYear?: number): number {
    if ((taxYear || 2022) < 2023) // first option is to use the JS syntax so if taxYear is undefined use the 2022
        return income * 1.2;
    return income * 1.3;
}
function calculateTaxExpandedV2(income: number, taxYear: number = 2023): number {
    if (taxYear < 2023) // first option is to use the JS syntax so if taxYear is undefined use the 2022
        return income * 1.2;
    return income * 1.3;
}

calculateTaxExpanded(10_000);
calculateTaxExpandedV2(10_000);