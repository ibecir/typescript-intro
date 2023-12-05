"use strict";
function calculateTax(income) {
    if (income < 50000)
        return income * 1.2;
    return income * 1.3;
}
function calculateTaxExpanded(income, taxYear) {
    if ((taxYear || 2022) < 2023)
        return income * 1.2;
    return income * 1.3;
}
function calculateTaxExpandedV2(income, taxYear = 2023) {
    if (taxYear < 2023)
        return income * 1.2;
    return income * 1.3;
}
calculateTaxExpanded(10000);
calculateTaxExpandedV2(10000);
//# sourceMappingURL=2-functions.js.map