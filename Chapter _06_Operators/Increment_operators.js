// ============================================================================
//                    INCREMENT OPERATORS GUIDE
// ============================================================================

// WHAT ARE INCREMENT/DECREMENT OPERATORS?
// Increment operators (++) and Decrement operators (--) add or subtract 1 from a value.
// They come in two forms: Pre (prefix) and Post (postfix).

// Increment Operators:
// 1. ++ (Increment)     - Adds 1 to the variable
// 2. -- (Decrement)     - Subtracts 1 from the variable

// Each has two forms:
// - Pre-increment/Pre-decrement (++x or --x)    - Changes value FIRST, then returns
// - Post-increment/Post-decrement (x++ or x--)  - Returns value FIRST, then changes


// ============================================================================
//     CONCEPT 1: POST-INCREMENT (x++)
// ============================================================================

console.log("===== CONCEPT 1: POST-INCREMENT (x++) =====");

// Post-increment: Returns CURRENT value, THEN increments
// Syntax: x++
// Returns the value BEFORE incrementing

console.log("--- Simple Example ---");
let count = 5;
console.log("Value of count: " + count);     // 5
console.log("Post-increment: " + count++);   // Returns 5, THEN increments
console.log("After increment: " + count);    // 6

console.log("\n--- Post-increment in assignment ---");
let a = 10;
let b = a++;  // b gets 10, then a becomes 11
console.log("a = " + a + ", b = " + b);  // a = 11, b = 10

console.log("\n--- Post-increment in expression ---");
let x = 5;
let result = x++ + 10;  // Uses 5, then x becomes 6
console.log("x = " + x + ", result = " + result);  // x = 6, result = 15


// ============================================================================
//     CONCEPT 2: PRE-INCREMENT (++x)
// ============================================================================

console.log("\n===== CONCEPT 2: PRE-INCREMENT (++x) =====");

// Pre-increment: Increments FIRST, THEN returns NEW value
// Syntax: ++x
// Returns the value AFTER incrementing

console.log("--- Simple Example ---");
let count2 = 5;
console.log("Value of count2: " + count2);    // 5
console.log("Pre-increment: " + ++count2);    // Increments to 6, then returns 6
console.log("After increment: " + count2);    // 6

console.log("\n--- Pre-increment in assignment ---");
let c = 10;
let d = ++c;  // c becomes 11 FIRST, then d gets 11
console.log("c = " + c + ", d = " + d);  // c = 11, d = 11

console.log("\n--- Pre-increment in expression ---");
let y = 5;
let result2 = ++y + 10;  // y becomes 6 FIRST, then uses 6
console.log("y = " + y + ", result2 = " + result2);  // y = 6, result2 = 16


// ============================================================================
//     CONCEPT 3: KEY DIFFERENCE BETWEEN ++ and ++
// ============================================================================

console.log("\n===== CONCEPT 3: x++ vs ++x COMPARISON =====");

console.log("--- When difference matters (in assignment) ---");
let num1 = 5;
let num2 = 5;

let val1 = num1++;  // val1 = 5, num1 = 6
let val2 = ++num2;  // num2 = 6, val2 = 6

console.log("POST: val1 = " + val1 + ", num1 = " + num1);  // val1 = 5, num1 = 6
console.log("PRE:  val2 = " + val2 + ", num2 = " + num2);  // val2 = 6, num2 = 6

console.log("\n--- In loops (usually no difference) ---");
console.log("POST-increment loop:");
for (let i = 0; i < 3; i++) {
  console.log("  i = " + i);
}

console.log("PRE-increment loop:");
for (let j = 0; j < 3; ++j) {
  console.log("  j = " + j);
}


// ============================================================================
//     CONCEPT 4: POST-DECREMENT (x--)
// ============================================================================

console.log("\n===== CONCEPT 4: POST-DECREMENT (x--) =====");

// Post-decrement: Returns CURRENT value, THEN decrements

console.log("--- Simple Example ---");
let count3 = 10;
console.log("Value of count3: " + count3);     // 10
console.log("Post-decrement: " + count3--);    // Returns 10, THEN decrements
console.log("After decrement: " + count3);     // 9

console.log("\n--- Post-decrement in assignment ---");
let e = 20;
let f = e--;  // f gets 20, then e becomes 19
console.log("e = " + e + ", f = " + f);  // e = 19, f = 20

