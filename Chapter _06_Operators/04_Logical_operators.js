/*
╔═════════════════════════════════════════════════════════════════════════════╗
║                       LOGICAL OPERATORS IN JAVASCRIPT                       ║
╚═════════════════════════════════════════════════════════════════════════════╝

Logical operators are used to combine or reverse boolean values. JavaScript has
3 main logical operators:

1. && (AND) - Returns true only if ALL operands are truthy
2. || (OR) - Returns true if AT LEAST ONE operand is truthy
3. ! (NOT) - Reverses the boolean value

CRITICAL CONCEPT: Short-circuit evaluation
- && stops evaluating if it finds a falsy value
- || stops evaluating if it finds a truthy value

IMPORTANT: Logical operators don't always return boolean!
- && returns the first falsy value or the last value if all are truthy
- || returns the first truthy value or the last value if all are falsy
*/

// ═══════════════════════════════════════════════════════════════════════════
// 1. LOGICAL AND (&&) OPERATOR
// ═══════════════════════════════════════════════════════════════════════════

console.log("--- LOGICAL AND (&&) OPERATOR ---");

// Basic boolean operations
console.log(true && true); // Output: true
console.log(true && false); // Output: false
console.log(false && true); // Output: false
console.log(false && false); // Output: false

// Number operations (truthy/falsy)
console.log(5 && 10); // Output: 10 (both truthy, returns last value)
console.log(0 && 10); // Output: 0 (first is falsy, returns first falsy)
console.log(5 && 0); // Output: 0 (both checked, returns first falsy)
console.log(5 && 10 && 15); // Output: 15 (all truthy, returns last)

// String operations
console.log("hello" && "world"); // Output: "world" (both truthy, returns last)
console.log("" && "world"); // Output: "" (first is falsy, returns first)
console.log("hello" && ""); // Output: "" (second is falsy, returns falsy)

// CRITICAL: AND returns actual values, not just boolean!
console.log(5 && 10); // Output: 10 (NOT true)
console.log(0 && 10); // Output: 0 (NOT false)

// INTERVIEW TIP: Short-circuit evaluation
// If left operand is falsy, right operand is NOT evaluated
let x = 0;
let result = x && console.log("This won't print"); // Right side not executed
console.log(result); // Output: 0

// Chaining AND operators
console.log(1 && 2 && 3 && 4); // Output: 4 (returns last value if all truthy)
console.log(1 && 0 && 3 && 4); // Output: 0 (returns first falsy)

// WITH COMPARISON OPERATORS
console.log(5 > 3 && 10 > 5); // Output: true (both comparisons are true)
console.log(5 > 3 && 10 < 5); // Output: false (second comparison is false)
console.log(5 < 3 && 10 > 5); // Output: false (first comparison is false)

// TRICKY: Mixing types
console.log(5 && "hello" && true && 0); // Output: 0 (stops at first falsy)
console.log(5 && "hello" && true && 10); // Output: 10 (all truthy)

console.log("\n");

// ═══════════════════════════════════════════════════════════════════════════
// 2. LOGICAL OR (||) OPERATOR
// ═══════════════════════════════════════════════════════════════════════════

console.log("--- LOGICAL OR (||) OPERATOR ---");

// Basic boolean operations
console.log(true || true); // Output: true
console.log(true || false); // Output: true
console.log(false || true); // Output: true
console.log(false || false); // Output: false

// Number operations (truthy/falsy)
console.log(5 || 10); // Output: 5 (first is truthy, returns first truthy)
console.log(0 || 10); // Output: 10 (first is falsy, returns next truthy)
console.log(0 || 0); // Output: 0 (both falsy, returns last value)
console.log(5 || 10 || 15); // Output: 5 (returns first truthy)

// String operations
console.log("hello" || "world"); // Output: "hello" (first is truthy)
console.log("" || "world"); // Output: "world" (first falsy, returns next)
console.log("" || "" || "third"); // Output: "third" (returns first truthy)

// CRITICAL: OR returns actual values, not just boolean!
console.log(5 || 10); // Output: 5 (NOT true)
console.log(0 || 10); // Output: 10 (NOT true)

