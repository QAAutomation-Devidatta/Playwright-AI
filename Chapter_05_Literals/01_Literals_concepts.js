// ========================================
// LITERALS IN JAVASCRIPT - Types, Properties & Concepts
// ========================================

// A LITERAL is a fixed value written directly in the code.
// It represents itself, not a variable reference.

// ========================================
// 1. STRING LITERALS
// ========================================
// Strings can be written using single quotes, double quotes, or backticks

const singleQuote = 'Hello';
const doubleQuote = "World";
const backtickQuote = `JavaScript`;

console.log(singleQuote, doubleQuote, backtickQuote);
// Output: Hello World JavaScript

// Escape sequences in strings
const escaped = "Line 1\nLine 2\tTabbed";
console.log(escaped);
// Output:
// Line 1
// Line 2	Tabbed

// ========================================
// 2. NUMBER LITERALS
// ========================================
// Numbers can be integers or decimals

const integer = 42;
const decimal = 3.14;
const negative = -100;
const scientific = 1.5e3; // 1500
const hexadecimal = 0xFF; // 255 (hex)
const octal = 0o77; // 63 (octal)
const binary = 0b1010; // 10 (binary)

console.log(integer, decimal, negative, scientific);
// Output: 42 3.14 -100 1500

console.log(hexadecimal, octal, binary);
// Output: 255 63 10

// Special number values
const infinity = Infinity;
const negInfinity = -Infinity;
const notANumber = NaN;

console.log(infinity, negInfinity, notANumber);
// Output: Infinity -Infinity NaN

// ========================================
// 3. BOOLEAN LITERALS
// ========================================
// Only two boolean values: true and false

const isActive = true;
const isDeleted = false;

console.log(isActive, isDeleted);
// Output: true false

// Conditional logic
if (true) {
  console.log("This executes");
}

if (false) {
  console.log("This does NOT execute");
}

// ========================================
// 4. ARRAY LITERALS
// ========================================
// Arrays use square brackets

const numbers = [1, 2, 3, 4, 5];
const mixed = [1, "two", true, null, undefined];
const nested = [1, [2, 3], [4, [5, 6]]];
const empty = [];

console.log(numbers); // Output: [1, 2, 3, 4, 5]
console.log(mixed); // Output: [1, 'two', true, null, undefined]
console.log(nested); // Output: [1, [2, 3], [4, [5, 6]]]

// Array with trailing comma
const arrayWithComma = [1, 2, 3,]; // Trailing comma is allowed
console.log(arrayWithComma); // Output: [1, 2, 3]

// Sparse array (holes in the array)
const sparseArray = [1, , 3]; // Middle element is empty
console.log(sparseArray); // Output: [1, empty, 3]


// ========================================
// 6. TEMPLATE LITERALS
// ========================================
// Template literals use backticks and support interpolation

const firstName = "John";
const lastName = "Doe";
const greeting = `Hello, ${firstName} ${lastName}!`;

console.log(greeting); // Output: Hello, John Doe!

// Multi-line strings
const multiline = `
  This is a
  multi-line
  string
`;

//console.log(multiline);

// Expressions in template literals
const x = 5;
const y = 10;
const result = `${x} + ${y} = ${x + y}`;

console.log(result); // Output: 5 + 10 = 15

// ========================================
// 7. REGULAR EXPRESSION LITERALS
// ========================================
// Regular expressions use forward slashes

const pattern1 = /hello/i; // Case-insensitive
const pattern2 = /[0-9]+/g; // Match digits globally
const pattern3 = /^start.*end$/m; // Multiline

console.log(pattern1.test("Hello World")); // Output: true
console.log("12 abc 34".match(pattern2)); // Output: ['12', '34']

// ========================================
// 8. NULL AND UNDEFINED LITERALS
// ========================================
// null and undefined are special literals

const nullValue = null; // Intentional absence of value
let undefinedValue; // undefined (uninitialized)
const explicitUndefined = undefined;

console.log(nullValue); // Output: null
console.log(undefinedValue); // Output: undefined
console.log(explicitUndefined); // Output: undefined

// Difference between null and undefined
console.log(null == undefined); // Output: true (loose equality)
console.log(null === undefined); // Output: false (strict equality)
console.log(typeof null); // Output: object
console.log(typeof undefined); // Output: undefined

// ========================================
// 9. FUNCTION LITERALS (Function Expressions)
// ========================================
// Functions can be written as expressions

const add = function(a, b) {
  return a + b;
};

const subtract = (a, b) => a - b;

console.log(add(5, 3)); // Output: 8
console.log(subtract(10, 4)); // Output: 6

// ========================================
// 10. BIGINT LITERALS
// ========================================
// BigInt for very large integers (ES2020)

const bigInt1 = 123456789012345678901234567890n;
const bigInt2 = BigInt("123456789012345678901234567890");

console.log(bigInt1); // Output: 123456789012345678901234567890n
console.log(bigInt2); // Output: 123456789012345678901234567890n

// BigInt operations
const big1 = 100n;
const big2 = 50n;
console.log(big1 + big2); // Output: 150n


// ========================================
// 13. PRACTICAL EXAMPLES
// ========================================

// Example 1: Configuration object
const appConfig = {
  appName: "My App",
  version: "1.0.0",
  debug: true,
  port: 3000,
  urls: {
    api: "https://api.example.com",
    frontend: "https://example.com"
  },
  supportedLanguages: ["en", "es", "fr"],
  metadata: null
};

console.log(appConfig);

// Example 2: Data structure
const students = [
  { id: 1, name: "Alice", scores: [90, 85, 88] },
  { id: 2, name: "Bob", scores: [75, 80, 82] },
  { id: 3, name: "Charlie", scores: [95, 92, 90] }
];

console.log(students);

// Example 3: Template with expressions
const user_name = "John";
const user_score = 95;
const message = `${user_name} scored ${user_score}%! ${user_score >= 90 ? "Excellent!" : "Good!"}`;

console.log(message); // Output: John scored 95%! Excellent!

// ========================================
// KEY LITERAL TYPES SUMMARY:
// ========================================
// ✓ STRING LITERALS: 'text', "text", `text`
// ✓ NUMBER LITERALS: 42, 3.14, 0xFF, 1.5e3
// ✓ BOOLEAN LITERALS: true, false
// ✓ ARRAY LITERALS: [1, 2, 3]
// ✓ OBJECT LITERALS: {key: value}
// ✓ TEMPLATE LITERALS: `${expression}`
// ✓ REGEX LITERALS: /pattern/flags
// ✓ NULL: null (intentional absence)
// ✓ UNDEFINED: undefined (uninitialized)
// ✓ FUNCTION LITERALS: function() {}, () => {}
// ✓ BIGINT LITERALS: 123n, BigInt("123")
// ✓ SYMBOL LITERALS: Symbol('description')
//
// KEY PROPERTIES:
// - Literals are fixed values written directly in code
// - They are NOT variables or references
// - Each type has specific syntax and behavior
// - Literals are often used with var, let, const declarations
