// ============================================================================
//                    BITWISE OPERATORS GUIDE
// ============================================================================

// WHAT ARE BITWISE OPERATORS?
// Bitwise operators perform operations on binary representations of integers.
// They work directly with the bits (0s and 1s) of numbers.

// All Numbers in JavaScript are converted to 32-bit signed integers for bitwise operations.

// Bitwise Operators in JavaScript:
// 1. & (AND)        - Bitwise AND
// 2. | (OR)         - Bitwise OR
// 3. ^ (XOR)        - Bitwise XOR (Exclusive OR)
// 4. ~ (NOT)        - Bitwise NOT
// 5. << (Left Shift)    - Left Shift
// 6. >> (Right Shift)   - Sign-propagating Right Shift
// 7. >>> (Unsigned Right Shift) - Zero-fill Right Shift


// ============================================================================
//         BINARY REPRESENTATION CONCEPT
// ============================================================================

console.log("===== UNDERSTANDING BINARY =====");

// Decimal to Binary conversion
// Decimal 5 = 0101 in binary
// Decimal 3 = 0011 in binary
// Decimal 9 = 1001 in binary

// toString(2) converts number to binary string
console.log("5 in binary: " + (5).toString(2));    // Output: 101
console.log("3 in binary: " + (3).toString(2));    // Output: 11
console.log("9 in binary: " + (9).toString(2));    // Output: 1001


// ============================================================================
//           CONCEPT 1: BITWISE AND (&) OPERATOR
// ============================================================================

console.log("\n===== CONCEPT 1: BITWISE AND (&) =====");

// AND operation: Returns 1 if BOTH bits are 1, otherwise 0
//   5 = 0101
//   3 = 0011
//   ------- 
//   1 = 0001

console.log("5 & 3 = " + (5 & 3));  // Output: 1

// Simple Example 1: Check if both conditions are true in binary
console.log("12 & 10 = " + (12 & 10));  // 8
// 12 = 1100
// 10 = 1010
// --- = 1000 (8)

// Simple Example 2: Check specific bit
let num1 = 7;  // 0111 in binary
console.log("Is 3rd bit of 7 set? " + (7 & 4) + " (4 = 0100)");  // 4 (true)
console.log("Is 4th bit of 7 set? " + (7 & 8) + " (8 = 1000)");  // 0 (false)


// ============================================================================
//           CONCEPT 2: BITWISE OR (|) OPERATOR
// ============================================================================

console.log("\n===== CONCEPT 2: BITWISE OR (|) =====");

// OR operation: Returns 1 if ANY bit is 1, otherwise 0
//   5 = 0101
//   3 = 0011
//   -------
//   7 = 0111

console.log("5 | 3 = " + (5 | 3));  // Output: 7

// Simple Example 1:
console.log("12 | 10 = " + (12 | 10));  // 14
// 12 = 1100
// 10 = 1010
// --- = 1110 (14)

// Simple Example 2: Combining flags
let flag1 = 1;  // 0001
let flag2 = 2;  // 0010
let combinedFlags = flag1 | flag2;
console.log("Combined flags: " + combinedFlags);  // 3 (0011)


// ============================================================================
//           CONCEPT 3: BITWISE XOR (^) OPERATOR
// ============================================================================

console.log("\n===== CONCEPT 3: BITWISE XOR (^) =====");

// XOR operation: Returns 1 if bits are DIFFERENT, 0 if SAME
//   5 = 0101
//   3 = 0011
//   -------
//   6 = 0110

console.log("5 ^ 3 = " + (5 ^ 3));  // Output: 6

// Simple Example 1:
console.log("12 ^ 10 = " + (12 ^ 10));  // 6
// 12 = 1100
// 10 = 1010
// --- = 0110 (6)

// Simple Example 2: Toggle bits
let bits = 5;  // 0101
console.log("Toggle all bits of 5: " + (bits ^ 15));  // 10 (0101 ^ 1111 = 1010)


