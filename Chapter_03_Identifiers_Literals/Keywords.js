// JavaScript Standard Keywords - Simple Examples

// 1. break - Exit a loop or switch
for (let i = 0; i < 5; i++) {
    if (i === 3) break;
}

// 2. case - Option in a switch statement
switch (1) {
    case 1:
        console.log("One");
}

// 3. catch - Handle errors in try-catch
try { throw new Error("Test"); } catch (e) { console.log(e); }

// 4. class - Define a class
class Animal { }

// 5. const - Declare a constant variable
const PI = 3.14;

// 6. continue - Skip to next loop iteration
for (let i = 0; i < 3; i++) {
    if (i === 1) continue;
}

// 7. debugger - Pause execution in debugger
debugger;

// 8. default - Default case in switch
switch (2) {
    default: console.log("Default");
}

// 9. delete - Delete object property
let obj = { x: 1 };
delete obj.x;

// 10. do - Do-while loop
do { } while (false);

// 11. else - Alternative condition
if (false) { } else { console.log("Else block"); }

// 12. export - Export module
export const myVar = 10;

// 13. extends - Inherit from class
class Dog extends Animal { }

// 14. false - Boolean false value
let flag = false;

// 15. finally - Execute after try-catch
try { } catch (e) { } finally { console.log("Done"); }

// 16. for - Loop through values
for (let i = 0; i < 3; i++) { }

// 17. function - Define a function
function add(a, b) { return a + b; }

// 18. if - Conditional statement
if (true) { console.log("True"); }

// 19. import - Import module
import { myVar } from './module.js';

// 20. in - Check if property exists in object
let hasX = 'x' in { x: 1 };

// 21. instanceof - Check if object is instance of class
let arr = [];
console.log(arr instanceof Array);

// 22. let - Declare block-scoped variable
let x = 10;

// 23. new - Create new object instance
let date = new Date();

// 24. null - Null value
let empty = null;

// 25. return - Return from function
function getValue() { return 42; }

// 26. static - Static class method
class Counter {
    static count() { return 0; }
}

// 27. super - Call parent class method
class Cat extends Animal {
    constructor() { super(); }
}

// 28. switch - Switch statement
switch (1) {
    case 1: break;
}

// 29. this - Reference to current object
let person = { name: "John", greet: function() { console.log(this.name); } };

// 30. throw - Throw an error
throw new Error("Something went wrong");

// 31. true - Boolean true value
let isActive = true;

// 32. try - Try-catch block
try { console.log("Try block"); } catch (e) { }

// 33. typeof - Get data type
console.log(typeof 42);

// 34. var - Declare function-scoped variable
var y = 20;

// 35. void - Void operator (returns undefined)
void 0;

// 36. while - While loop
while (false) { }

// 37. with - Access object properties (deprecated)
with (Math) { console.log(PI); }

// 38. yield - Yield value in generator
function* generator() { yield 1; }