// INTERVIEW TIP: Short-circuit evaluation
// If left operand is truthy, right operand is NOT evaluated
let count = 5;
result = count || console.log("This won't print"); // Right side not executed
console.log(result); // Output: 5

// Chaining OR operators
console.log(0 || false || null || 5); // Output: 5 (returns first truthy)
console.log(0 || false || null || undefined); // Output: undefined (all falsy)

// WITH COMPARISON OPERATORS
console.log(5 > 10 || 10 > 5); // Output: true (second comparison is true)
console.log(5 > 10 || 10 < 5); // Output: false (both comparisons are false)

// COMMON PATTERN: Default value assignment
let userInput = null;
let defaultValue = "Guest";
let user = userInput || defaultValue;
console.log(user); // Output: "Guest"

let userInput2 = "John";
user = userInput2 || defaultValue;
console.log(user); // Output: "John"

// TRICKY: Mixing types
console.log(0 || false || "hello" || true); // Output: "hello" (first truthy)
console.log(0 || false || null || undefined); // Output: undefined (all falsy)

console.log("\n");

// ═══════════════════════════════════════════════════════════════════════════
// 3. LOGICAL NOT (!) OPERATOR
// ═══════════════════════════════════════════════════════════════════════════

console.log("--- LOGICAL NOT (!) OPERATOR ---");

// Basic negation of booleans
console.log(!true); // Output: false
console.log(!false); // Output: true

// Negation of truthy/falsy values
console.log(!5); // Output: false (5 is truthy, negated to false)
console.log(!0); // Output: true (0 is falsy, negated to true)
console.log(!"hello"); // Output: false (string is truthy)
console.log(!""); // Output: true (empty string is falsy)
console.log(!null); // Output: true (null is falsy)
console.log(!undefined); // Output: true (undefined is falsy)
console.log(!NaN); // Output: true (NaN is falsy)

// Double NOT (!!) - Convert to boolean
console.log(!!5); // Output: true (convert to boolean)
console.log(!!0); // Output: false
console.log(!!"hello"); // Output: true
console.log(!!""); // Output: false
console.log(!!null); // Output: false
console.log(!!undefined); // Output: false
console.log(!!NaN); // Output: false
console.log(!![]); // Output: true (array is truthy)
console.log(!!{}); // Output: true (object is truthy)

// NOT with comparison operators
console.log(!(5 > 3)); // Output: false (5 > 3 is true, negated to false)
console.log(!(5 < 3)); // Output: true (5 < 3 is false, negated to true)
console.log(!(5 === "5")); // Output: true (5 === "5" is false, negated to true)

// INTERVIEW TIP: Using ! to check falsy
function isValid(value) {
  return !(!value); // Double negation converts to boolean
}
console.log(isValid(5)); // Output: true
console.log(isValid(0)); // Output: false

console.log("\n");

// ═══════════════════════════════════════════════════════════════════════════
// LOGICAL OPERATORS WITH TRUTHY/FALSY VALUES
// ═══════════════════════════════════════════════════════════════════════════

console.log("--- TRUTHY AND FALSY VALUES ---");

// Falsy values: false, 0, -0, 0n, "", null, undefined, NaN
// Everything else is TRUTHY

let falsy = [false, 0, "", null, undefined, NaN];
let truthy = [true, 1, "0", "false", [], {}, "hello"];

// Testing falsy
console.log(!false); // Output: true
console.log(!0); // Output: true
console.log(!""); // Output: true
console.log(!null); // Output: true
console.log(!undefined); // Output: true
console.log(!NaN); // Output: true

// INTERVIEW TIP: "0" and "false" are TRUTHY strings!
console.log(!"0"); // Output: false ("0" is truthy string)
console.log(!"false"); // Output: false ("false" is truthy string)
console.log(![]); // Output: false (array is truthy)
console.log(!{}); // Output: false (object is truthy)

console.log("\n");

// ═══════════════════════════════════════════════════════════════════════════
// COMBINING LOGICAL OPERATORS
// ═══════════════════════════════════════════════════════════════════════════

console.log("--- COMBINING LOGICAL OPERATORS ---");

// AND with OR
console.log(true && false || true); // Output: true (left part is false, then OR with true)
console.log((true && false) || true); // Output: true (same, AND has higher precedence)
console.log(true && (false || true)); // Output: true