// ============================================================================
//           CONCEPT 4: BITWISE NOT (~) OPERATOR
// ============================================================================

console.log("\n===== CONCEPT 4: BITWISE NOT (~) =====");

// NOT operation: Inverts all bits (0 becomes 1, 1 becomes 0)
// For 5 (32-bit): 00000000000000000000000000000101
// ~5 = 11111111111111111111111111111010 = -6

console.log("~5 = " + (~5));  // Output: -6
console.log("~0 = " + (~0));  // Output: -1
console.log("~(-1) = " + (~(-1)));  // Output: 0

// Simple Example: Double NOT converts to boolean
console.log("!!5 = " + (!!5));      // true
console.log("!!0 = " + (!!0));      // false


// ============================================================================
//        CONCEPT 5: LEFT SHIFT (<<) OPERATOR
// ============================================================================

console.log("\n===== CONCEPT 5: LEFT SHIFT (<<) =====");

// Left Shift: Shifts bits to the left, fills with 0 from right
// Multiplies by 2^n
//   5 = 0101
// 5 << 1 = 1010 (10)
// 5 << 2 = 10100 (20)

console.log("5 << 1 = " + (5 << 1));  // Output: 10 (5 * 2)
console.log("5 << 2 = " + (5 << 2));  // Output: 20 (5 * 4)
console.log("3 << 3 = " + (3 << 3));  // Output: 24 (3 * 8)

// Simple Example: Efficient multiplication
let num = 4;
console.log("4 * 8 = " + (num << 3));  // Output: 32


// ============================================================================
//        CONCEPT 6: RIGHT SHIFT (>>) OPERATOR
// ============================================================================

console.log("\n===== CONCEPT 6: RIGHT SHIFT (>>) =====");

// Right Shift: Shifts bits to the right, fills with sign bit from left
// Divides by 2^n (for positive numbers)
//   20 = 10100
// 20 >> 1 = 01010 (10)
// 20 >> 2 = 00101 (5)

console.log("20 >> 1 = " + (20 >> 1));  // Output: 10 (20 / 2)
console.log("20 >> 2 = " + (20 >> 2));  // Output: 5 (20 / 4)
console.log("-5 >> 1 = " + (-5 >> 1));  // Output: -3 (preserves sign)

// Simple Example: Efficient division
let number = 32;
console.log("32 / 8 = " + (number >> 3));  // Output: 4


// ============================================================================
//   CONCEPT 7: UNSIGNED RIGHT SHIFT (>>>) OPERATOR
// ============================================================================

console.log("\n===== CONCEPT 7: UNSIGNED RIGHT SHIFT (>>>) =====");

// Unsigned Right Shift: Shifts bits to the right, always fills with 0
// Treats number as unsigned (positive)
//   20 = 10100
// 20 >>> 1 = 01010 (10)

console.log("20 >>> 1 = " + (20 >>> 1));   // Output: 10
console.log("-5 >>> 1 = " + (-5 >>> 1));   // Output: 2147483645 (different from >>)

// Difference between >> and >>>
console.log("Difference: >> vs >>>");
console.log("-8 >> 1 = " + (-8 >> 1));     // Output: -4 (preserves negative sign)
console.log("-8 >>> 1 = " + (-8 >>> 1));   // Output: 2147483644 (treats as unsigned)


// ============================================================================
//                  INTERVIEW QUESTIONS & ANSWERS
// ============================================================================

console.log("\n===== INTERVIEW QUESTIONS =====");

// INTERVIEW Q1: Check if specific bit is set
console.log("\n--- Q1: Check if nth Bit is Set ---");
function isBitSet(num, position) {
  return (num & (1 << position)) !== 0;
}

console.log("Is bit 0 of 5 set? " + isBitSet(5, 0));   // true (5 = 0101)
console.log("Is bit 1 of 5 set? " + isBitSet(5, 1));   // false
console.log("Is bit 2 of 5 set? " + isBitSet(5, 2));   // true

