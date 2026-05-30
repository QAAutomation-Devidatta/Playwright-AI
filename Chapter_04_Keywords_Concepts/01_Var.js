// ========================================
// VAR KEYWORD - Properties, Scope & Concepts
// ========================================

// 1. FUNCTION SCOPE
// var is function-scoped (not block-scoped)
function testFunctionScope() {
  if (true) {
    var name = "John";
  }
  console.log(name); // Output: John (accessible outside if block)
}

// 2. GLOBAL SCOPE
// var declared globally becomes a global variable
var globalVar = "I am global";
console.log(globalVar); // Output: I am global

// 3. RE-DECLARATION
// var allows re-declaration of the same variable
var age = 25;
var age = 30; // No error - re-declared
console.log(age); // Output: 30

// 4. REASSIGNMENT
// var allows reassignment
var city = "New York";
city = "Los Angeles"; // Reassignment
console.log(city); // Output: Los Angeles

// 5. HOISTING
// var declarations are hoisted to the top (initialized as undefined)
console.log(x); // Output: undefined (not an error)
var x = 5;
console.log(x); // Output: 5

// 6. BLOCK SCOPE ISSUE (var leaks out of blocks)
for (var i = 0; i < 3; i++) {
  var blockVar = i;
}
console.log(blockVar); // Output: 2 (var leaks out of for loop)

// 7. FUNCTION SCOPE ISOLATION
function outerFunction() {
  var outerVar = "outer";
  
  function innerFunction() {
    var innerVar = "inner";
    console.log(outerVar); // Output: outer (accessible from inner scope)
  }
  
  innerFunction();
  // console.log(innerVar); // Error: innerVar is not accessible here
}

// 8. DEFAULT INITIALIZATION
var uninitializedVar; // Without value
console.log(uninitializedVar); // Output: undefined

// 9. MULTIPLE DECLARATIONS IN ONE LINE
var a = 1, b = 2, c = 3;
console.log(a, b, c); // Output: 1 2 3

// ========================================
// KEY PROPERTIES OF VAR:
// ========================================
// ✓ Function-scoped (not block-scoped)
// ✓ Can be re-declared in same scope
// ✓ Can be reassigned
// ✓ Hoisted and initialized as undefined
// ✓ Creates property on global object (window/global)
// ✓ Not recommended for modern JavaScript
// ✓ Replaced by let and const in ES6+
