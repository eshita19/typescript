"use strict";
//Core types in typescript
const add = (a, b) => a + b;
console.log("Addition of two numbers: " + add(1, 1));
const printFunc = () => console.log("Prinitng function");
var ROLE;
(function (ROLE) {
    ROLE["MANAGER"] = "manager";
    ROLE["ENGINEER"] = "engineer";
})(ROLE || (ROLE = {})); // enum
const person = {
    name: 'eshita',
    age: 31,
    married: true,
    hobbies: ['keyboard', 'guitar', 'singing'],
    props: ['heloo', 12, '234'],
    role: ROLE.ENGINEER
};
console.log(person.role);
const user = { name: "eshita", age: 31 };
//# sourceMappingURL=index.js.map