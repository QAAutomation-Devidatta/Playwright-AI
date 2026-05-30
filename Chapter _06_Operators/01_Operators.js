// ========================================
// JAVASCRIPT OPERATORS - Types, Properties & Concepts
// ========================================

// An OPERATOR is a symbol or keyword that performs operations on operands.
// Operands are values or variables on which the operator works.

// ========================================
// 1. ARITHMETIC OPERATORS
// ========================================
// Used for mathematical calculations

const a = 10;
const b = 3;

console.log("--- ARITHMETIC OPERATORS ---");
console.log(a + b);      // Addition: 13
console.log(a - b);      // Subtraction: 7
console.log(a * b);      // Multiplication: 30
console.log(a / b);      // Division: 3.333...
console.log(a % b);      // Modulus (remainder): 1
console.log(a ** b);     // Exponentiation: 1000
console.log(++a);        // Increment: 11 (increments then returns)
console.log(b--);        // Decrement: 3 (returns then decrements)

// ========================================
// 2. ASSIGNMENT OPERATORS
// ========================================
// Used to assign values to variables

console.log("\n--- ASSIGNMENT OPERATORS ---");
let x = 5;
console.log(x);          // 5

x += 3;                  // Addition assignment: 8
console.log(x);

x -= 2;                  // Subtraction assignment: 6
console.log(x);

x *= 2;                  // Multiplication assignment: 12
console.log(x);

x /= 3;                  // Division assignment: 4
console.log(x);

x %= 3;                  // Modulus assignment: 1
console.log(x);

x **= 2;                 // Exponentiation assignment: 1
console.log(x);

// ========================================
// 3. COMPARISON OPERATORS
// ========================================
// Compare two values and return boolean (true/false)

console.log("\n--- COMPARISON OPERATORS ---");
const num1 = 10;
const num2 = 20;
const num3 = "10";

console.log(num1 == num2);       // Equal to (loose): false
console.log(num1 === num3);      // Strict equal: false (different types)
console.log(num1 == num3);       // Equal to (loose): true (type coercion)
console.log(num1 != num2);       // Not equal to: true
console.log(num1 !== num3);      // Strict not equal: true
console.log(num1 < num2);        // Less than: true
console.log(num1 > num2);        // Greater than: false
console.log(num1 <= num2);       // Less than or equal: true
console.log(num1 >= num2);       // Greater than or equal: false

// ========================================
// 4. LOGICAL OPERATORS
// ========================================
// Combine boolean values and return true/false

console.log("\n--- LOGICAL OPERATORS ---");
const isActive = true;
const isAdmin = false;
const isVerified = true;

console.log(isActive && isAdmin);        // AND: false (both must be true)
console.log(isActive || isAdmin);        // OR: true (at least one must be true)
console.log(!isActive);                  // NOT: false (inverts boolean)
console.log(isActive && isVerified);     // AND: true
console.log(isAdmin || isVerified);      // OR: true

// Short-circuit evaluation
console.log(true || console.log("Not executed")); // Doesn't execute second part

// ========================================
// 5. BITWISE OPERATORS
// ========================================
// Perform operations on binary representations

console.log("\n--- BITWISE OPERATORS ---");
const p = 5;    // Binary: 0101
const q = 3;    // Binary: 0011

console.log(p & q);      // AND: 1 (0001)
console.log(p | q);      // OR: 7 (0111)
console.log(p ^ q);      // XOR: 6 (0110)
console.log(~p);         // NOT: -6
console.log(p << 1);     // Left shift: 10 (move bits left)
console.log(p >> 1);     // Right shift: 2 (move bits right)
console.log(-p >>> 1);   // Unsigned right shift

// ========================================
// 6. STRING OPERATORS
// ========================================
// String concatenation and operations

console.log("\n--- STRING OPERATORS ---");
const str1 = "Hello";
const str2 = "World";

console.log(str1 + " " + str2);           // Concatenation: Hello World
console.log(`${str1} ${str2}`);           // Template literal: Hello World

let str = "JavaScript";
str += " is awesome";                    // Concatenation assignment
console.log(str);

// String comparison
console.log("apple" < "banana");          // true (lexicographic)
console.log("10" < "20");                 // true (string comparison)
console.log(10 < "20");                   // true (type coercion)

// ========================================
// 7. TERNARY (CONDITIONAL) OPERATOR
// ========================================
// Conditional expression that returns one of two values

console.log("\n--- TERNARY OPERATOR ---");
const age = 20;
const status = age >= 18 ? "Adult" : "Minor";
console.log(status);                      // Adult

const score = 45;
const result = score >= 50 ? "Pass" : "Fail";
console.log(result);                      // Fail

// Nested ternary
const grade = 85;
const marks = grade >= 90 ? "A" : grade >= 80 ? "B" : grade >= 70 ? "C" : "D";
console.log(marks);                       // B

// ========================================
// 8. TYPEOF OPERATOR
// ========================================
// Returns the type of a value

console.log("\n--- TYPEOF OPERATOR ---");
console.log(typeof 42);                   // number
console.log(typeof "hello");              // string
console.log(typeof true);                 // boolean
console.log(typeof undefined);            // undefined
console.log(typeof null);                 // object (quirk in JavaScript)
console.log(typeof {});                   // object
console.log(typeof []);                   // object
console.log(typeof function() {});        // function
console.log(typeof Symbol("id"));         // symbol

