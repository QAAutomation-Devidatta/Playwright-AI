// ========================================
// LET KEYWORD - Properties, Scope & Concepts
// ========================================

// 1. BLOCK SCOPE
// let is block-scoped (confined to nearest enclosing block)
function testBlockScope() {
  if (true) {
    let name = "Alice";
    console.log(name); // Output: Alice
  }
  // console.log(name); // Error: name is not defined (block scope)
}

// 2. LOOP SCOPE
// let creates a new binding for each iteration
for (let i = 0; i < 3; i++) {
  // let i is scoped to each iteration
}
// console.log(i); // Error: i is not defined

// Compare with var:
for (var j = 0; j < 3; j++) {
  // var j is function-scoped
}
console.log(j); // Output: 3 (j still accessible)

// 3. NO RE-DECLARATION
// let does NOT allow re-declaration in same scope
let age = 25;
// let age = 30; // Error: Identifier 'age' has already been declared

// But re-declaration is allowed in different scopes:
let city = "New York";
{
  let city = "Los Angeles"; // Different block scope - allowed
  console.log(city); // Output: Los Angeles
}
console.log(city); // Output: New York

// 4. REASSIGNMENT ALLOWED
// let allows reassignment
let country = "USA";
country = "Canada"; // Reassignment
console.log(country); // Output: Canada

// 5. TEMPORAL DEAD ZONE (TDZ)
// let is hoisted but not initialized (creates TDZ)
// console.log(x); // Error: Cannot access 'x' before initialization
let x = 5;
console.log(x); // Output: 5

// 6. BLOCK SCOPE ISOLATION
function outerFunc() {
  let outerVar = "outer";
  
  {
    let blockVar = "block";
    console.log(outerVar); // Output: outer (accessible)
    console.log(blockVar); // Output: block
  }
  
  // console.log(blockVar); // Error: blockVar is not defined
  console.log(outerVar); // Output: outer (still accessible)
}

// 7. DEFAULT INITIALIZATION
let uninitializedLet; // Without value
console.log(uninitializedLet); // Output: undefined

// 8. MULTIPLE DECLARATIONS IN DIFFERENT BLOCKS
let a = 1;
{
  let a = 2; // Different scope
  console.log(a); // Output: 2
}
console.log(a); // Output: 1

// 9. NESTED BLOCK SCOPE
{
  let level1 = "Level 1";
  {
    let level2 = "Level 2";
    console.log(level1); // Output: Level 1
    console.log(level2); // Output: Level 2
  }
  // console.log(level2); // Error: level2 is not defined
  console.log(level1); // Output: Level 1
}



// ========================================
// KEY PROPERTIES OF LET:
// ========================================
// ✓ Block-scoped (confined to nearest enclosing block)
// ✓ Cannot be re-declared in same scope
// ✓ Can be reassigned
// ✓ Hoisted but not initialized (Temporal Dead Zone)
// ✓ Does NOT create property on global object
// ✓ Recommended for modern JavaScript (ES6+)
// ✓ Ideal for loop variables and block-scoped logic
