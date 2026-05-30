// ============================================================================
//                    TYPEWISE OPERATORS GUIDE
// ============================================================================

// WHAT ARE TYPEWISE OPERATORS?
// Typewise operators are used to check, compare, or work with data types in 
// JavaScript. They help us understand and manipulate the type of variables.

// Main Typewise Operators:
// 1. typeof      - Returns the type of a variable
// 2. instanceof  - Checks if object is instance of a class
// 3. ===         - Strict equality (type + value)
// 4. !==         - Strict inequality (type + value)
// 5. ==          - Loose equality (value only, type coercion)
// 6. !=          - Loose inequality (value only, type coercion)


// ============================================================================
//                  CONCEPT 1: THE typeof OPERATOR
// ============================================================================

console.log("===== CONCEPT 1: typeof OPERATOR =====");

// typeof returns a string describing the type of a variable

// Simple Example 1: Check different data types
console.log(typeof 42);              // Output: "number"
console.log(typeof "Hello");         // Output: "string"
console.log(typeof true);            // Output: "boolean"
console.log(typeof undefined);       // Output: "undefined"
console.log(typeof {});              // Output: "object"
console.log(typeof []);              // Output: "object" (arrays are objects!)
console.log(typeof function(){});    // Output: "function"
console.log(typeof null);            // Output: "object" (this is a bug in JS!)

// Simple Example 2: Using typeof in conditionals
let myVar = "Welcome";
if (typeof myVar === "string") {
  console.log("myVar is a string");  // Output: myVar is a string
}

// Simple Example 3: Type checking before operations
let value = 50;
if (typeof value === "number") {
  console.log("Value is a number: " + (value * 2));  // Output: Value is a number: 100
}


// ============================================================================
//          CONCEPT 2: STRICT EQUALITY (===) vs LOOSE EQUALITY (==)
// ============================================================================

console.log("\n===== CONCEPT 2: === vs == =====");

// === (Strict Equality): Checks BOTH type and value, NO type coercion
console.log("--- Strict Equality (===) ---");
console.log(5 === 5);                // true  (same type, same value)
console.log(5 === "5");              // false (different types)
console.log(true === 1);             // false (different types)
console.log(null === undefined);     // false (different types)

// == (Loose Equality): Checks value only, PERFORMS type coercion
console.log("\n--- Loose Equality (==) ---");
console.log(5 == 5);                 // true  (same value)
console.log(5 == "5");               // true  (coerced to same value)
console.log(true == 1);              // true  (true coerced to 1)
console.log(null == undefined);      // true  (special case in JS)
console.log(0 == false);             // true  (false coerced to 0)

// IMPORTANT: Always use === for type-safe comparisons!


// ============================================================================
//      CONCEPT 3: STRICT INEQUALITY (!==) vs LOOSE INEQUALITY (!=)
// ============================================================================

console.log("\n===== CONCEPT 3: !== vs != =====");

// !== (Strict Inequality): Checks if type OR value is different
console.log("--- Strict Inequality (!==) ---");
console.log(5 !== "5");              // true  (different types)
console.log(5 !== 5);                // false (same type and value)
console.log(true !== 1);             // true  (different types)

// != (Loose Inequality): Checks value with type coercion
console.log("\n--- Loose Inequality (!=) ---");
console.log(5 != "5");               // false (coerced to same value)
console.log(5 != 6);                 // true  (different values)
console.log(true != 1);              // false (true coerced to 1)


// ============================================================================
//            CONCEPT 4: THE instanceof OPERATOR
// ============================================================================

console.log("\n===== CONCEPT 4: instanceof OPERATOR =====");

// instanceof checks if an object is an instance of a class/constructor

// Simple Example 1: Check array type
let myArray = [1, 2, 3];
console.log(myArray instanceof Array);        // true
console.log(myArray instanceof Object);       // true
console.log(myArray instanceof String);       // false

// Simple Example 2: Check with custom class
class Car {
  constructor(brand) {
    this.brand = brand;
  }
}

let myCar = new Car("Toyota");
console.log(myCar instanceof Car);            // true
console.log(myCar instanceof Object);         // true
console.log(myCar instanceof Array);          // false

// Simple Example 3: Check date object
let today = new Date();
console.log(today instanceof Date);           // true
console.log(today instanceof Object);         // true
console.log(today instanceof String);         // false


// ============================================================================
//      CONCEPT 5: TYPE COERCION AND UNEXPECTED BEHAVIORS
// ============================================================================

console.log("\n===== CONCEPT 5: TYPE COERCION SURPRISES =====");

// Why === is better than ==
console.log("--- Surprising Behaviors with == ---");
console.log("" == false);            // true
console.log("0" == 0);               // true
console.log("" == 0);                // true
console.log([] == false);            // true
console.log(null == 0);              // false (special case)
console.log(undefined == 0);         // false (special case)

console.log("\n--- Safe with === ---");
console.log("" === false);           // false
console.log("0" === 0);              // false
console.log([] === false);           // false


// ============================================================================
//                  INTERVIEW QUESTIONS & ANSWERS
// ============================================================================

console.log("\n===== INTERVIEW QUESTIONS =====");

// INTERVIEW Q1: Type checking function
console.log("\n--- Q1: Identify and Handle Different Types ---");
function processData(data) {
  if (typeof data === "number") {
    return "Number: " + (data * 2);
  } else if (typeof data === "string") {
    return "String: " + data.toUpperCase();
  } else if (typeof data === "boolean") {
    return "Boolean: " + (!data);
  } else {
    return "Unknown type";
  }
}