// ========================================
// 9. INSTANCEOF OPERATOR
// ========================================
// Checks if object is instance of a constructor

console.log("\n--- INSTANCEOF OPERATOR ---");
const arr = [1, 2, 3];
const obj = { name: "John" };
const date = new Date();
const regex = /abc/;

console.log(arr instanceof Array);        // true
console.log(obj instanceof Object);       // true
console.log(date instanceof Date);        // true
console.log(regex instanceof RegExp);     // true
console.log("hello" instanceof String);   // false (primitive, not object)

// ========================================
// 10. IN OPERATOR
// ========================================
// Checks if property exists in object

console.log("\n--- IN OPERATOR ---");
const person = {
  name: "Alice",
  age: 30,
  city: "New York"
};

console.log("name" in person);            // true
console.log("age" in person);             // true
console.log("country" in person);         // false
console.log("toString" in person);        // true (inherited from Object)

// In arrays
const colors = ["red", "green", "blue"];
console.log(0 in colors);                 // true (index 0 exists)
console.log(3 in colors);                 // false (index 3 doesn't exist)

// ========================================
// 11. SPREAD OPERATOR (...)
// ========================================
// Expands iterable into individual elements

console.log("\n--- SPREAD OPERATOR ---");

// Array spreading
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log(combined);                    // [1, 2, 3, 4, 5, 6]

// Object spreading
const obj1 = { name: "John", age: 30 };
const obj2 = { city: "New York", country: "USA" };
const mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj);

// Function arguments
const numbers = [5, 2, 8, 1];
console.log(Math.max(...numbers));        // 8
console.log(Math.min(...numbers));        // 1

// ========================================
// 12. OPTIONAL CHAINING OPERATOR (?.)
// ========================================
// Safely access nested properties

console.log("\n--- OPTIONAL CHAINING OPERATOR ---");
const user = {
  profile: {
    address: {
      city: "New York"
    }
  }
};

console.log(user.profile.address.city);   // New York
console.log(user.profile?.address?.city); // New York
console.log(user.settings?.theme);        // undefined (doesn't throw error)
console.log(user?.profile?.phone);        // undefined

// Function calls
const obj_with_func = {
  getValue: () => 42
};
console.log(obj_with_func.getValue?.());  // 42
console.log(obj_with_func.missing?.());   // undefined

// ========================================
// 13. NULLISH COALESCING OPERATOR (??)
// ========================================
// Returns right operand if left is null or undefined

console.log("\n--- NULLISH COALESCING OPERATOR ---");
const a_val = null;
const b_val = "default";
console.log(a_val ?? b_val);              // default

const x_val = 0;
const y_val = "fallback";
console.log(x_val ?? y_val);              // 0 (0 is not nullish)

const str_val = "";
const fallback = "default text";
console.log(str_val ?? fallback);         // "" (empty string is not nullish)

// Difference from || operator
const count = 0;
console.log(count || 10);                 // 10 (|| treats 0 as falsy)
console.log(count ?? 10);                 // 0 (?? only checks null/undefined)

// ========================================
// 14. COMMA OPERATOR
// ========================================
// Evaluates multiple expressions, returns last one

console.log("\n--- COMMA OPERATOR ---");
let m = (5, 10);
console.log(m);                           // 10 (last value)

let n = (1 + 2, 3 + 4, 5 + 6);
console.log(n);                           // 11 (last value)

// ========================================
// 15. OPERATOR PRECEDENCE
// ========================================
// Order in which operators are evaluated

console.log("\n--- OPERATOR PRECEDENCE ---");
console.log(2 + 3 * 4);                   // 14 (multiplication first)
console.log((2 + 3) * 4);                 // 20 (parentheses first)

const result1 = true || false && false;   // true (AND has higher precedence)
const result2 = (true || false) && false; // false

console.log(result1);
console.log(result2);

// ========================================
// OPERATOR SUMMARY TABLE
// ========================================
/*
CATEGORY          | OPERATORS
------------------|--------------------------------------------------
Arithmetic        | + - * / % ** ++ --
Assignment        | = += -= *= /= %= **=
Comparison        | == === != !== < > <= >=
Logical           | && || !
Bitwise           | & | ^ ~ << >> >>>
String            | + += (concatenation)
Conditional       | ? : (ternary)
Type              | typeof instanceof in
Spread            | ...
Optional Chain    | ?.
Nullish Coalesce  | ??
Comma             | ,
*/

// ========================================
// KEY PROPERTIES OF OPERATORS:
// ========================================
// ✓ Unary operators: work on one operand (++, --, typeof, !)
// ✓ Binary operators: work on two operands (+, -, &&, ||)
// ✓ Ternary operator: works on three operands (? :)
// ✓ Operator precedence: determines evaluation order
// ✓ Associativity: left-to-right or right-to-left
// ✓ Type coercion: automatic type conversion in loose equality
// ✓ Short-circuit evaluation: stops evaluating if result is determined
// ✓ Operators can be chained together
// ✓ Different operators have different precedence levels
