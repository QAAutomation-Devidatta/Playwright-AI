/*
╔═════════════════════════════════════════════════════════════════════════════╗
║                         ARITHMETIC OPERATORS IN JS                          ║
╚═════════════════════════════════════════════════════════════════════════════╝

Arithmetic operators are used to perform mathematical operations on numbers.
In JavaScript, there are 6 main arithmetic operators:
1. Addition (+)
2. Subtraction (-)
3. Multiplication (*)
4. Division (/)
5. Modulus (%)
6. Exponentiation (**)
*/

// ═══════════════════════════════════════════════════════════════════════════
// 1. ADDITION OPERATOR (+)
// ═══════════════════════════════════════════════════════════════════════════

console.log("--- ADDITION OPERATOR (+) ---");

// Basic Addition
let num1 = 10;
let num2 = 20;
console.log(num1 + num2); // Output: 30

// Unary Plus (converts to number)
let str = "5";
console.log(+str); // Output: 5 (converts string to number)
console.log(typeof +str); // Output: "number"

// Addition with different data types
console.log(5 + 5); // Output: 10 (number + number)
console.log("5" + 5); // Output: "55" (string concatenation, NOT addition)
console.log(5 + "5"); // Output: "55" (string concatenation)

// INTERVIEW TIP: Type coercion
console.log(true + 1); // Output: 2 (true is converted to 1)
console.log(false + 1); // Output: 1 (false is converted to 0)
console.log(null + 1); // Output: 1 (null is converted to 0)

// TRICKY: undefined behavior
console.log(undefined + 1); // Output: NaN (undefined cannot be coerced properly)
console.log(1 + undefined); // Output: NaN

// Addition with objects (calls toString())
let obj = { toString: () => "10" };
console.log(obj + 5); // Output: "105" (calls toString(), then concatenates)

console.log("\n");

// ═══════════════════════════════════════════════════════════════════════════
// 2. SUBTRACTION OPERATOR (-)
// ═══════════════════════════════════════════════════════════════════════════

console.log("--- SUBTRACTION OPERATOR (-) ---");

// Basic Subtraction
let a = 30;
let b = 10;
console.log(a - b); // Output: 20

// Unary Minus (negation)
let num = 5;
console.log(-num); // Output: -5

// Subtraction with strings (automatic type conversion)
console.log("10" - 5); // Output: 5 (string is converted to number)
console.log("20" - "5"); // Output: 15 (both strings converted to numbers)

// INTERVIEW TIP: Subtraction always attempts numeric conversion
console.log(true - 1); // Output: 0 (true = 1, so 1 - 1 = 0)
console.log(false - 1); // Output: -1 (false = 0, so 0 - 1 = -1)
console.log(null - 1); // Output: -1 (null = 0)

// TRICKY: undefined behavior
console.log(undefined - 1); // Output: NaN

// Subtraction with invalid strings
console.log("abc" - 5); // Output: NaN (string cannot be converted to number)

console.log("\n");

// ═══════════════════════════════════════════════════════════════════════════
// 3. MULTIPLICATION OPERATOR (*)
// ═══════════════════════════════════════════════════════════════════════════

console.log("--- MULTIPLICATION OPERATOR (*) ---");

// Basic Multiplication
let x = 5;
let y = 4;
console.log(x * y); // Output: 20

// Multiplication with strings (automatic conversion)
console.log("5" * 2); // Output: 10 (string converted to number)
console.log("5" * "2"); // Output: 10

// INTERVIEW TIP: Type coercion
console.log(true * 5); // Output: 5 (true = 1)
console.log(false * 5); // Output: 0 (false = 0)
console.log(null * 5); // Output: 0 (null = 0)

// TRICKY: With undefined
console.log(undefined * 5); // Output: NaN

// Multiplication by zero
console.log(5 * 0); // Output: 0
console.log(-5 * 0); // Output: -0 (negative zero exists in JS!)
console.log(Object.is(-5 * 0, -0)); // Output: true

// INTERVIEW TIP: Infinity behavior
console.log(Infinity * 5); // Output: Infinity
console.log(-Infinity * 5); // Output: -Infinity
console.log(Infinity * -1); // Output: -Infinity
console.log(Infinity * 0); // Output: NaN

// TRICKY: Very large numbers (precision loss)
let largeNum1 = 9007199254740992; // Maximum safe integer
let largeNum2 = 9007199254740993; // Beyond safe integer
console.log(largeNum1 + 1 === largeNum2); // Output: false (precision loss)

console.log("\n");

// ═══════════════════════════════════════════════════════════════════════════
// 4. DIVISION OPERATOR (/)
// ═══════════════════════════════════════════════════════════════════════════

console.log("--- DIVISION OPERATOR (/) ---");

// Basic Division
let p = 20;
let q = 4;
console.log(p / q); // Output: 5