console.log("\n--- Post-decrement in expression ---");
let z = 8;
let result3 = z-- - 2;  // Uses 8, then z becomes 7
console.log("z = " + z + ", result3 = " + result3);  // z = 7, result3 = 6


// ============================================================================
//     CONCEPT 5: PRE-DECREMENT (--x)
// ============================================================================

console.log("\n===== CONCEPT 5: PRE-DECREMENT (--x) =====");

// Pre-decrement: Decrements FIRST, THEN returns NEW value

console.log("--- Simple Example ---");
let count4 = 10;
console.log("Value of count4: " + count4);    // 10
console.log("Pre-decrement: " + --count4);    // Decrements to 9, then returns 9
console.log("After decrement: " + count4);    // 9

console.log("\n--- Pre-decrement in assignment ---");
let g = 20;
let h = --g;  // g becomes 19 FIRST, then h gets 19
console.log("g = " + g + ", h = " + h);  // g = 19, h = 19

console.log("\n--- Pre-decrement in expression ---");
let w = 8;
let result4 = --w - 2;  // w becomes 7 FIRST, then uses 7
console.log("w = " + w + ", result4 = " + result4);  // w = 7, result4 = 5


// ============================================================================
//     CONCEPT 6: COMPOUND ASSIGNMENT vs INCREMENT
// ============================================================================

console.log("\n===== CONCEPT 6: x++ vs x+=1 =====");

let p = 5;
let q = 5;

// Post-increment
console.log("p++ = " + p++);  // Returns 5, p becomes 6
console.log("After p++: " + p);  // 6

// Compound assignment
console.log("q += 1 = " + (q += 1));  // 6
console.log("After q+=1: " + q);  // 6

console.log("Both achieve same result, but ++ is cleaner for simple increment");


// ============================================================================
//                  INTERVIEW QUESTIONS & ANSWERS
// ============================================================================

console.log("\n===== INTERVIEW QUESTIONS =====");

// INTERVIEW Q1: What is the output?
console.log("\n--- Q1: Understanding x++ vs ++x ---");
let val_1 = 5;
let val_2 = 5;

console.log("x++: " + val_1++);   // 5
console.log("++x: " + ++val_2);   // 6
console.log("After operations: val_1 = " + val_1 + ", val_2 = " + val_2);


// INTERVIEW Q2: What is the final value?
console.log("\n--- Q2: Complex Expression ---");
let m = 10;
let result_q2 = m++ + ++m + m--;
console.log("10 + 12 + 12 = " + result_q2);  // 34
console.log("Final m: " + m);  // 11

// Explanation:
// m++ = 10 (m becomes 11)
// ++m = 12 (m becomes 12)
// m-- = 12 (m becomes 11)
// Total = 10 + 12 + 12 = 34


// INTERVIEW Q3: Counter functionality
console.log("\n--- Q3: Implementing a Counter ---");
let counter = 0;

function incrementCounter() {
  return ++counter;  // Pre-increment for immediate use
}

function getCounter() {
  return counter;
}

console.log("Increment 1: " + incrementCounter());  // 1
console.log("Increment 2: " + incrementCounter());  // 2
console.log("Increment 3: " + incrementCounter());  // 3
console.log("Current: " + getCounter());  // 3


// INTERVIEW Q4: Loop counter with increment
console.log("\n--- Q4: Array Iteration with Index ---");
let arr = ["a", "b", "c", "d"];
let index = 0;

console.log("Elements using index++:");
while (index < arr.length) {
  console.log("  " + arr[index++]);  // Post-increment, uses current value, then moves to next
}


// INTERVIEW Q5: Pre vs Post in while loop
console.log("\n--- Q5: Pre vs Post in Loop ---");
let i = 0;

console.log("Using i++ in while:");
while (i++ < 3) {
  console.log("  i = " + i);
}

console.log("After loop, i = " + i);  // i = 4


// INTERVIEW Q6: Increment in array initialization
console.log("\n--- Q6: Array with Increment ---");
let num = 1;
let numbers = [num++, num++, num++, num++];

console.log("Array: " + numbers);  // [1, 2, 3, 4]
console.log("After loop, num = " + num);  // 5


// INTERVIEW Q7: Countdown functionality
console.log("\n--- Q7: Countdown Using Decrement ---");
let countdown = 5;

console.log("Countdown:");
while (countdown > 0) {
  console.log("  " + countdown--);  // Post-decrement
}
console.log("  Blastoff!");