// INTERVIEW Q2: Set a specific bit
console.log("\n--- Q2: Set nth Bit to 1 ---");
function setBit(num, position) {
  return num | (1 << position);
}

console.log("Set bit 1 of 5: " + setBit(5, 1));  // 7 (0101 becomes 0111)
console.log("Set bit 3 of 5: " + setBit(5, 3));  // 13 (0101 becomes 1101)

// INTERVIEW Q3: Unset (clear) a specific bit
console.log("\n--- Q3: Clear nth Bit to 0 ---");
function clearBit(num, position) {
  return num & ~(1 << position);
}

console.log("Clear bit 0 of 5: " + clearBit(5, 0));  // 4 (0101 becomes 0100)
console.log("Clear bit 2 of 5: " + clearBit(5, 2));  // 1 (0101 becomes 0001)

// INTERVIEW Q4: Toggle a specific bit
console.log("\n--- Q4: Toggle nth Bit ---");
function toggleBit(num, position) {
  return num ^ (1 << position);
}

console.log("Toggle bit 0 of 5: " + toggleBit(5, 0));  // 4 (0101 becomes 0100)
console.log("Toggle bit 1 of 5: " + toggleBit(5, 1));  // 7 (0101 becomes 0111)
console.log("Toggle bit 2 of 5: " + toggleBit(5, 2));  // 1 (0101 becomes 0001)

// INTERVIEW Q5: Check if number is power of 2
console.log("\n--- Q5: Is Number a Power of 2? ---");
function isPowerOfTwo(num) {
  return num > 0 && (num & (num - 1)) === 0;
}

console.log("Is 8 power of 2? " + isPowerOfTwo(8));   // true
console.log("Is 7 power of 2? " + isPowerOfTwo(7));   // false
console.log("Is 16 power of 2? " + isPowerOfTwo(16)); // true
console.log("Is 0 power of 2? " + isPowerOfTwo(0));   // false

// INTERVIEW Q6: Count number of set bits (1s)
console.log("\n--- Q6: Count Number of Set Bits ---");
function countSetBits(num) {
  let count = 0;
  while (num > 0) {
    count += num & 1;
    num >>= 1;
  }
  return count;
}

console.log("Set bits in 5: " + countSetBits(5));   // 2 (0101 has two 1s)
console.log("Set bits in 7: " + countSetBits(7));   // 3 (0111 has three 1s)
console.log("Set bits in 15: " + countSetBits(15)); // 4 (1111 has four 1s)

// Built-in method
console.log("Using toString(2): " + (5).toString(2).split('1').length - 1); // 2

// INTERVIEW Q7: Find single number (others appear twice)
console.log("\n--- Q7: Find Single Number (Others Appear Twice) ---");
function findSingle(arr) {
  let result = 0;
  for (let num of arr) {
    result ^= num;  // XOR cancels out pairs
  }
  return result;
}

console.log("Single in [2,2,4,4,6]: " + findSingle([2, 2, 4, 4, 6]));  // 6
console.log("Single in [1,1,3,3,5]: " + findSingle([1, 1, 3, 3, 5]));  // 5

// INTERVIEW Q8: Multiply/Divide by power of 2 efficiently
console.log("\n--- Q8: Fast Multiplication/Division ---");
let base = 10;
console.log("Multiply 10 by 4 (using <<): " + (base << 2));  // 40
console.log("Divide 40 by 2 (using >>): " + (40 >> 1));      // 20
console.log("Divide 40 by 8 (using >>): " + (40 >> 3));      // 5

// INTERVIEW Q9: Check if all bits are set in range
console.log("\n--- Q9: Check if All Bits are Set ---");
function areAllBitsSet(num) {
  // Number with all bits set of same bit-length
  let bitLength = num.toString(2).length;
  let allSet = (1 << bitLength) - 1;
  return (num & allSet) === allSet;
}

console.log("Are all bits set in 7 (0111)? " + areAllBitsSet(7));   // true
console.log("Are all bits set in 5 (0101)? " + areAllBitsSet(5));   // false
console.log("Are all bits set in 15 (1111)? " + areAllBitsSet(15)); // true

