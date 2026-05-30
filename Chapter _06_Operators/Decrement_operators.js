// ============================================================================
//                    DECREMENT OPERATORS GUIDE
// ============================================================================

// WHAT ARE DECREMENT OPERATORS?
// Decrement operators (--) subtract 1 from a value.
// They come in two forms: Pre (prefix) and Post (postfix).
// They are the opposite of increment operators.

// Decrement Operators:
// 1. -- (Decrement) - Subtracts 1 from the variable

// Two forms:
// - Pre-decrement (--x)   - Changes value FIRST, then returns
// - Post-decrement (x--)  - Returns value FIRST, then changes


// ============================================================================
//     CONCEPT 1: POST-DECREMENT (x--)
// ============================================================================

console.log("===== CONCEPT 1: POST-DECREMENT (x--) =====");

// Post-decrement: Returns CURRENT value, THEN decrements
// Syntax: x--
// Returns the value BEFORE decrementing

console.log("--- Simple Example 1: Basic post-decrement ---");
let count = 10;
console.log("Value of count: " + count);     // 10
console.log("Post-decrement: " + count--);   // Returns 10, THEN decrements
console.log("After decrement: " + count);    // 9

console.log("\n--- Simple Example 2: Post-decrement in assignment ---");
let a = 20;
let b = a--;  // b gets 20, then a becomes 19
console.log("a = " + a + ", b = " + b);  // a = 19, b = 20

console.log("\n--- Simple Example 3: Post-decrement in expression ---");
let x = 8;
let result = x-- - 3;  // Uses 8 first, then x becomes 7
console.log("x = " + x + ", result = " + result);  // x = 7, result = 5

console.log("\n--- Simple Example 4: Multiple post-decrements ---");
let num = 5;
console.log("First: " + num--);   // 5
console.log("Second: " + num--);  // 4
console.log("Third: " + num--);   // 3
console.log("Final: " + num);     // 2


// ============================================================================
//     CONCEPT 2: PRE-DECREMENT (--x)
// ============================================================================

console.log("\n===== CONCEPT 2: PRE-DECREMENT (--x) =====");

// Pre-decrement: Decrements FIRST, THEN returns NEW value
// Syntax: --x
// Returns the value AFTER decrementing

console.log("--- Simple Example 1: Basic pre-decrement ---");
let count2 = 10;
console.log("Value of count2: " + count2);   // 10
console.log("Pre-decrement: " + --count2);   // Decrements to 9, then returns 9
console.log("After decrement: " + count2);   // 9

console.log("\n--- Simple Example 2: Pre-decrement in assignment ---");
let c = 20;
let d = --c;  // c becomes 19 FIRST, then d gets 19
console.log("c = " + c + ", d = " + d);  // c = 19, d = 19

console.log("\n--- Simple Example 3: Pre-decrement in expression ---");
let y = 8;
let result2 = --y - 3;  // y becomes 7 FIRST, then uses 7
console.log("y = " + y + ", result2 = " + result2);  // y = 7, result2 = 4

console.log("\n--- Simple Example 4: Multiple pre-decrements ---");
let num2 = 5;
console.log("First: " + --num2);   // 4
console.log("Second: " + --num2);  // 3
console.log("Third: " + --num2);   // 2
console.log("Final: " + num2);     // 2


// ============================================================================
//     CONCEPT 3: KEY DIFFERENCE BETWEEN x-- and --x
// ============================================================================

console.log("\n===== CONCEPT 3: x-- vs --x COMPARISON =====");

console.log("--- When difference matters (in assignment) ---");
let num3 = 10;
let num4 = 10;

let val1 = num3--;  // val1 = 10, num3 = 9
let val2 = --num4;  // num4 = 9, val2 = 9

console.log("POST: val1 = " + val1 + ", num3 = " + num3);  // val1 = 10, num3 = 9
console.log("PRE:  val2 = " + val2 + ", num4 = " + num4);  // val2 = 9, num4 = 9

console.log("\n--- In loops (usually no difference in result) ---");
console.log("POST-decrement loop:");
for (let i = 3; i > 0; i--) {
  console.log("  i = " + i);
}

console.log("PRE-decrement loop:");
for (let j = 3; j > 0; --j) {
  console.log("  j = " + j);
}


// ============================================================================
//     CONCEPT 4: DECREMENT vs DECREMENT IN EXPRESSIONS
// ============================================================================

console.log("\n===== CONCEPT 4: DECREMENT IN DIFFERENT CONTEXTS =====");