// INTERVIEW Q8: Trading increment/decrement in algorithm
console.log("\n--- Q8: Algorithm: Find Duplicates ---");
function removeDuplicates(arr) {
  let i = 0;  // Write pointer
  let j = 0;  // Read pointer
  
  while (j < arr.length) {
    if (arr[i] !== arr[j]) {
      arr[++i] = arr[j];  // Pre-increment i, then assign
    }
    j++;  // Post-increment j (we don't use return value)
  }
  
  return i + 1;  // Length of unique elements
}

let duplicates = [1, 1, 2, 2, 3];
let uniqueLength = removeDuplicates(duplicates);
console.log("Unique elements count: " + uniqueLength);  // 3


// INTERVIEW Q9: Prefix increment in function parameters
console.log("\n--- Q9: Increment as Function Parameter ---");
function printAndIncrement(val) {
  console.log("  Value passed: " + val);
  return val;
}

let param = 5;
console.log("Result: " + printAndIncrement(param++));  // Passes 5, param becomes 6
console.log("After call, param = " + param);  // 6


// INTERVIEW Q10: Increment in conditional statements
console.log("\n--- Q10: Increment in Condition ---");
let counter_10 = 0;
let attempts = 0;

while (counter_10++ < 3) {
  attempts++;
  console.log("  Attempt " + attempts + ", counter before increment: " + (counter_10 - 1));
}
console.log("Total attempts: " + attempts);  // 3
console.log("Final counter: " + counter_10);  // 4


// INTERVIEW Q11: Performance - Pre vs Post increment
console.log("\n--- Q11: Why ++i is Better Than i++ (Performance) ---");

// In some languages, post-increment (i++) creates a temporary copy
// Pre-increment (++i) is slightly more efficient
// In JavaScript, both are optimized, but ++i is considered best practice in loops

console.log("Both work, but ++i is preferred in loops:");
console.log("for (let i = 0; i < 10; ++i) { ... }");
console.log("for (let j = 0; j < 10; j++) { ... } // Also works");


// INTERVIEW Q12: Chained operations
console.log("\n--- Q12: Chained Increment/Decrement ---");
let a_12 = 5, b_12 = 10;

let result_12 = ++a_12 + b_12-- + --b_12;
console.log("++a_12 (6) + b_12-- (10) + --b_12 (8) = " + result_12);  // 6 + 10 + 8 = 24
console.log("Final: a_12 = " + a_12 + ", b_12 = " + b_12);  // a_12 = 6, b_12 = 8


// INTERVIEW Q13: Increment with methods
console.log("\n--- Q13: Increment with Array Methods ---");
function processArrayWithIndex(arr) {
  let idx = 0;
  return arr.map(() => idx++);  // Returns [0, 1, 2, ...] with post-increment
}

let processed = processArrayWithIndex([10, 20, 30]);
console.log("Processed: " + processed);  // [0, 1, 2]


// ============================================================================
//                  WHEN TO USE WHICH
// ============================================================================

console.log("\n===== WHEN TO USE WHICH =====");

console.log("x++ (Post-increment):");
console.log("  - Use when you need the current value first");
console.log("  - Loops: for (let i = 0; i < 10; i++)");
console.log("  - When return value matters");

console.log("\n++x (Pre-increment):");
console.log("  - Use when you need the updated value");
console.log("  - Slightly more efficient (no temporary copy)");
console.log("  - When immediate updated value is needed");

console.log("\nx-- / --x (Decrement):");
console.log("  - Use for countdowns");
console.log("  - Backward iteration");
console.log("  - Same pre/post rules apply as increment");


// ============================================================================
//                    KEY POINTS TO REMEMBER
// ============================================================================

console.log("\n===== KEY TAKEAWAYS =====");
console.log("✓ x++ returns current value, THEN increments");
console.log("✓ ++x increments FIRST, THEN returns new value");
console.log("✓ x-- returns current value, THEN decrements");
console.log("✓ --x decrements FIRST, THEN returns new value");
console.log("✓ In loops, x++ and ++x produce same result");
console.log("✓ In assignments, they produce different values");
console.log("✓ ++x is preferred in loops (no temporary copy needed)");
console.log("✓ x++ is more intuitive for post-increment operations");
console.log("✓ Both operators modify the original variable");
console.log("✓ Cannot be used on constants or literals");
console.log("✓ Returns the value (can be used in expressions)");
console.log("✓ Understanding this is crucial for interview questions");