// Complex combinations
console.log(5 > 3 && 10 > 5 || 20 < 10); // Output: true
console.log(!(5 > 3 && 10 > 5)); // Output: false
console.log(!5 > 3 && 10 > 5); // Output: false (NOT has highest precedence)

// De Morgan's Laws
console.log(!(true && true)); // Output: false
console.log(!true || !true); // Output: false (equivalent)

console.log(!(true || false)); // Output: false
console.log(!true && !false); // Output: false (equivalent)

console.log("\n");

// ═══════════════════════════════════════════════════════════════════════════
// SHORT-CIRCUIT EVALUATION (CRITICAL CONCEPT)
// ═══════════════════════════════════════════════════════════════════════════

console.log("--- SHORT-CIRCUIT EVALUATION ---");

// AND short-circuit: stops at first falsy
let evaluated = 0;
result = false && ++evaluated; // evaluated is NOT incremented
console.log(evaluated); // Output: 0 (not evaluated)
console.log(result); // Output: false

evaluated = 0;
result = true && ++evaluated; // evaluated IS incremented
console.log(evaluated); // Output: 1 (evaluated)
console.log(result); // Output: 1

// OR short-circuit: stops at first truthy
evaluated = 0;
result = true || ++evaluated; // evaluated is NOT incremented
console.log(evaluated); // Output: 0 (not evaluated)
console.log(result); // Output: true

evaluated = 0;
result = false || ++evaluated; // evaluated IS incremented
console.log(evaluated); // Output: 1 (evaluated)
console.log(result); // Output: 1

// PRACTICAL: Avoiding errors with short-circuit
let user = null;
// This would throw error: user.name
// But this is safe: user && user.name
console.log(user && user.name); // Output: null (user.name not accessed)

user = { name: "John" };
console.log(user && user.name); // Output: "John"

// PRACTICAL: Setting default with short-circuit
let config = null;
let apiUrl = config || "https://api.example.com";
console.log(apiUrl); // Output: "https://api.example.com"

console.log("\n");

// ═══════════════════════════════════════════════════════════════════════════
// INTERVIEW TRICK QUESTIONS
// ═══════════════════════════════════════════════════════════════════════════

console.log("--- INTERVIEW TRICK QUESTIONS ---");

// Question 1: What is the output?
console.log(5 && 10); // Output: 10 (NOT true!)
console.log(0 || 5); // Output: 5 (NOT true!)
console.log(0 && 5); // Output: 0 (NOT false!)

// Question 2: Short-circuit evaluation order
let a = 0;
let b = 1;
result = a || b++;
console.log(result); // Output: 1
console.log(b); // Output: 2 (b was incremented)

// Question 3: Complex expression
let x = 5;
let y = 10;
result = x > 3 && y < 20 || x === "5";
console.log(result); // Output: true (first part is true)

// Question 4: Default values with OR
let userName = "" || "Guest";
console.log(userName); // Output: "Guest"

let userEmail = "john@example.com" || "guest@example.com";
console.log(userEmail); // Output: "john@example.com"

// Question 5: Chaining with AND
result = 1 && 2 && 3;
console.log(result); // Output: 3 (returns last truthy value)

result = 1 && 0 && 3;
console.log(result); // Output: 0 (returns first falsy value)

// Question 6: NOT operator quirks
console.log(!!"0"); // Output: true ("0" is truthy string)
console.log(!"0"); // Output: false
console.log(!!0); // Output: false

// Question 7: Logical operators don't always return boolean!
console.log(typeof (5 && 10)); // Output: "number" (not "boolean")
console.log(typeof (0 || "hello")); // Output: "string" (not "boolean")

console.log("\n");

// ═══════════════════════════════════════════════════════════════════════════
// PRACTICAL EXAMPLES
// ═══════════════════════════════════════════════════════════════════════════

console.log("--- PRACTICAL EXAMPLES ---");

// Example 1: Validation check
function isValidUser(username, password, isAdmin) {
  return username && password && (isAdmin || isAdmin === false);
}
console.log(isValidUser("john", "pass123", true)); // Output: true
console.log(isValidUser("", "pass123", true)); // Output: false

