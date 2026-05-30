// ============================================================================
//                         TERNARY OPERATOR GUIDE
// ============================================================================

// WHAT IS TERNARY OPERATOR?
// The ternary operator (also called conditional operator) is the only operator 
// in JavaScript that takes THREE operands: condition, true value, false value.
// It's a shorthand for if-else statements.

// SYNTAX:
// condition ? valueIfTrue : valueIfFalse

// ============================================================================
//                      CONCEPT 1: BASIC SYNTAX & STRUCTURE
// ============================================================================

console.log("===== CONCEPT 1: BASIC SYNTAX =====");

// Simple Example 1: Check if age is eligible for voting
let age = 18;
let result = (age >= 18) ? "Eligible to vote" : "Not eligible to vote";
console.log(result);  // Output: Eligible to vote

// Simple Example 2: Check if number is even or odd
let num = 5;
let evenOdd = (num % 2 === 0) ? "Even" : "Odd";
console.log(evenOdd);  // Output: Odd

// Simple Example 3: Check if temperature is hot or cold
let temp = 35;
let weatherStatus = (temp > 30) ? "Hot" : "Cold";
console.log(weatherStatus);  // Output: Hot


// ============================================================================
//                    CONCEPT 2: TERNARY WITH VARIABLES
// ============================================================================

console.log("\n===== CONCEPT 2: TERNARY WITH VARIABLES =====");

// Example: Assign different values based on condition
let marks = 75;
let grade = (marks >= 80) ? "A" : (marks >= 60) ? "B" : "C";
console.log(grade);  // Output: B

// Example: Get the larger number
let x = 10, y = 20;
let greater = (x > y) ? x : y;
console.log("Greater number: " + greater);  // Output: Greater number: 20


// ============================================================================
//                CONCEPT 3: NESTED TERNARY OPERATORS
// ============================================================================

console.log("\n===== CONCEPT 3: NESTED TERNARY OPERATORS =====");

// Example: Check if student is Pass, Fail, or Distinction
let studentMarks = 85;
let studentStatus = (studentMarks >= 80) ? "Distinction" : 
                    (studentMarks >= 60) ? "Pass" : 
                    "Fail";
console.log(studentStatus);  // Output: Distinction

// Example: Get day type based on day number
let dayNum = 6;  // 1-5 = Weekday, 6-7 = Weekend
let dayType = (dayNum >= 1 && dayNum <= 5) ? "Weekday" : 
              (dayNum === 6 || dayNum === 7) ? "Weekend" : 
              "Invalid day";
console.log(dayType);  // Output: Weekend


// ============================================================================
//                CONCEPT 4: TERNARY WITH FUNCTION CALLS
// ============================================================================

console.log("\n===== CONCEPT 4: TERNARY WITH FUNCTION CALLS =====");

function greetMorning() {
  return "Good Morning!";
}

function greetEvening() {
  return "Good Evening!";
}

let hour = 9;  // 9 AM
let greeting = (hour < 12) ? greetMorning() : greetEvening();
console.log(greeting);  // Output: Good Morning!


// ============================================================================
//                    INTERVIEW QUESTIONS & ANSWERS
// ============================================================================

console.log("\n===== INTERVIEW QUESTIONS =====");

// INTERVIEW Q1: Find the maximum of three numbers
console.log("\n--- Q1: Maximum of three numbers ---");
let a = 15, b = 25, c = 20;
let max = (a > b) ? ((a > c) ? a : c) : ((b > c) ? b : c);
console.log("Max of " + a + ", " + b + ", " + c + " is: " + max);  // Output: 25

// INTERVIEW Q2: Check if number is positive, negative, or zero
console.log("\n--- Q2: Positive, Negative, or Zero ---");
let number = -5;
let numberType = (number > 0) ? "Positive" : (number < 0) ? "Negative" : "Zero";
console.log("The number is: " + numberType);  // Output: The number is: Negative

