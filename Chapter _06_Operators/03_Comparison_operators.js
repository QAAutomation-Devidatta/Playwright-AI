/*
╔═════════════════════════════════════════════════════════════════════════════╗
║                      COMPARISON OPERATORS IN JAVASCRIPT                     ║
╚═════════════════════════════════════════════════════════════════════════════╝

Comparison operators are used to compare two values and return a boolean 
(true or false). JavaScript has 8 main comparison operators:

1. == (Loose Equality) - Compares values with type coercion
2. === (Strict Equality) - Compares values and types without coercion
3. != (Loose Inequality) - Opposite of ==
4. !== (Strict Inequality) - Opposite of ===
5. < (Less than)
6. > (Greater than)
7. <= (Less than or equal to)
8. >= (Greater than or equal to)

GOLDEN RULE: Always use === and !== instead of == and !=
*/

// ═══════════════════════════════════════════════════════════════════════════
// 1. STRICT EQUALITY (===) - RECOMMENDED
// ═══════════════════════════════════════════════════════════════════════════

console.log("--- STRICT EQUALITY (===) ---");

// Same type, same value
console.log(5 === 5); // Output: true
console.log("hello" === "hello"); // Output: true
console.log(true === true); // Output: true

// Same type, different value
console.log(5 === 6); // Output: false
console.log("hello" === "world"); // Output: false

// IMPORTANT: Different types (NO type coercion)
console.log(5 === "5"); // Output: false (number vs string)
console.log(0 === false); // Output: false (number vs boolean)
console.log(null === undefined); // Output: false (different types)
console.log("" === 0); // Output: false (string vs number)

// Objects and Arrays (compares reference, not content)
let obj1 = { name: "John" };
let obj2 = { name: "John" };
console.log(obj1 === obj2); // Output: false (different references)

let obj3 = obj1;
console.log(obj1 === obj3); // Output: true (same reference)

// Arrays
let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];
console.log(arr1 === arr2); // Output: false (different references)

let arr3 = arr1;
console.log(arr1 === arr3); // Output: true (same reference)

console.log("\n");

// ═══════════════════════════════════════════════════════════════════════════
// 2. LOOSE EQUALITY (==) - NOT RECOMMENDED (Type Coercion)
// ═══════════════════════════════════════════════════════════════════════════

console.log("--- LOOSE EQUALITY (==) - Performs Type Coercion ---");

// INTERVIEW TIP: These are true due to type coercion!
console.log(5 == "5"); // Output: true (string "5" converted to number 5)
console.log(0 == false); // Output: true (false converted to 0)
console.log(1 == true); // Output: true (true converted to 1)
console.log("" == 0); // Output: true (empty string converted to 0)
console.log("0" == false); // Output: true (both converted to 0)
console.log(null == undefined); // Output: true (special case: they are equal)

// TRICKY: String to number coercion
console.log("10" == 10); // Output: true
console.log("hello" == NaN); // Output: false (string can't convert to valid number)

// TRICKY: Array coercion
console.log([0] == 0); // Output: true (array [0] converted to "0" then to 0)
console.log([1] == 1); // Output: true
console.log([] == 0); // Output: true (empty array converted to "" then to 0)
console.log([""] == 0); // Output: true

// TRICKY: Object coercion
console.log({ } == 0); // Output: false (objects convert to string "[object Object]")

// The problem with ==
console.log("0" == false); // Output: true
console.log("0" === false); // Output: false (CORRECT comparison)

console.log("\n");

// ═══════════════════════════════════════════════════════════════════════════
// 3. STRICT INEQUALITY (!==)
// ═══════════════════════════════════════════════════════════════════════════

console.log("--- STRICT INEQUALITY (!==) ---");

// Different values
console.log(5 !== 6); // Output: true
console.log("hello" !== "world"); // Output: true

// Different types (NO type coercion)
console.log(5 !== "5"); // Output: true
console.log(0 !== false); // Output: true
console.log(null !== undefined); // Output: true

// Same values and types
console.log(5 !== 5); // Output: false
console.log("hello" !== "hello"); // Output: false

console.log("\n");

// ═══════════════════════════════════════════════════════════════════════════
// 4. LOOSE INEQUALITY (!=) - NOT RECOMMENDED
// ═══════════════════════════════════════════════════════════════════════════

console.log("--- LOOSE INEQUALITY (!=) - Type Coercion ---");