// Example 2: Safe object access
let user1 = { name: "John", address: { city: "NYC" } };
let user2 = null;

console.log(user1 && user1.address && user1.address.city); // Output: "NYC"
console.log(user2 && user2.address && user2.address.city); // Output: null

// Example 3: Optional chaining alternative (pre-ES2020)
function getUserCity(userObj) {
  return userObj && userObj.address && userObj.address.city;
}
console.log(getUserCity({ address: { city: "LA" } })); // Output: "LA"
console.log(getUserCity(null)); // Output: null

// Example 4: Multiple default values
function getConfig(config) {
  let timeout = (config && config.timeout) || 5000;
  let retries = (config && config.retries) || 3;
  return { timeout, retries };
}
console.log(getConfig({ timeout: 10000 })); // Output: { timeout: 10000, retries: 3 }
console.log(getConfig(null)); // Output: { timeout: 5000, retries: 3 }

// Example 5: Conditional function calls
function processData(data, callback) {
  if (data && callback) {
    callback(data);
  }
}
let hasError = false;
let errorHandler = null;
processData("some data", hasError || errorHandler); // Won't call anything

// Example 6: Permission checking
function canDeleteUser(isAdmin, isOwner, isPasswordCorrect) {
  return (isAdmin || isOwner) && isPasswordCorrect;
}
console.log(canDeleteUser(true, false, true)); // Output: true
console.log(canDeleteUser(false, true, true)); // Output: true
console.log(canDeleteUser(false, false, true)); // Output: false
console.log(canDeleteUser(true, false, false)); // Output: false

// Example 7: Range validation
function isValidAge(age) {
  return age && age >= 0 && age <= 150;
}
console.log(isValidAge(25)); // Output: true
console.log(isValidAge(-5)); // Output: false
console.log(isValidAge(null)); // Output: false

// Example 8: All conditions must be true
function meetsCriteria(age, experience, qualification) {
  return age >= 18 && experience >= 2 && qualification !== "";
}
console.log(meetsCriteria(25, 3, "Bachelor")); // Output: true
console.log(meetsCriteria(25, 1, "Bachelor")); // Output: false

// Example 9: At least one condition must be true
function isQualified(hasCertificate, hasExperience, hasEducation) {
  return hasCertificate || hasExperience || hasEducation;
}
console.log(isQualified(false, true, false)); // Output: true
console.log(isQualified(false, false, false)); // Output: false

// Example 10: Nullish coalescing alternative (pre-ES2020)
// OR operator with default values
function getUserDisplayName(user) {
  return (user && user.displayName) || (user && user.firstName) || "Anonymous";
}
console.log(getUserDisplayName({ displayName: "Johnny" })); // Output: "Johnny"
console.log(getUserDisplayName({ firstName: "John" })); // Output: "John"
console.log(getUserDisplayName(null)); // Output: "Anonymous"

console.log("\n");

// ═══════════════════════════════════════════════════════════════════════════
// LOGICAL OPERATORS IN CONTROL FLOW
// ═══════════════════════════════════════════════════════════════════════════

console.log("--- LOGICAL OPERATORS IN CONTROL FLOW ---");

// Using AND for conditional execution
let count = 5;
count > 0 && console.log("Count is positive"); // Output: "Count is positive"

// Using OR for fallback execution
let result1 = null;
result1 || console.log("Result1 is falsy"); // Output: "Result1 is falsy"

// Complex conditional logic
let isLoggedIn = true;
let hasPermission = true;
let isBlocked = false;

if (isLoggedIn && hasPermission && !isBlocked) {
  console.log("Access granted"); // Output: "Access granted"
}

// Ternary with logical operators
let age1 = 25;
let status = age1 >= 18 ? "Adult" : "Minor";
console.log(status); // Output: "Adult"

let age2 = 15;
status = age2 >= 18 ? "Adult" : age2 >= 13 ? "Teen" : "Child";
console.log(status); // Output: "Teen"

// While loop with logical operators
let num = 0;
while (num < 5 && num >= 0) {
  num++;
}
console.log(num); // Output: 5

console.log("\n");