console.log("--- In arithmetic operations ---");
let val = 10;
console.log("val-- + 5 = " + (val-- + 5));  // 10 + 5 = 15
console.log("After: val = " + val);         // val = 9

let val3 = 10;
console.log("--val + 5 = " + (--val3 + 5)); // (10-1) + 5 = 14
console.log("After: val = " + val3);        // val = 9

console.log("\n--- In comparison ---");
let i1 = 5;
console.log("i1-- > 0? " + (i1-- > 0) + ", i1 = " + i1);  // true, 4

let i2 = 5;
console.log("--i2 > 0? " + (--i2 > 0) + ", i2 = " + i2);  // true, 4

let i3 = 1;
console.log("i3-- > 0? " + (i3-- > 0) + ", i3 = " + i3);  // true, 0

let i4 = 1;
console.log("--i4 > 0? " + (--i4 > 0) + ", i4 = " + i4);  // false, 0


// ============================================================================
//     CONCEPT 5: DECREMENT WITH DIFFERENT DATA TYPES
// ============================================================================

console.log("\n===== CONCEPT 5: DECREMENT WITH DIFFERENT TYPES =====");

console.log("--- Numeric types ---");
let intVal = 5;
console.log("intVal-- = " + intVal-- + ", after = " + intVal);  // 5, 4

let floatVal = 3.5;
console.log("floatVal-- = " + floatVal-- + ", after = " + floatVal);  // 3.5, 2.5

console.log("\n--- Negative numbers ---");
let negVal = -5;
console.log("negVal-- = " + negVal-- + ", after = " + negVal);  // -5, -6

console.log("\n--- Zero ---");
let zeroVal = 0;
console.log("zeroVal-- = " + zeroVal-- + ", after = " + zeroVal);  // 0, -1


// ============================================================================
//     CONCEPT 6: COMPOUND ASSIGNMENT vs DECREMENT
// ============================================================================

console.log("\n===== CONCEPT 6: x-- vs x-=1 =====");

let p = 10;
let q = 10;

console.log("p-- = " + p--);     // Returns 10, p becomes 9
console.log("After p--: " + p);  // 9

console.log("q -= 1 = " + (q -= 1));  // 9
console.log("After q-=1: " + q);     // 9

console.log("Both achieve same result, but -- is cleaner");


// ============================================================================
//                  INTERVIEW QUESTIONS & ANSWERS
// ============================================================================

console.log("\n===== INTERVIEW QUESTIONS =====");

// INTERVIEW Q1: What is the output?
console.log("\n--- Q1: Understanding x-- vs --x ---");
let val_1 = 5;
let val_2 = 5;

console.log("x--: " + val_1--);   // 5
console.log("--x: " + --val_2);   // 4
console.log("After operations: val_1 = " + val_1 + ", val_2 = " + val_2);


// INTERVIEW Q2: Complex expression with decrement
console.log("\n--- Q2: Complex Expression ---");
let m = 10;
let result_q2 = m-- - --m + m--;
console.log("10 - 8 + 8 = " + result_q2);  // 10
console.log("Final m: " + m);  // 7

// Explanation:
// m-- = 10 (m becomes 9)
// --m = 8 (m becomes 8)
// m-- = 8 (m becomes 7)
// Total = 10 - 8 + 8 = 10


// INTERVIEW Q3: Countdown functionality (classic use case)
console.log("\n--- Q3: Countdown Functionality ---");
function countdown(seconds) {
  console.log("Countdown starting:");
  while (seconds > 0) {
    console.log("  " + seconds--);
  }
  console.log("  Time's up!");
}

countdown(5);


// INTERVIEW Q4: Backward array iteration
console.log("\n--- Q4: Backward Array Iteration ---");
let arr = ["apple", "banana", "cherry", "date"];
console.log("Array in reverse:");

let idx = arr.length - 1;
while (idx >= 0) {
  console.log("  " + arr[idx--]);  // Post-decrement moves backward
}


// INTERVIEW Q5: Decrement in for loop
console.log("\n--- Q5: Decrement in For Loop ---");
console.log("Backward loop:");
for (let i = 5; i > 0; i--) {
  console.log("  i = " + i);
}


// INTERVIEW Q6: Pre-decrement efficiency in loop
console.log("\n--- Q6: Pre-decrement in Loop (More Efficient) ---");
console.log("Using --i:");
for (let j = 5; j > 0; --j) {
  console.log("  j = " + j);
}


