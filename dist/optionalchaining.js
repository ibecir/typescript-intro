"use strict";
var _a;
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(0);
if (customer != null && customer != undefined)
    console.log(customer.birthday);
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
let customers = undefined;
console.log(customers === null || customers === void 0 ? void 0 : customers[0]);
let log = (message) => console.log(message);
log('becir');
let logAgain = null;
logAgain === null || logAgain === void 0 ? void 0 : logAgain('becir');
//# sourceMappingURL=optionalchaining.js.map