// INTERVIEW Q10: Swap two numbers without third variable
console.log("\n--- Q10: Swap Two Numbers Using XOR ---");
function swap(a, b) {
  a = a ^ b;
  b = a ^ b;
  a = a ^ b;
  return { a: a, b: b };
}

let result = swap(5, 10);
console.log("After swap: a = " + result.a + ", b = " + result.b);  // a = 10, b = 5

// INTERVIEW Q11: Rotate bits left
console.log("\n--- Q11: Rotate Bits Left ---");
function rotateBitsLeft(num, positions) {
  const bitLength = 32;
  positions = positions % bitLength;
  return ((num << positions) | (num >>> (bitLength - positions))) >>> 0;
}

console.log("Rotate 5 left by 1: " + rotateBitsLeft(5, 1));  // 10
console.log("Rotate 5 left by 2: " + rotateBitsLeft(5, 2));  // 20

// INTERVIEW Q12: Find maximum consecutive 1s in binary
console.log("\n--- Q12: Maximum Consecutive 1s in Binary ---");
function maxConsecutiveOnes(num) {
  let maxCount = 0;
  let currentCount = 0;
  
  while (num > 0) {
    if ((num & 1) === 1) {
      currentCount++;
      maxCount = Math.max(maxCount, currentCount);
    } else {
      currentCount = 0;
    }
    num >>= 1;
  }
  return maxCount;
}

console.log("Max consecutive 1s in 5 (0101): " + maxConsecutiveOnes(5));   // 1
console.log("Max consecutive 1s in 7 (0111): " + maxConsecutiveOnes(7));   // 3
console.log("Max consecutive 1s in 15 (1111): " + maxConsecutiveOnes(15)); // 4


// ============================================================================
//                    PRACTICAL USE CASES
// ============================================================================

console.log("\n===== PRACTICAL USE CASES =====");

// Use Case 1: User Permissions using bit flags
console.log("\n--- Use Case 1: User Permissions ---");
const READ = 1 << 0;     // 0001 = 1
const WRITE = 1 << 1;    // 0010 = 2
const EXECUTE = 1 << 2;  // 0100 = 4

let userPermissions = READ | WRITE;  // User has read and write
console.log("User permissions: " + userPermissions);
console.log("Has read? " + ((userPermissions & READ) !== 0));     // true
console.log("Has write? " + ((userPermissions & WRITE) !== 0));   // true
console.log("Has execute? " + ((userPermissions & EXECUTE) !== 0)); // false

// Use Case 2: Feature flags
console.log("\n--- Use Case 2: Feature Flags ---");
const DARK_MODE = 1 << 0;
const NOTIFICATIONS = 1 << 1;
const ANALYTICS = 1 << 2;

let featureFlags = DARK_MODE | NOTIFICATIONS;
console.log("Dark mode enabled? " + ((featureFlags & DARK_MODE) !== 0));           // true
console.log("Notifications enabled? " + ((featureFlags & NOTIFICATIONS) !== 0));   // true
console.log("Analytics enabled? " + ((featureFlags & ANALYTICS) !== 0));           // false


// ============================================================================
//                    KEY POINTS TO REMEMBER
// ============================================================================

console.log("\n===== KEY TAKEAWAYS =====");
console.log("✓ Bitwise operators work on binary representation of numbers");
console.log("✓ JavaScript converts numbers to 32-bit signed integers");
console.log("✓ & returns 1 only if both bits are 1");
console.log("✓ | returns 1 if any bit is 1");
console.log("✓ ^ returns 1 if bits are different");
console.log("✓ ~ inverts all bits");
console.log("✓ << multiplies by 2^n (left shift n positions)");
console.log("✓ >> divides by 2^n (right shift n positions, preserves sign)");
console.log("✓ >>> right shift with zero fill (unsigned)");
console.log("✓ Useful for permissions, feature flags, and optimization");
console.log("✓ XOR is useful for toggling and finding unique elements");