console.log(5 != "5"); // Output: false (coerced, they are equal)
console.log(0 != false); // Output: false (coerced, they are equal)
console.log(null != undefined); // Output: false (special case)
console.log(5 != 6); // Output: true

console.log("\n");

// ═══════════════════════════════════════════════════════════════════════════
// 5. LESS THAN (<)
// ═══════════════════════════════════════════════════════════════════════════

console.log("--- LESS THAN (<) ---");

// Basic numeric comparison
console.log(5 < 10); // Output: true
console.log(10 < 5); // Output: false
console.log(5 < 5); // Output: false

// String comparison (lexicographic/alphabetical)
console.log("apple" < "banana"); // Output: true (alphabetical order)
console.log("b" < "a"); // Output: false
console.log("10" < "5"); // Output: true (lexicographic: "1" < "5")

// TRICKY: Number vs String comparison (type coercion)
console.log(5 < "10"); // Output: true (string "10" converted to 10)
console.log("5" < 10); // Output: true (string "5" converted to 5)
console.log("5" < "10"); // Output: false (lexicographic comparison: "5" > "1")

// Boolean comparison
console.log(true < 2); // Output: true (true = 1)
console.log(false < 1); // Output: true (false = 0)

// NaN comparison (always false)
console.log(5 < NaN); // Output: false
console.log(NaN < 5); // Output: false

// Undefined comparison (always false)
console.log(5 < undefined); // Output: false
console.log(undefined < 5); // Output: false

console.log("\n");

// ═══════════════════════════════════════════════════════════════════════════
// 6. GREATER THAN (>)
// ═══════════════════════════════════════════════════════════════════════════

console.log("--- GREATER THAN (>) ---");

// Basic numeric comparison
console.log(10 > 5); // Output: true
console.log(5 > 10); // Output: false
console.log(5 > 5); // Output: false

// String comparison
console.log("banana" > "apple"); // Output: true
console.log("5" > "10"); // Output: true (lexicographic: "5" > "1")

// Mixed type comparison
console.log(10 > "5"); // Output: true ("5" converted to 5)
console.log("10" > 5); // Output: true ("10" converted to 10)

// Boolean comparison
console.log(2 > true); // Output: true (true = 1)
console.log(0 > false); // Output: false (false = 0)

// TRICKY: With null
console.log(null > 0); // Output: false
console.log(null >= 0); // Output: true (special case!)
console.log(null < 1); // Output: true

console.log("\n");

// ═══════════════════════════════════════════════════════════════════════════
// 7. LESS THAN OR EQUAL TO (<=)
// ═══════════════════════════════════════════════════════════════════════════

console.log("--- LESS THAN OR EQUAL TO (<=) ---");

console.log(5 <= 10); // Output: true
console.log(5 <= 5); // Output: true
console.log(10 <= 5); // Output: false

console.log("apple" <= "apple"); // Output: true
console.log("apple" <= "banana"); // Output: true

console.log("\n");

// ═══════════════════════════════════════════════════════════════════════════
// 8. GREATER THAN OR EQUAL TO (>=)
// ═══════════════════════════════════════════════════════════════════════════

console.log("--- GREATER THAN OR EQUAL TO (>=) ---");

console.log(10 >= 5); // Output: true
console.log(5 >= 5); // Output: true
console.log(5 >= 10); // Output: false

console.log("banana" >= "apple"); // Output: true

console.log("\n");

// ═══════════════════════════════════════════════════════════════════════════
// SPECIAL VALUES & EDGE CASES
// ═══════════════════════════════════════════════════════════════════════════

console.log("--- SPECIAL VALUES: null, undefined, NaN ---");

// null behavior
console.log(null === null); // Output: true
console.log(null === undefined); // Output: false
console.log(null == undefined); // Output: true (loose equality special case)

// undefined behavior
console.log(undefined === undefined); // Output: true
console.log(undefined == null); // Output: true (loose equality special case)

// NaN behavior (most tricky!)
console.log(NaN === NaN); // Output: false (NaN is never equal to anything)
console.log(NaN == NaN); // Output: false (even with loose equality)
console.log(NaN < 5); // Output: false
console.log(NaN > 5); // Output: false
console.log(NaN <= 5); // Output: false
console.log(NaN >= 5); // Output: false