// INTERVIEW Q3: Validate if person can apply for job (age & experience)
console.log("\n--- Q3: Job Eligibility Check ---");
let applicantAge = 28;
let yearsExperience = 3;
let jobEligible = (applicantAge >= 25 && yearsExperience >= 2) ? 
                   "Eligible for job" : 
                   "Not eligible for job";
console.log(jobEligible);  // Output: Eligible for job

// INTERVIEW Q4: Calculate discount based on purchase amount
console.log("\n--- Q4: Discount Calculation ---");
let purchaseAmount = 5000;
let discountPercent = (purchaseAmount >= 10000) ? 20 : 
                      (purchaseAmount >= 5000) ? 10 : 
                      (purchaseAmount >= 1000) ? 5 : 
                      0;
let finalPrice = purchaseAmount - (purchaseAmount * discountPercent / 100);
console.log("Original Price: $" + purchaseAmount);
console.log("Discount: " + discountPercent + "%");
console.log("Final Price: $" + finalPrice);  // Output: Final Price: $4500

// INTERVIEW Q5: Check if password is strong
console.log("\n--- Q5: Password Strength Check ---");
let password = "MyP@ss123";
let isStrong = (password.length >= 8 && 
                /[A-Z]/.test(password) && 
                /[0-9]/.test(password) && 
                /[!@#$%^&*]/.test(password)) ? 
               "Strong Password" : 
               "Weak Password";
console.log(isStrong);  // Output: Strong Password

// INTERVIEW Q6: Login verification
console.log("\n--- Q6: Login Verification ---");
let username = "admin";
let password2 = "pass123";
let validUser = "admin";
let validPassword = "pass123";

let loginStatus = (username === validUser && password2 === validPassword) ? 
                  "Login Successful" : 
                  "Login Failed";
console.log(loginStatus);  // Output: Login Successful

// INTERVIEW Q7: Age group classification
console.log("\n--- Q7: Age Group Classification ---");
let personAge = 35;
let ageGroup = (personAge < 13) ? "Child" : 
               (personAge < 18) ? "Teenager" : 
               (personAge < 60) ? "Adult" : 
               "Senior Citizen";
console.log("Age Group: " + ageGroup);  // Output: Age Group: Adult

// INTERVIEW Q8: Leap year check
console.log("\n--- Q8: Leap Year Check ---");
let year = 2024;
let isLeap = ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) ? 
             "Leap Year" : 
             "Not a Leap Year";
console.log(year + " is a " + isLeap);  // Output: 2024 is a Leap Year

// INTERVIEW Q9: Grade assignment based on percentage
console.log("\n--- Q9: Grade Assignment ---");
let percentage = 72;
let studentGrade = (percentage >= 90) ? "A+" : 
                   (percentage >= 80) ? "A" : 
                   (percentage >= 70) ? "B" : 
                   (percentage >= 60) ? "C" : 
                   (percentage >= 50) ? "D" : 
                   "F";
console.log("Grade: " + studentGrade);  // Output: Grade: B

// INTERVIEW Q10: Odd or Even with calculation
console.log("\n--- Q10: Odd/Even with Next Number ---");
let checkNum = 7;
let oddEvenMsg = (checkNum % 2 === 0) ? 
                 "Even - Next odd: " + (checkNum + 1) : 
                 "Odd - Next even: " + (checkNum + 1);
console.log(oddEvenMsg);  // Output: Odd - Next even: 8


// ============================================================================
//                        KEY POINTS TO REMEMBER
// ============================================================================

console.log("\n===== KEY POINTS =====");
console.log("✓ Ternary operator is a shorthand for if-else");
console.log("✓ Syntax: condition ? trueValue : falseValue");
console.log("✓ Can be nested for multiple conditions");
console.log("✓ More readable than multiple if-else for simple decisions");
console.log("✓ Returns a value that can be assigned to a variable");
console.log("✓ Avoid deeply nested ternary for clarity");
console.log("✓ Can call functions in true and false parts");
