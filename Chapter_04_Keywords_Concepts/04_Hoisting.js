// ========================================
// HOISTING - Properties & Concepts
// ========================================

// HOISTING: Variables and functions are "moved" to the top of their scope
// during the compile phase, before code execution.

// ========================================
// 1. VAR HOISTING
// ========================================
// var declarations are hoisted and initialized as undefined

console.log(x); // Output: undefined (NOT an error)
var x = 5;
console.log(x); // Output: 5

// The above code is interpreted as:
// var x;           // Declaration hoisted and initialized as undefined
// console.log(x);  // undefined
// x = 5;           // Assignment happens here
// console.log(x);  // 5

// ========================================
// 2. LET HOISTING (Temporal Dead Zone)
// ========================================
// let declarations are hoisted but NOT initialized

// console.log(y); // Error: Cannot access 'y' before initialization
let y = 10;
console.log(y); // Output: 10

// The above code interpretation:
// Zone between declaration and assignment is called Temporal Dead Zone (TDZ)
// Accessing variables in TDZ throws a ReferenceError

// ========================================
// 3. CONST HOISTING (Temporal Dead Zone)
// ========================================
// const declarations are hoisted but NOT initialized (same as let)

// console.log(z); // Error: Cannot access 'z' before initialization
const z = 15;
console.log(z); // Output: 15

// ========================================
// 4. FUNCTION HOISTING - Function Declarations
// ========================================
// Function declarations are completely hoisted (declaration + definition)

console.log(add(2, 3)); // Output: 5 (works even before declaration)

function add(a, b) {
  return a + b;
}

// The above code is interpreted as:
// function add(a, b) {
//   return a + b;
// }
// console.log(add(2, 3)); // 5

// ========================================
// 5. FUNCTION HOISTING - Function Expressions
// ========================================
// Function expressions are NOT hoisted (only variable hoisting occurs)

// console.log(multiply(2, 3)); // Error: multiply is not a function
var multiply = function(a, b) {
  return a * b;
};
console.log(multiply(2, 3)); // Output: 6

// The above code is interpreted as:
// var multiply;              // hoisted as undefined
// console.log(multiply(2, 3)); // Error: multiply is not a function
// multiply = function(a, b) { return a * b; };

// ========================================
// 6. ARROW FUNCTION HOISTING
// ========================================
// Arrow functions are NOT hoisted

// console.log(subtract(5, 2)); // Error: subtract is not a function
const subtract = (a, b) => a - b;
console.log(subtract(5, 2)); // Output: 3

// ========================================
// 7. HOISTING WITH MULTIPLE VARIABLES
// ========================================

function testHoisting() {
  console.log(a); // Output: undefined
  console.log(b); // Error: Cannot access 'b' before initialization
  
  var a = 1;
  let b = 2;
}
 //testHoisting(); // Uncomment to see the behavior

// ========================================
// 8. HOISTING IN BLOCK SCOPE
// ========================================
// let and const are hoisted within their block scope

function blockScopeHoisting() {
  console.log(x); // Error: Cannot access 'x' before initialization
  
  if (true) {
    // Temporal Dead Zone for x starts here
    console.log(x); // Error: Cannot access 'x' before initialization
    let x = 10;
    console.log(x); // Output: 10
  }
}

// blockScopeHoisting(); // Uncomment to see the behavior

// ========================================
// 9. FUNCTION DECLARATION vs EXPRESSION HOISTING
// ========================================

// Function Declaration - Fully Hoisted
console.log(greet1("Alice")); // Output: Hello Alice

function greet1(name) {
  return "Hello " + name;
}

// Function Expression - NOT Hoisted
// console.log(greet2("Bob")); // Error: greet2 is not a function
var greet2 = function(name) {
  return "Hello " + name;
};
console.log(greet2("Bob")); // Output: Hello Bob

// ========================================
// 10. HOISTING WITH SAME VARIABLE NAME
// ========================================
// var can be re-declared, showing hoisting behavior

function sameNameHoisting() {
  console.log(name); // Output: undefined (first var hoisted)
  
  if (true) {
    var name = "John"; // Overwrites the previous var
  }
  
  console.log(name); // Output: John (function-scoped)
}

// sameNameHoisting(); // Uncomment to see the behavior

// ========================================
// 11. CLASS HOISTING
// ========================================
// Classes are hoisted but NOT initialized (similar to let/const)

// const obj = new MyClass(); // Error: Cannot access 'MyClass' before initialization

class MyClass {
  constructor(name) {
    this.name = name;
  }
}

const obj = new MyClass("Test"); // Works here
console.log(obj.name); // Output: Test

// ========================================
// 12. PRACTICAL EXAMPLE - Avoiding Hoisting Issues
// ========================================

// BEFORE (problematic code):
/*
function processData() {
  console.log(data); // undefined
  
  if (condition) {
    var data = fetchData(); // var is hoisted to function scope
  }
  
  console.log(data); // May still be undefined unexpectedly
}
*/

// AFTER (best practice):
function processDataBetter() {
  let data; // Declare at the top for clarity
  
  if (true) {
    data = "Fetched Data"; // Assign here
  }
  
  console.log(data); // Output: Fetched Data
}

processDataBetter();

// ========================================
// 13. HOISTING ORDER (for functions and variables)
// ========================================
// 1. Function declarations are hoisted first (completely)
// 2. Variable declarations are hoisted next
// 3. Code execution happens in order

console.log(typeof foo); // Output: function
console.log(typeof bar); // Output: undefined

function foo() {}
var bar = 5;

// ========================================
// KEY HOISTING CONCEPTS:
// ========================================
// ✓ VAR:
//   - Hoisted to top and initialized as undefined
//   - Function-scoped
//   - Can be re-declared
//
// ✓ LET & CONST:
//   - Hoisted but NOT initialized (Temporal Dead Zone)
//   - Block-scoped
//   - Cannot be accessed before declaration
//
// ✓ FUNCTION DECLARATIONS:
//   - Completely hoisted (declaration + definition)
//   - Can be called before definition
//
// ✓ FUNCTION EXPRESSIONS & ARROW FUNCTIONS:
//   - NOT hoisted (only variable hoisting if using var)
//   - Cannot be called before definition
//
// ✓ CLASSES:
//   - Hoisted but NOT initialized (similar to let/const)
//   - Cannot be instantiated before definition
//
// ✓ BEST PRACTICES:
//   - Declare all variables at the top of their scope
//   - Use let and const instead of var
//   - Use function declarations for reusable functions
//   - Understand TDZ to avoid runtime errors