// Correct way to check for NaN
console.log(Number.isNaN(NaN)); // Output: true
console.log(isNaN(NaN)); // Output: true (but less reliable)
console.log(Object.is(NaN, NaN)); // Output: true (alternative method)

// -0 and +0
console.log(0 === -0); // Output: true (they are equal)
console.log(Object.is(0, -0)); // Output: false (different by type system)

console.log("\n");

// ═══════════════════════════════════════════════════════════════════════════
// TRUTHY AND FALSY VALUES
// ═══════════════════════════════════════════════════════════════════════════

console.log("--- FALSY VALUES IN JAVASCRIPT ---");

// In JavaScript, these values are FALSY:
// 1. false
// 2. 0
// 3. -0
// 4. 0n (BigInt zero)
// 5. "" (empty string)
// 6. null
// 7. undefined
// 8. NaN

// Falsy values compared to false
console.log(0 == false); // Output: true
console.log("" == false); // Output: true
console.log(null == false); // Output: false (null doesn't coerce to false)
console.log(undefined == false); // Output: false
console.log(NaN == false); // Output: false

// IMPORTANT: Double negation to convert to boolean
console.log(!!0); // Output: false
console.log(!!1); // Output: true
console.log(!!""); // Output: false
console.log(!!"hello"); // Output: true
console.log(!!null); // Output: false
console.log(!!undefined); // Output: false
console.log(!!NaN); // Output: false

// INTERVIEW TIP: All other values are TRUTHY
console.log(!!1); // Output: true
console.log(!!-1); // Output: true
console.log(!!"0"); // Output: true (string "0" is truthy!)
console.log(!![]); // Output: true (empty array is truthy)
console.log(!!{}); // Output: true (empty object is truthy)

console.log("\n");

// ═══════════════════════════════════════════════════════════════════════════
// INTERVIEW TRICK QUESTIONS
// ═══════════════════════════════════════════════════════════════════════════

console.log("--- INTERVIEW TRICK QUESTIONS ---");

// Question 1: Type coercion puzzle
console.log("" == 0); // Output: true
console.log("0" == 0); // Output: true
console.log("" == "0"); // Output: false

// Question 2: Array and object comparison
console.log([] == 0); // Output: true
console.log([0] == 0); // Output: true
console.log([] == ""); // Output: true
console.log([] == []); // Output: false (different references)

// Question 3: Loose equality transitive property doesn't work!
console.log("0" == 0); // Output: true
console.log(0 == false); // Output: true
console.log("0" == false); // Output: true (all equal)
// But:
console.log("0" == false); // Output: true
console.log(false == 0); // Output: true
console.log("0" == 0); // Output: true

// Question 4: null and undefined edge case
console.log(null == undefined); // Output: true
console.log(null === undefined); // Output: false
console.log(null > 0); // Output: false
console.log(null >= 0); // Output: true (special case!)
console.log(null <= 0); // Output: true (null converted to 0)

// Question 5: NaN comparison
let x = NaN;
console.log(x === x); // Output: false
console.log(x == x); // Output: false
console.log(Number.isNaN(x)); // Output: true (correct way)

// Question 6: String comparison is lexicographic
console.log("2" < "10"); // Output: false (lexicographic: "2" > "1")
console.log(2 < 10); // Output: true (numeric)

// Question 7: Implicit coercion in comparisons
console.log(true > 0); // Output: true (true = 1)
console.log(false >= 0); // Output: true (false = 0)

console.log("\n");

// ═══════════════════════════════════════════════════════════════════════════
// PRACTICAL COMPARISON EXAMPLES
// ═══════════════════════════════════════════════════════════════════════════

console.log("--- PRACTICAL EXAMPLES ---");

// Example 1: Safe value comparison (handling null/undefined)
function safeEqual(a, b) {
  // Both null or both undefined
  if (a == null && b == null) return true;
  // One is null/undefined and other is not
  if (a == null || b == null) return false;
  // Use strict equality for actual comparison
  return a === b;
}
console.log(safeEqual(null, null)); // Output: true
console.log(safeEqual(null, undefined)); // Output: true
console.log(safeEqual(5, 5)); // Output: true
console.log(safeEqual(5, "5")); // Output: false

// Example 2: Compare objects by properties
function objectsEqual(obj1, obj2) {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
}
let person1 = { name: "John", age: 30 };
let person2 = { name: "John", age: 30 };
console.log(objectsEqual(person1, person2)); // Output: true