console.log(processData(10));        // Output: Number: 20
console.log(processData("hello"));   // Output: String: HELLO
console.log(processData(true));      // Output: Boolean: false

// INTERVIEW Q2: Validate user input before operation
console.log("\n--- Q2: Input Validation ---");
function calculateSquare(num) {
  if (typeof num !== "number") {
    return "Error: Input must be a number";
  }
  return num * num;
}

console.log(calculateSquare(5));     // Output: 25
console.log(calculateSquare("5"));   // Output: Error: Input must be a number

// INTERVIEW Q3: Using === for safety
console.log("\n--- Q3: Strict Equality in Conditions ---");
let userInput = "0";
if (userInput === 0) {
  console.log("Value is zero");
} else {
  console.log("Value is not zero");  // Output: Value is not zero
}

if (userInput == 0) {
  console.log("With ==, it's zero");  // Output: With ==, it's zero
}

// INTERVIEW Q4: Check if variable is defined
console.log("\n--- Q4: Check if Variable is Defined ---");
let definedVar = "I exist";
let undefinedVar;

if (typeof definedVar !== "undefined") {
  console.log("definedVar is defined");        // Output: definedVar is defined
}

if (typeof undefinedVar === "undefined") {
  console.log("undefinedVar is not defined");  // Output: undefinedVar is not defined
}

// INTERVIEW Q5: Type checking with instanceof
console.log("\n--- Q5: Check if Object is Array ---");
function processArray(input) {
  if (input instanceof Array) {
    return "Array with " + input.length + " elements";
  } else if (typeof input === "object" && input !== null) {
    return "Object (not array)";
  } else {
    return "Not an object or array";
  }
}

console.log(processArray([1, 2, 3]));     // Output: Array with 3 elements
console.log(processArray({name: "John"}));  // Output: Object (not array)
console.log(processArray("text"));        // Output: Not an object or array

// INTERVIEW Q6: Find the sum only if inputs are numbers
console.log("\n--- Q6: Sum Validation ---");
function addNumbers(a, b) {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else {
    return "Error: Both inputs must be numbers";
  }
}

console.log(addNumbers(5, 10));      // Output: 15
console.log(addNumbers("5", 10));    // Output: Error: Both inputs must be numbers
console.log(addNumbers(5, "10"));    // Output: Error: Both inputs must be numbers

// INTERVIEW Q7: Handle null and undefined safely
console.log("\n--- Q7: Null/Undefined Safety Check ---");
function safeGet(obj, key) {
  if (typeof obj === "object" && obj !== null && typeof obj[key] !== "undefined") {
    return obj[key];
  } else {
    return "Value not found";
  }
}

let person = { name: "Alice", age: 25 };
console.log(safeGet(person, "name"));  // Output: Alice
console.log(safeGet(person, "email")); // Output: Value not found
console.log(safeGet(null, "name"));    // Output: Value not found

// INTERVIEW Q8: Comparison operator choice matters
console.log("\n--- Q8: Why === over == Matters ---");
function compareValues(a, b) {
  let looseMatch = (a == b);
  let strictMatch = (a === b);
  
  return {
    value_a: a,
    value_b: b,
    loose_equality: looseMatch,
    strict_equality: strictMatch
  };
}

console.log(compareValues(0, "0"));    // loose: true, strict: false
console.log(compareValues(null, undefined));  // loose: true, strict: false

// INTERVIEW Q9: Type coercion in arithmetic
console.log("\n--- Q9: String to Number Conversion ---");
function smartAdd(a, b) {
  if (typeof a === "string") a = Number(a);
  if (typeof b === "string") b = Number(b);
  
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else {
    return "Cannot add non-numeric values";
  }
}

console.log(smartAdd(5, 10));         // Output: 15
console.log(smartAdd("5", 10));       // Output: 15
console.log(smartAdd("5", "10"));     // Output: 15

// INTERVIEW Q10: Check data type and perform operation
console.log("\n--- Q10: Multi-type Processing ---");
function processValue(val) {
  switch(typeof val) {
    case "number":
      return "Number squared: " + (val * val);
    case "string":
      return "String length: " + val.length;
    case "boolean":
      return "Boolean value: " + (val ? "True" : "False");
    case "object":
      return val === null ? "Null value" : "Object type";
    default:
      return "Unknown type";
  }
}

console.log(processValue(10));        // Output: Number squared: 100
console.log(processValue("hello"));   // Output: String length: 5
console.log(processValue(true));      // Output: Boolean value: True
console.log(processValue({x: 1}));    // Output: Object type
console.log(processValue(null));      // Output: Null value


// ============================================================================
//                    IMPORTANT POINTS TO REMEMBER
// ============================================================================

console.log("\n===== KEY TAKEAWAYS =====");
console.log("✓ Use typeof to check variable types");
console.log("✓ ALWAYS use === and !== instead of == and !=");
console.log("✓ null is typeof 'object' (JavaScript bug)");
console.log("✓ Arrays are typeof 'object', use instanceof Array to check");
console.log("✓ undefined is typeof 'undefined'");
console.log("✓ typeof null will give 'object' - handle separately if needed");
console.log("✓ Use instanceof for class/object instance checking");
console.log("✓ Avoid loose equality (==) to prevent unexpected type coercion");
console.log("✓ Use Number() or parseInt() to safely convert strings to numbers");
console.log("✓ Check typeof before accessing properties on objects");