// INTERVIEW Q7: Decrement in array building
console.log("\n--- Q7: Building Array with Decrement ---");
let length = 5;
let decrementArr = [];

while (length > 0) {
  decrementArr.push(length--);
}

console.log("Array: " + decrementArr);  // [5, 4, 3, 2, 1]


// INTERVIEW Q8: Decrement with nested loops
console.log("\n--- Q8: Nested Loops with Decrement ---");
console.log("Triangle pattern (reversed):");
for (let i = 3; i > 0; i--) {
  let line = "";
  for (let j = i; j > 0; j--) {
    line += "* ";
  }
  console.log("  " + line);
}


// INTERVIEW Q9: Finding element from end of array
console.log("\n--- Q9: Search from End of Array ---");
function findLastIndex(arr, target) {
  let index = arr.length - 1;
  
  while (index >= 0) {
    if (arr[index] === target) {
      return index;
    }
    index--;  // Decrement to move backward
  }
  
  return -1;  // Not found
}

let searchArr = [1, 2, 3, 2, 4, 2, 5];
console.log("Last index of 2: " + findLastIndex(searchArr, 2));  // 5


// INTERVIEW Q10: Decrement in conditional
console.log("\n--- Q10: Decrement in Conditional ---");
let attempts = 3;
let success = false;

while (attempts-- > 0) {
  console.log("  Attempt " + (attempts + 1) + " (remaining: " + attempts + ")");
  if (attempts === 1) {
    success = true;
    break;
  }
}

if (success) {
  console.log("  Success!");
}


// INTERVIEW Q11: Chained decrement operations
console.log("\n--- Q11: Chained Decrement ---");
let a_11 = 10, b_11 = 10;

let result_11 = a_11-- - --b_11 + a_11--;
console.log("10 - 9 + 9 = " + result_11);  // 10
console.log("Final: a_11 = " + a_11 + ", b_11 = " + b_11);  // a_11 = 8, b_11 = 9


// INTERVIEW Q12: Decrement with method iteration
console.log("\n--- Q12: Reverse Iteration with Decrement ---");
function reverseString(str) {
  let result = "";
  let i = str.length - 1;
  
  while (i >= 0) {
    result += str[i--];
  }
  
  return result;
}

console.log("Original: 'hello'");
console.log("Reversed: '" + reverseString("hello") + "'");  // "olleh"


// INTERVIEW Q13: Decrement for removing elements
console.log("\n--- Q13: Remove Elements Using Decrement ---");
function removeNegatives(arr) {
  let i = arr.length - 1;  // Start from end
  
  while (i >= 0) {
    if (arr[i] < 0) {
      arr.splice(i, 1);  // Remove element
    }
    i--;  // Move backward
  }
  
  return arr;
}

let numArr = [1, -2, 3, -4, 5, -6];
console.log("After removing negatives: " + removeNegatives(numArr));  // [1, 3, 5]


// INTERVIEW Q14: Bubble sort with decrement
console.log("\n--- Q14: Bubble Sort Using Decrement ---");
function bubbleSort(arr) {
  let n = arr.length;
  
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  
  return arr;
}

let unsorted = [5, 2, 8, 1, 9];
console.log("Sorted: " + bubbleSort(unsorted));  // [1, 2, 5, 8, 9]


// ============================================================================
//                  WHEN TO USE DECREMENT
// ============================================================================

console.log("\n===== WHEN TO USE DECREMENT =====");

console.log("x-- (Post-decrement):");
console.log("  - Backward loops: for (let i = 10; i > 0; i--)");
console.log("  - When you need current value first");
console.log("  - Most common in practical code");

console.log("\n--x (Pre-decrement):");
console.log("  - When you need updated value immediately");
console.log("  - Slightly more efficient (no temporary copy)");
console.log("  - Some prefer for loops: for (let i = 10; i > 0; --i)");

console.log("\nCommon Use Cases:");
console.log("  - Countdown timers");
console.log("  - Backward iteration through arrays");
console.log("  - Processing from end of collection");
console.log("  - Removing elements from arrays");
console.log("  - Decreasing resource counters");


// ============================================================================
//                DECREMENT vs INCREMENT COMPARISON
// ============================================================================

console.log("\n===== DECREMENT vs INCREMENT =====");

console.log("--- Direction ---");
console.log("Increment (++): Forward, increases value");
console.log("Decrement (--): Backward, decreases value");