// ═══════════════════════════════════════════════════════════════════════════
// COMMON MISTAKES AND HOW TO FIX THEM
// ═══════════════════════════════════════════════════════════════════════════

console.log("--- COMMON MISTAKES ---");

// Mistake 1: Confusing return value with boolean
let result2 = 5 && 10;
console.log(result2); // Output: 10 (not true)
if (result2) {
  console.log("Truthy"); // This will print
}

// Mistake 2: Using OR for type checking (unreliable)
let value = 0;
if (value || typeof value === "number") {
  console.log("Is number"); // This will print
}
// Better: use explicit type check
if (typeof value === "number") {
  console.log("Is number"); // This will print
}

// Mistake 3: Not considering falsy values in default assignment
let setting = 0; // 0 is a valid setting
let defaultSetting = setting || 100; // WRONG: will use 100 instead of 0
console.log(defaultSetting); // Output: 100 (should be 0)

// Better way with nullish coalescing (ES2020):
// let defaultSetting = setting ?? 100; // Checks for null/undefined only

// Mistake 4: Forgetting short-circuit evaluation
let obj = null;
let name = obj && obj.name || "Guest"; // Safe and works
console.log(name); // Output: "Guest"

// Mistake 5: Operator precedence confusion
let result3 = !5 > 3; // This is !(5) > 3, not !(5 > 3)
console.log(result3); // Output: false
// Because: !5 = false, then false > 3 = false

let result4 = !(5 > 3);
console.log(result4); // Output: false

console.log("\n");

// ═══════════════════════════════════════════════════════════════════════════
// OPERATOR PRECEDENCE WITH LOGICAL OPERATORS
// ═══════════════════════════════════════════════════════════════════════════

console.log("--- OPERATOR PRECEDENCE ---");

// NOT has highest precedence
console.log(!true && false); // Output: false (!true = false, then false && false)

// AND has higher precedence than OR
console.log(true || false && false); // Output: true (false && false = false, then true || false)
console.log((true || false) && false); // Output: false (different result)

// Comparisons have higher precedence than logical operators
console.log(5 > 3 && 10 > 5); // Output: true ((5 > 3) && (10 > 5))

console.log("\n");

// ═══════════════════════════════════════════════════════════════════════════
// REAL-WORLD INTERVIEW SCENARIOS
// ═══════════════════════════════════════════════════════════════════════════

console.log("--- REAL-WORLD SCENARIOS ---");

// Scenario 1: Form validation
function validateForm(name, email, age) {
  return name && name.length > 0 && 
         email && email.includes("@") && 
         age && age >= 18;
}
console.log(validateForm("John", "john@example.com", 25)); // Output: true
console.log(validateForm("John", "johnexample.com", 25)); // Output: false

// Scenario 2: API response handling
function handleResponse(response) {
  return response && response.data && response.data.items && response.data.items.length > 0;
}
console.log(handleResponse({ data: { items: [1, 2, 3] } })); // Output: true
console.log(handleResponse(null)); // Output: false

// Scenario 3: User authentication with roles
function canAccessAdmin(user) {
  return user && 
         user.isAuthenticated && 
         (user.role === "admin" || user.role === "superadmin");
}
console.log(canAccessAdmin({ isAuthenticated: true, role: "admin" })); // Output: true
console.log(canAccessAdmin({ isAuthenticated: true, role: "user" })); // Output: false

// Scenario 4: Complex business logic
function shouldProcessOrder(order) {
  return order && 
         order.items && order.items.length > 0 &&
         order.customer && order.customer.id &&
         order.total > 0 && order.total <= 10000 &&
         !order.cancelled;
}
console.log(shouldProcessOrder({
  items: [{ id: 1, price: 100 }],
  customer: { id: 123 },
  total: 100,
  cancelled: false
})); // Output: true

// Scenario 5: Conditional API call
function fetchUserData(userId, forceRefresh) {
  if (userId && (forceRefresh || !hasCachedData(userId))) {
    console.log("Fetching from API...");
    // Simulate fetch
    return true;
  }
  return false;
}

function hasCachedData(id) {
  // Simulate cache check
  return false;
}
console.log(fetchUserData(123, false)); // Output: true

console.log("\n");
