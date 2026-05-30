// JavaScript Identifier Rules and Examples

// 1. Identifiers can contain letters, digits, underscores, and dollar signs
let myVar = 10;
let my_var = 20;
let my$var = 30;
let myVar123 = 40;
let _privateVar = 50;
let $jquery = 60;

// 2. Identifiers must start with a letter, underscore (_), or dollar sign ($)
// Valid:
let _var = 1;
let $var = 2;
let var1 = 3;
let firstName = 4;

// Invalid (would cause syntax error if uncommented):
// let 1var = 5;
// let -var = 6;
// let var! = 7;

// 3. Identifiers are case-sensitive
let name = "John";
let Name = "Jane";
let NAME = "Bob";
console.log(name, Name, NAME); // All different

// 4. Identifiers cannot be reserved keywords
// Valid:
let myClass = "test";
let myfunc = function() { };

// Invalid (would cause syntax error if uncommented):
// let class = 10;
// let function = 20;

// 5. Identifiers can be of any length
let a = 1;
let verylongidentifiernamethatexplainswhatthevariablecontains = 1;

// 6. Use camelCase for variable and function names (convention)
let firstName = "John";
let lastName = "Doe";
function calculateTotalPrice() { }
let userEmailAddress = "user@example.com";

// 7. Use PascalCase for class and constructor names (convention)
class Person { }
class UserProfile { }
function MyConstructor() { }

// 8. Use UPPER_CASE for constants (convention)
const MAX_USERS = 100;
const DEFAULT_TIMEOUT = 5000;
const API_KEY = "abc123";

// 9. Avoid single letter variables (except in loops)
let count = 0;
for (let i = 0; i < 10; i++) { } // OK

// 10. Identifiers cannot contain spaces
// Valid:
let firstName = "John";

// Invalid (would cause syntax error if uncommented):
// let first name = "John";

// 11. Meaningful identifiers (best practice)
// Good:
let userAge = 25;
let isActive = true;
let calculateDiscount = function() { };

// Avoid:
let a = 25;
let x = true;
let func = function() { };

// 12. Identifiers with numbers
let user1 = "Alice";
let user2 = "Bob";
let version2_1 = "2.1";

// 13. Object property identifiers
let person = {
    firstName: "John",
    lastName: "Doe",
    email_address: "john@example.com",
    $id: 123,
    _hidden: "secret"
};

// 14. Function parameter identifiers
function greet(firstName, lastName) {
    console.log(`Hello ${firstName} ${lastName}`);
}

// 15. Destructuring with identifiers
let { firstName: fname, lastName: lname } = { firstName: "John", lastName: "Doe" };
let [first, second, third] = [1, 2, 3];