console.log("\n--- Loop Usage ---");
console.log("For loop forward:  for (let i = 0; i < 10; i++)");
console.log("For loop backward: for (let i = 10; i > 0; i--)");

console.log("\n--- Return Values ---");
let t1 = 5, t2 = 5, t3 = 5, t4 = 5;
console.log("i++: " + t1++ + " (returns current)");
console.log("++i: " + ++t2 + " (returns new)");
console.log("i--: " + t3-- + " (returns current)");
console.log("--i: " + --t4 + " (returns new)");


// ============================================================================
//         COMPREHENSIVE EXAMPLE: MIXED INCREMENT/DECREMENT
// ============================================================================

console.log("\n===== COMPLEX EXPRESSION WALKTHROUGH =====");

console.log("\nExpression: a++ + ++a - --a + a-- + ++a");
console.log("Initial value of a: 5");

console.log("\n--- Step by Step Execution ---");
let stepA = 5;

console.log("Step 1: a++");
console.log("  Returns: 5 (current value before increment)");
console.log("  After: a becomes 6");
let step1 = stepA++;  // 5
console.log("  Result of a++: " + step1 + ", a is now: " + stepA);

console.log("\nStep 2: ++a");
console.log("  Increments first: a becomes 7");
console.log("  Returns: 7 (new value after increment)");
let step2 = ++stepA;  // 7
console.log("  Result of ++a: " + step2 + ", a is now: " + stepA);

console.log("\nStep 3: --a");
console.log("  Decrements first: a becomes 6");
console.log("  Returns: 6 (new value after decrement)");
let step3 = --stepA;  // 6
console.log("  Result of --a: " + step3 + ", a is now: " + stepA);

console.log("\nStep 4: a--");
console.log("  Returns: 6 (current value before decrement)");
console.log("  After: a becomes 5");
let step4 = stepA--;  // 6
console.log("  Result of a--: " + step4 + ", a is now: " + stepA);

console.log("\nStep 5: ++a");
console.log("  Increments first: a becomes 6");
console.log("  Returns: 6 (new value after increment)");
let step5 = ++stepA;  // 6
console.log("  Result of ++a: " + step5 + ", a is now: " + stepA);

console.log("\n--- Calculating the Final Result ---");
console.log("5 + 7 - 6 + 6 + 6 = ?");
let finalCalc = 5 + 7 - 6 + 6 + 6;
console.log("5 + 7 = 12");
console.log("12 - 6 = 6");
console.log("6 + 6 = 12");
console.log("12 + 6 = " + finalCalc);

console.log("\n--- Final Value of a ---");
console.log("a = " + stepA + " (after all operations)");

console.log("\n--- Running the Actual Expression ---");
let a = 5;
console.log("Before: a = " + a);
let expressionResult = a++ + ++a - --a + a-- + ++a;
console.log("Expression result: " + expressionResult);
console.log("After: a = " + a);

console.log("\n--- Memory Trace Table ---");
console.log("┌──────────────┬──────────┬──────────────────────┐");
console.log("│  Operation   │ Returns  │  a after operation   │");
console.log("├──────────────┼──────────┼──────────────────────┤");
console.log("│  Initial     │    -     │         5            │");
console.log("│  a++         │    5     │         6            │");
console.log("│  ++a         │    7     │         7            │");
console.log("│  --a         │    6     │         6            │");
console.log("│  a--         │    6     │         5            │");
console.log("│  ++a         │    6     │         6            │");
console.log("└──────────────┴──────────┴──────────────────────┘");


// ============================================================================
//                    KEY POINTS TO REMEMBER
// ============================================================================

console.log("\n===== KEY TAKEAWAYS =====");
console.log("✓ x-- returns current value, THEN decrements");
console.log("✓ --x decrements FIRST, THEN returns new value");
console.log("✓ Opposite of increment operators (++)");
console.log("✓ Used for backward iteration and countdowns");
console.log("✓ In loops, x-- and --x produce same effect");
console.log("✓ In assignments, they produce different values");
console.log("✓ --x is slightly more efficient (no temp copy)");
console.log("✓ x-- is more intuitive for most developers");
console.log("✓ Both modify the original variable");
console.log("✓ Cannot be used on constants or literals");
console.log("✓ Can be used in expressions and conditions");
console.log("✓ Common in array manipulation and string reversal");
console.log("✓ Pre-decrement (--x) often preferred in modern code");



let a = 5; 
console.log(a++ + ++a - --a + a-- + ++a); 
console.log(a);