let a = 5; 
console.log(a++ + ++a - --a + a-- + ++a); 
console.log(a);



// // ============================================================================
// //         COMPREHENSIVE EXAMPLE: MIXED INCREMENT/DECREMENT
// // ============================================================================

// console.log("\n===== COMPLEX EXPRESSION WALKTHROUGH =====");

// console.log("\nExpression: a++ + ++a - --a + a-- + ++a");
// console.log("Initial value of a: 5");

// console.log("\n--- Step by Step Execution ---");
// let stepA = 5;

// console.log("Step 1: a++");
// console.log("  Returns: 5 (current value before increment)");
// console.log("  After: a becomes 6");
// let step1 = stepA++;  // 5
// console.log("  Result of a++: " + step1 + ", a is now: " + stepA);

// console.log("\nStep 2: ++a");
// console.log("  Increments first: a becomes 7");
// console.log("  Returns: 7 (new value after increment)");
// let step2 = ++stepA;  // 7
// console.log("  Result of ++a: " + step2 + ", a is now: " + stepA);

// console.log("\nStep 3: --a");
// console.log("  Decrements first: a becomes 6");
// console.log("  Returns: 6 (new value after decrement)");
// let step3 = --stepA;  // 6
// console.log("  Result of --a: " + step3 + ", a is now: " + stepA);

// console.log("\nStep 4: a--");
// console.log("  Returns: 6 (current value before decrement)");
// console.log("  After: a becomes 5");
// let step4 = stepA--;  // 6
// console.log("  Result of a--: " + step4 + ", a is now: " + stepA);

// console.log("\nStep 5: ++a");
// console.log("  Increments first: a becomes 6");
// console.log("  Returns: 6 (new value after increment)");
// let step5 = ++stepA;  // 6
// console.log("  Result of ++a: " + step5 + ", a is now: " + stepA);

// console.log("\n--- Calculating the Final Result ---");
// console.log("5 + 7 - 6 + 6 + 6 = ?");
// let finalCalc = 5 + 7 - 6 + 6 + 6;
// console.log("5 + 7 = 12");
// console.log("12 - 6 = 6");
// console.log("6 + 6 = 12");
// console.log("12 + 6 = " + finalCalc);

// console.log("\n--- Final Value of a ---");
// console.log("a = " + stepA + " (after all operations)");

// console.log("\n--- Running the Actual Expression ---");
// let a = 5;
// console.log("Before: a = " + a);
// let expressionResult = a++ + ++a - --a + a-- + ++a;
// console.log("Expression result: " + expressionResult);
// console.log("After: a = " + a);

// console.log("\n--- Memory Trace Table ---");
// console.log("┌──────────────┬──────────┬──────────────────────┐");
// console.log("│  Operation   │ Returns  │  a after operation   │");
// console.log("├──────────────┼──────────┼──────────────────────┤");
// console.log("│  Initial     │    -     │         5            │");
// console.log("│  a++         │    5     │         6            │");
// console.log("│  ++a         │    7     │         7            │");
// console.log("│  --a         │    6     │         6            │");
// console.log("│  a--         │    6     │         5            │");
// console.log("│  ++a         │    6     │         6            │");
// console.log("└──────────────┴──────────┴──────────────────────┘");