// Example 3: Check if value is in valid range
function isInRange(value, min, max) {
  return value >= min && value <= max;
}
console.log(isInRange(5, 1, 10)); // Output: true
console.log(isInRange(15, 1, 10)); // Output: false

// Example 4: Validate user input
function validatePassword(password) {
  return password !== null && password !== undefined && password.length >= 8;
}
console.log(validatePassword("short")); // Output: false
console.log(validatePassword("longenough")); // Output: true
console.log(validatePassword(null)); // Output: false

// Example 5: Type-safe comparison function
function strictCompare(a, b) {
  // Check type first
  if (typeof a !== typeof b) return false;
  return a === b;
}
console.log(strictCompare(5, "5")); // Output: false
console.log(strictCompare(5, 5)); // Output: true
console.log(strictCompare("hello", "hello")); // Output: true

// Example 6: Array element comparison
function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  return arr1.every((val, idx) => val === arr2[idx]);
}
console.log(arraysEqual([1, 2, 3], [1, 2, 3])); // Output: true
console.log(arraysEqual([1, 2, 3], [1, 2, "3"])); // Output: false

console.log("\n");

// ═══════════════════════════════════════════════════════════════════════════
// COMPARISON OPERATOR FLOW IN CONDITIONS
// ═══════════════════════════════════════════════════════════════════════════

console.log("--- COMPARISON IN CONDITIONAL STATEMENTS ---");

// Basic if statement with comparison
let age = 18;
if (age >= 18) {
  console.log("Adult"); // Output: "Adult"
}

// Nested comparisons
let score = 85;
if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B"); // Output: "B"
} else if (score >= 70) {
  console.log("C");
}

// Multiple conditions
let username = "john";
let password = "password123";
if (username === "john" && password === "password123") {
  console.log("Login successful"); // Output: "Login successful"
}

// Using comparisons in loops
for (let i = 0; i < 5; i++) {
  if (i === 2) {
    console.log("Found 2"); // Output: "Found 2"
  }
}

console.log("\n");

// ═══════════════════════════════════════════════════════════════════════════
// COMPARISON IN TERNARY OPERATOR
// ═══════════════════════════════════════════════════════════════════════════

console.log("--- TERNARY OPERATOR WITH COMPARISONS ---");

let grade = 85;
let result = grade >= 90 ? "A" : grade >= 80 ? "B" : "C";
console.log(result); // Output: "B"

let access = age >= 18 ? "Allowed" : "Not Allowed";
console.log(access); // Output: "Allowed"

console.log("\n");

// ═══════════════════════════════════════════════════════════════════════════
// COMPARISON PERFORMANCE TIP
// ═══════════════════════════════════════════════════════════════════════════

console.log("--- PERFORMANCE & BEST PRACTICES ---");

// === is slightly faster than == (no type coercion)
// console.time("loose");
// for (let i = 0; i < 1000000; i++) {
//   5 == "5";
// }
// console.timeEnd("loose");

// console.time("strict");
// for (let i = 0; i < 1000000; i++) {
//   5 === "5";
// }
// console.timeEnd("strict");

// BEST PRACTICES:
// 1. Always use === instead of ==
// 2. Use !== instead of !=
// 3. Use explicit type conversion for clarity: String(5) instead of relying on coercion
// 4. Use Number.isNaN() for NaN checks
// 5. Be careful with null and undefined comparisons

console.log("\n");

// ═══════════════════════════════════════════════════════════════════════════
// COMPARISON WITH SORTING (BONUS)
// ═══════════════════════════════════════════════════════════════════════════

console.log("--- COMPARISONS IN SORTING ---");

// Array.sort() uses comparisons
let numbers = [5, 2, 8, 1, 9];
numbers.sort((a, b) => a < b ? -1 : a > b ? 1 : 0);
console.log(numbers); // Output: [1, 2, 5, 8, 9]

// Simple ascending sort
let arr = [30, 10, 20];
arr.sort((a, b) => a - b);
console.log(arr); // Output: [10, 20, 30]

// Descending sort
arr.sort((a, b) => b - a);
console.log(arr); // Output: [30, 20, 10]

// String sorting
let words = ["zebra", "apple", "banana"];
words.sort((a, b) => a < b ? -1 : a > b ? 1 : 0);
console.log(words); // Output: ["apple", "banana", "zebra"]

console.log("\n");
