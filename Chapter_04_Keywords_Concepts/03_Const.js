// ========================================
// CONST KEYWORD - Properties, Scope & Concepts
// ========================================

// 1. BLOCK SCOPE
// const is block-scoped (similar to let)
function testBlockScope() {
  if (true) {
    const name = "Bob";
    console.log(name); // Output: Bob
  }
  // console.log(name); // Error: name is not defined
}

// 2. MUST BE INITIALIZED
// const requires initialization at declaration
// const x; // Error: Missing initializer in const declaration
const y = 10;
console.log(y); // Output: 10

// 3. CANNOT BE REASSIGNED
// const does NOT allow reassignment
const age = 25;
// age = 30; // Error: Assignment to constant variable

// 4. NO RE-DECLARATION
// const does NOT allow re-declaration in same scope
const city = "New York";
// const city = "Los Angeles"; // Error: Identifier 'city' has already been declared

// But re-declaration in different scopes is allowed:
const country = "USA";
{
  const country = "Canada"; // Different block scope - allowed
  console.log(country); // Output: Canada
}
console.log(country); // Output: USA

// 5. OBJECTS CAN BE MUTATED
// const prevents reassignment, but object properties CAN be modified
const person = {
  name: "Alice",
  age: 30
};
// person = {}; // Error: Assignment to constant variable

person.name = "Bob"; // Allowed - mutating object property
person.age = 31;
console.log(person); // Output: { name: 'Bob', age: 31 }

// 6. ARRAYS CAN BE MUTATED
// const prevents reassignment, but array elements CAN be modified
const colors = ["red", "green", "blue"];
// colors = []; // Error: Assignment to constant variable

colors[0] = "yellow"; // Allowed - modifying array element
colors.push("purple"); // Allowed - adding to array
console.log(colors); // Output: ['yellow', 'green', 'blue', 'purple']

// 7. PREVENTING OBJECT/ARRAY MUTATION
// Use Object.freeze() to prevent mutations
const frozenObj = Object.freeze({
  x: 1,
  y: 2
});
// frozenObj.x = 10; // Silent failure (or error in strict mode)
console.log(frozenObj); // Output: { x: 1, y: 2 }

// 8. TEMPORAL DEAD ZONE (TDZ)
// const is hoisted but not initialized
// console.log(z); // Error: Cannot access 'z' before initialization
const z = 5;
console.log(z); // Output: 5

// 9. CONST IN LOOPS
// const with for...of (creates new binding each iteration)
const arr = [1, 2, 3];
for (const num of arr) {
  console.log(num); // Output: 1, 2, 3
}

// 10. NESTED BLOCK SCOPE
{
  const level1 = "Level 1";
  {
    const level2 = "Level 2";
    console.log(level1); // Output: Level 1
    console.log(level2); // Output: Level 2
  }
  // console.log(level2); // Error: level2 is not defined
  console.log(level1); // Output: Level 1
}

// 11. CONSTANTS FOR CONFIGURATION
const API_KEY = "abc123xyz";
const MAX_RETRIES = 3;
const DATABASE_URL = "mongodb://localhost:27017";
console.log(API_KEY, MAX_RETRIES, DATABASE_URL);

// 12. PRACTICAL EXAMPLE - Working with Objects
const config = {
  theme: "dark",
  language: "en",
  notifications: true
};

// Updating properties is allowed
config.theme = "light";
config.language = "es";
console.log(config); // Output: { theme: 'light', language: 'es', notifications: true }


// ========================================
// KEY PROPERTIES OF CONST:
// ========================================
// ✓ Block-scoped (confined to nearest enclosing block)
// ✓ Cannot be re-declared in same scope
// ✓ Cannot be reassigned (constant reference)
// ✓ MUST be initialized at declaration
// ✓ Hoisted but not initialized (Temporal Dead Zone)
// ✓ Object/Array contents CAN be mutated
// ✓ Does NOT create property on global object
// ✓ Recommended for modern JavaScript (ES6+)
// ✓ Ideal for constants, configuration, and immutable references
// ✓ Use Object.freeze() for true immutability