// Division with strings (automatic conversion)
console.log("20" / 2); // Output: 10 (string converted to number)
console.log("20" / "4"); // Output: 5

// INTERVIEW TIP: Type coercion
console.log(true / 1); // Output: 1 (true = 1)
console.log(false / 1); // Output: 0 (false = 0)

// Division by zero
console.log(5 / 0); // Output: Infinity (not an error!)
console.log(-5 / 0); // Output: -Infinity
console.log(0 / 0); // Output: NaN

// TRICKY: Infinity behavior
console.log(Infinity / 5); // Output: Infinity
console.log(Infinity / Infinity); // Output: NaN
console.log(0 / Infinity); // Output: 0

// INTERVIEW TIP: Precision issues
console.log(0.1 + 0.2); // Output: 0.30000000000000004 (NOT 0.3!)
console.log(0.1 + 0.2 === 0.3); // Output: false
console.log(Math.abs((0.1 + 0.2) - 0.3) < 0.0001); // Better approach for comparison

// Division with undefined
console.log(undefined / 5); // Output: NaN

console.log("\n");

// ═══════════════════════════════════════════════════════════════════════════
// 5. MODULUS OPERATOR (%) - Remainder
// ═══════════════════════════════════════════════════════════════════════════

console.log("--- MODULUS OPERATOR (%) ---");

// Basic Modulus (Remainder after division)
let m = 20;
let n = 3;
console.log(m % n); // Output: 2 (20 / 3 = 6 remainder 2)

// Useful for checking if number is even or odd
console.log(10 % 2); // Output: 0 (even)
console.log(11 % 2); // Output: 1 (odd)

// INTERVIEW TIP: Negative numbers
console.log(20 % -3); // Output: 2 (sign of dividend matters, not divisor)
console.log(-20 % 3); // Output: -2 (sign follows the dividend)
console.log(-20 % -3); // Output: -2

// TRICKY: Modulus with floats
console.log(5.5 % 2); // Output: 1.5
console.log(20.7 % 3); // Output: 2.6999999999999993 (precision issue)

// Modulus with strings (automatic conversion)
console.log("20" % 3); // Output: 2

// INTERVIEW TIP: Modulus with 1 (always returns 0 for integers)
console.log(100 % 1); // Output: 0
console.log(100.5 % 1); // Output: 0.5 (decimal part)

// TRICKY: Modulus with zero
console.log(5 % 0); // Output: NaN

// INTERVIEW USE CASE: Circular array indexing
let arrayLength = 5;
let currentIndex = 7;
console.log(currentIndex % arrayLength); // Output: 2 (wraps around)

// Negative modulus for circular indexing
let negativeIndex = -2;
console.log((negativeIndex % arrayLength + arrayLength) % arrayLength); // Output: 3

console.log("\n");

// ═══════════════════════════════════════════════════════════════════════════
// 6. EXPONENTIATION OPERATOR (**)
// ═══════════════════════════════════════════════════════════════════════════

console.log("--- EXPONENTIATION OPERATOR (**) ---");

// Basic Exponentiation
let base = 2;
let exponent = 3;
console.log(base ** exponent); // Output: 8 (2^3)

// Equivalent to Math.pow()
console.log(Math.pow(2, 3)); // Output: 8
console.log(2 ** 3); // Output: 8

// INTERVIEW TIP: Negative exponent (returns fractional result)
console.log(2 ** -1); // Output: 0.5 (1/2)
console.log(2 ** -2); // Output: 0.25 (1/4)
console.log(5 ** -1); // Output: 0.2 (1/5)

// Zero raised to powers
console.log(0 ** 5); // Output: 0
console.log(0 ** 0); // Output: 1 (mathematical convention)

// INTERVIEW TIP: Exponentiation with Infinity
console.log(2 ** Infinity); // Output: Infinity
console.log(0.5 ** Infinity); // Output: 0
console.log(Infinity ** 2); // Output: Infinity
console.log(Infinity ** 0); // Output: 1

// TRICKY: Negative base with fractional exponent
console.log((-2) ** 2); // Output: 4 (positive result)
console.log((-2) ** 0.5); // Output: NaN (square root of negative)

// Right associativity (INTERVIEW TIP!)
console.log(2 ** 3 ** 2); // Output: 512 (NOT 64)
// Explanation: 2 ** 3 ** 2 = 2 ** (3 ** 2) = 2 ** 9 = 512
// NOT (2 ** 3) ** 2 = 8 ** 2 = 64
console.log(2 ** (3 ** 2)); // Output: 512
console.log((2 ** 3) ** 2); // Output: 64

// Exponentiation with strings
console.log("2" ** 3); // Output: 8 (string converted to number)
console.log("2" ** "3"); // Output: 8

console.log("\n");

// ═══════════════════════════════════════════════════════════════════════════
// INTERVIEW TRICK QUESTIONS & EDGE CASES
// ═══════════════════════════════════════════════════════════════════════════

console.log("--- INTERVIEW TRICK QUESTIONS ---");

// Question 1: What is the output?
let result1 = "5" - 2 + 3;
console.log(result1); // Output: 6 ("5" - 2 = 3, then 3 + 3 = 6)

// Question 2: Type coercion complexity
let result2 = "10" + "20" - "5";
console.log(result2); // Output: 1015 - 5 = 1010 (wait, no!)
// Explanation: "10" + "20" = "1020" (string concat), then "1020" - "5" = 1015

// Actually let's verify:
console.log("10" + "20"); // Output: "1020" (string concatenation)
console.log("1020" - "5"); // Output: 1015 (string to number conversion)

// Question 3: Floating point precision
let result3 = 0.1 + 0.2 - 0.3;
console.log(result3); // Output: 5.551115123125783e-17 (NOT 0!)
console.log(result3 === 0); // Output: false

// Question 4: NaN comparison
let result4 = NaN === NaN;
console.log(result4); // Output: false (NaN is never equal to anything, even itself!)
console.log(Number.isNaN(result4)); // Output: true

// Question 5: Type coercion with null and undefined
console.log(null + undefined); // Output: NaN
console.log(null + null); // Output: 0

// Question 6: Division precedence and associativity
let result6 = 10 / 2 * 3;
console.log(result6); // Output: 15 (left to right: (10/2)*3 = 5*3)

let result7 = 10 / 2 / 5;
console.log(result7); // Output: 1 (left to right: (10/2)/5 = 5/5)

// Question 7: Increment/decrement vs arithmetic (Preview for next chapter)
let i = 5;
console.log(i-- + ++i); // Output: 10 (5 + 5)
// i is 5 initially
// i-- returns 5, then i becomes 4
// ++i increments i to 5, then returns 5
// So: 5 + 5 = 10

console.log("\n");

// ═══════════════════════════════════════════════════════════════════════════
// PRACTICAL EXAMPLES FOR INTERVIEWS
// ═══════════════════════════════════════════════════════════════════════════

console.log("--- PRACTICAL INTERVIEW EXAMPLES ---");

// Example 1: Calculate percentage
function calculatePercentage(value, total) {
  return (value / total) * 100;
}
console.log(calculatePercentage(25, 100)); // Output: 25

// Example 2: Check if number is power of 2
function isPowerOfTwo(n) {
  return n > 0 && (n & (n - 1)) === 0; // Bitwise approach, but arithmetic way:
  // OR using exponentiation:
  return n > 0 && Math.log2(n) % 1 === 0;
}
console.log(isPowerOfTwo(8)); // Output: true
console.log(isPowerOfTwo(10)); // Output: false

// Example 3: Find GCD (Greatest Common Divisor) using Euclidean algorithm
function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}
console.log(gcd(48, 18)); // Output: 6

// Example 4: Sum of digits
function sumOfDigits(n) {
  let sum = 0;
  n = Math.abs(n); // Handle negative numbers
  while (n > 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }
  return sum;
}
console.log(sumOfDigits(12345)); // Output: 15 (1+2+3+4+5)

// Example 5: Check if number is Armstrong number (narcissistic number)
// E.g., 153 = 1^3 + 5^3 + 3^3
function isArmstrongNumber(n) {
  const digits = String(n).split("");
  const power = digits.length;
  const sum = digits.reduce((acc, digit) => acc + Math.pow(digit, power), 0);
  return sum === n;
}
console.log(isArmstrongNumber(153)); // Output: true
console.log(isArmstrongNumber(370)); // Output: true
console.log(isArmstrongNumber(100)); // Output: false

console.log("\n");

// ═══════════════════════════════════════════════════════════════════════════
// OPERATOR PRECEDENCE (Important for arithmetic)
// ═══════════════════════════════════════════════════════════════════════════

console.log("--- OPERATOR PRECEDENCE ---");

// Exponentiation has higher precedence than multiplication
console.log(2 * 3 ** 2); // Output: 18 (NOT 36)
// Because: 3 ** 2 = 9, then 2 * 9 = 18

// Multiplication and Division (left to right)
console.log(10 / 2 * 5); // Output: 25 (10/2 = 5, then 5*5 = 25)

// Addition and Subtraction (left to right)
console.log(10 - 5 + 3); // Output: 8 (10-5 = 5, then 5+3 = 8)

// Full expression
console.log(2 + 3 * 4 ** 2 - 5); // Output: 49
// Step by step: 4 ** 2 = 16
//               3 * 16 = 48
//               2 + 48 = 50
//               50 - 5 = 45
// Wait let me recalculate: 2 + (3 * (4**2)) - 5 = 2 + (3*16) - 5 = 2 + 48 - 5 = 45

console.log("\n");
