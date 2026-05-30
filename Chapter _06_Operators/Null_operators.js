// ============================================================================
//                    NULL OPERATORS GUIDE
// ============================================================================

// WHAT ARE NULL OPERATORS?
// Null operators are used to safely work with null, undefined, and missing values.
// They help prevent errors when accessing properties or calling methods on null/undefined.

// Main Null Operators:
// 1. ?? (Nullish Coalescing)  - Returns right if left is null/undefined
// 2. ?. (Optional Chaining)   - Safely access properties/methods
// 3. ?.[] (Optional Bracket)  - Safely access array elements
// 4. ?() (Optional Call)      - Safely call functions


// ============================================================================
//     CONCEPT 1: NULLISH COALESCING OPERATOR (??)
// ============================================================================

console.log("===== CONCEPT 1: NULLISH COALESCING (??) =====");

// The ?? operator returns the right operand when the left is null or undefined
// It ignores 0, false, "" (empty string) - these are considered valid values

// Simple Example 1: Provide default value
let username = null;
let displayName = username ?? "Guest";
console.log("Username: " + displayName);  // Output: Guest

// Simple Example 2: With undefined
let age = undefined;
let displayAge = age ?? 18;
console.log("Age: " + displayAge);  // Output: 18

// Simple Example 3: Does NOT replace falsy values
let count = 0;
let defaultCount = count ?? 10;
console.log("Count: " + defaultCount);  // Output: 0 (NOT 10!)

let flag = false;
let defaultFlag = flag ?? true;
console.log("Flag: " + defaultFlag);  // Output: false (NOT true!)

// Simple Example 4: Empty string is valid
let text = "";
let displayText = text ?? "No text";
console.log("Text: '" + displayText + "'");  // Output: '' (empty string)

// Difference from || (Logical OR)
console.log("\n--- ?? vs || ---");
console.log("0 ?? 10 = " + (0 ?? 10));        // 0 (nullish coalescing)
console.log("0 || 10 = " + (0 || 10));        // 10 (logical OR)

console.log("false ?? true = " + (false ?? true));  // false
console.log("false || true = " + (false || true));  // true

console.log("'' ?? 'default' = " + ('' ?? 'default'));  // ''
console.log("'' || 'default' = " + ('' || 'default'));  // 'default'


// ============================================================================
//     CONCEPT 2: OPTIONAL CHAINING OPERATOR (?.)
// ============================================================================

console.log("\n===== CONCEPT 2: OPTIONAL CHAINING (?.) =====");

// The ?. operator allows safe access to nested properties
// Returns undefined if the property doesn't exist

// Simple Example 1: Access nested property safely
let user = {
  name: "Alice",
  address: {
    city: "New York"
  }
};

console.log("City: " + user?.address?.city);  // Output: New York

// Simple Example 2: Property doesn't exist
let user2 = {
  name: "Bob"
  // address doesn't exist
};

console.log("City: " + user2?.address?.city);  // Output: undefined (NO ERROR!)

// Simple Example 3: Working with null
let user3 = null;
console.log("Name: " + user3?.name);  // Output: undefined (NO ERROR!)

// Simple Example 4: Array access with optional chaining
let items = [1, 2, 3];
console.log("First item: " + items?.[0]);  // Output: 1

let items2 = null;
console.log("First item: " + items2?.[0]);  // Output: undefined (NO ERROR!)

// Simple Example 5: Function call with optional chaining
let obj = {
  greet: function() {
    return "Hello!";
  }
};

console.log("Greeting: " + obj?.greet?.());  // Output: Hello!

let obj2 = {
  // greet doesn't exist
};

console.log("Greeting: " + obj2?.greet?.());  // Output: undefined (NO ERROR!)


// ============================================================================
//   CONCEPT 3: COMBINING ?? AND ?. (Nullish + Optional Chaining)
// ============================================================================

console.log("\n===== CONCEPT 3: COMBINING ?? AND ?. =====");

// Use ?? after ?. to provide default values
let person = null;
let city = person?.address?.city ?? "Unknown";
console.log("City: " + city);  // Output: Unknown

let person2 = {
  address: {
    city: "Paris"
  }
};
let city2 = person2?.address?.city ?? "Unknown";
console.log("City: " + city2);  // Output: Paris


// ============================================================================
//     CONCEPT 4: OPTIONAL BRACKET NOTATION (?.[])
// ============================================================================

console.log("\n===== CONCEPT 4: OPTIONAL BRACKET NOTATION (?.[]) =====");

// Access array elements or object properties safely
let arr = [10, 20, 30];
console.log("Element: " + arr?.[1]);  // Output: 20

let arr2 = null;
console.log("Element: " + arr2?.[1]);  // Output: undefined (NO ERROR!)

// Works with objects too
let student = { math: 90, english: 85 };
console.log("Math score: " + student?.["math"]);  // Output: 90

let student2 = null;
console.log("Math score: " + student2?.["math"]);  // Output: undefined


// ============================================================================
//     CONCEPT 5: OPTIONAL FUNCTION CALL (?.)
// ============================================================================

console.log("\n===== CONCEPT 5: OPTIONAL FUNCTION CALL =====");

// Safely call methods/functions
let calculator = {
  add: function(a, b) {
    return a + b;
  }
};

console.log("Sum: " + calculator?.add?.(5, 3));  // Output: Sum: 8

let calculator2 = null;
console.log("Sum: " + calculator2?.add?.(5, 3));  // Output: undefined (NO ERROR!)

// Method doesn't exist
let calculator3 = {
  // add doesn't exist
};

console.log("Sum: " + calculator3?.add?.(5, 3));  // Output: undefined


// ============================================================================
//                  INTERVIEW QUESTIONS & ANSWERS
// ============================================================================

console.log("\n===== INTERVIEW QUESTIONS =====");

// INTERVIEW Q1: Safe object property access
console.log("\n--- Q1: Safe Property Access ---");
function getUserEmail(user) {
  return user?.email ?? "No email found";
}

let user_1 = { name: "John", email: "john@example.com" };
let user_2 = { name: "Jane" };
let user_3 = null;

console.log("User 1 email: " + getUserEmail(user_1));  // john@example.com
console.log("User 2 email: " + getUserEmail(user_2));  // No email found
console.log("User 3 email: " + getUserEmail(user_3));  // No email found

// INTERVIEW Q2: Deep nested object access
console.log("\n--- Q2: Deep Nested Object Access ---");
let company = {
  name: "TechCorp",
  departments: {
    engineering: {
      manager: "Alice",
      employees: 50
    }
  }
};

console.log("Manager: " + company?.departments?.engineering?.manager);  // Alice
console.log("Sales manager: " + company?.departments?.sales?.manager ?? "No sales dept");  // No sales dept

// INTERVIEW Q3: Array of objects access
console.log("\n--- Q3: Array of Objects Access ---");
let products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Phone", price: 500 }
];

console.log("First product: " + products?.[0]?.name);  // Laptop
console.log("Third product: " + products?.[2]?.name ?? "Product not found");  // Product not found

let products2 = null;
console.log("First product: " + products2?.[0]?.name ?? "No products");  // No products

// INTERVIEW Q4: Safe function callback
console.log("\n--- Q4: Safe Function Callback ---");
function processData(data, callback) {
  let result = data * 2;
  callback?.(result);  // Call callback only if it exists
  return result;
}

let result1 = processData(5, function(val) {
  console.log("  Callback called with: " + val);  // Callback called with: 10
});

let result2 = processData(3, null);  // No error, callback not called
console.log("  Result without callback: " + result2);  // Result without callback: 6

// INTERVIEW Q5: Nullish coalescing with multiple operators
console.log("\n--- Q5: Multiple Nullish Coalescing ---");
let config = {
  timeout: 0,
  retries: null,
  debug: undefined
};

console.log("Timeout: " + (config.timeout ?? 5000));  // 0 (valid)
console.log("Retries: " + (config.retries ?? 3));     // 3
console.log("Debug: " + (config.debug ?? false));     // false

// INTERVIEW Q6: Safe array method call
console.log("\n--- Q6: Safe Array Method Call ---");
function getFirstElement(arr) {
  return arr?.[0] ?? "Array is empty or null";
}

console.log("First: " + getFirstElement([1, 2, 3]));  // 1
console.log("First: " + getFirstElement([]));          // Array is empty or null
console.log("First: " + getFirstElement(null));        // Array is empty or null

// INTERVIEW Q7: API response handling
console.log("\n--- Q7: API Response Handling ---");
function displayUserInfo(response) {
  let username = response?.data?.user?.name ?? "Anonymous";
  let email = response?.data?.user?.email ?? "N/A";
  let city = response?.data?.user?.address?.city ?? "Unknown";
  
  return {
    username: username,
    email: email,
    city: city
  };
}

let response1 = {
  data: {
    user: {
      name: "Alice",
      email: "alice@example.com",
      address: { city: "NYC" }
    }
  }
};

let response2 = {
  data: {
    user: {
      name: "Bob"
      // email and address missing
    }
  }
};

let response3 = null;

console.log("Response 1: ", displayUserInfo(response1));  // Full info
console.log("Response 2: ", displayUserInfo(response2));  // Partial info with defaults
console.log("Response 3: ", displayUserInfo(response3));  // All defaults

// INTERVIEW Q8: Method delegation with optional chaining
console.log("\n--- Q8: Safe Method Delegation ---");
let handler = {
  process: function(data) {
    return "Processing: " + data;
  }
};

function execute(obj, data) {
  return obj?.process?.(data) ?? "Handler not available";
}

console.log(execute(handler, "test"));  // Processing: test
console.log(execute(null, "test"));     // Handler not available
console.log(execute({}, "test"));       // Handler not available

// INTERVIEW Q9: Event listener with optional chaining
console.log("\n--- Q9: Safe Event Listener ---");
let element = {
  addEventListener: function(event, handler) {
    console.log("  Listener added for: " + event);
  }
};

let element2 = null;

element?.addEventListener?.("click", function() { });
element2?.addEventListener?.("click", function() { });  // No error

// INTERVIEW Q10: Conditional property access
console.log("\n--- Q10: Conditional Property Access ---");
function getUserRole(user, permission) {
  return user?.roles?.[permission] ?? "Guest";
}

let admin = {
  roles: {
    admin: "Full Access",
    editor: "Edit Only",
    viewer: "View Only"
  }
};

console.log("Admin role: " + getUserRole(admin, "admin"));    // Full Access
console.log("Viewer role: " + getUserRole(admin, "viewer"));  // View Only
console.log("Owner role: " + getUserRole(admin, "owner"));    // Guest

let guest = null;
console.log("Guest role: " + getUserRole(guest, "admin"));    // Guest

// INTERVIEW Q11: Chaining with method results
console.log("\n--- Q11: Chaining with Method Results ---");
let database = {
  connect: function() {
    return {
      query: function() {
        return {
          execute: function() {
            return "Data fetched";
          }
        };
      }
    };
  }
};

let result_11 = database?.connect?.()?.query?.()?.execute?.() ?? "Connection failed";
console.log(result_11);  // Data fetched

let database2 = null;
let result_12 = database2?.connect?.()?.query?.()?.execute?.() ?? "Connection failed";
console.log(result_12);  // Connection failed

// INTERVIEW Q12: Practical form validation
console.log("\n--- Q12: Form Validation ---");
function getFormValue(form, fieldName, defaultValue) {
  return form?.fields?.[fieldName]?.value ?? defaultValue ?? "";
}

let form = {
  fields: {
    username: { value: "john_doe" },
    password: { value: "" },
    email: { value: null }
  }
};

console.log("Username: " + getFormValue(form, "username"));        // john_doe
console.log("Password: " + getFormValue(form, "password"));        // (empty)
console.log("Email: " + getFormValue(form, "email", "N/A"));       // N/A
console.log("Phone: " + getFormValue(form, "phone", "000-0000")); // 000-0000


// ============================================================================
//                  COMPARISON WITH ALTERNATIVES
// ============================================================================

console.log("\n===== COMPARISON: ?? vs || vs AND vs OR =====");

// Using ?? (Nullish Coalescing)
console.log("\n--- Using Nullish Coalescing (??) ---");
let value1 = 0;
console.log("?? : " + (value1 ?? "default"));  // 0

// Using || (Logical OR)
console.log("\n--- Using Logical OR (||) ---");
console.log("|| : " + (value1 || "default"));  // default

// Optional Chaining vs Traditional checks
console.log("\n--- Avoiding Traditional Null Checks ---");
let data = {
  user: {
    profile: {
      avatar: "profile.jpg"
    }
  }
};

// Traditional way (verbose)
let avatar1 = data && data.user && data.user.profile && data.user.profile.avatar ? data.user.profile.avatar : "default.jpg";
console.log("Traditional: " + avatar1);

// With optional chaining (clean)
let avatar2 = data?.user?.profile?.avatar ?? "default.jpg";
console.log("With ?.: " + avatar2);


// ============================================================================
//                    KEY POINTS TO REMEMBER
// ============================================================================

console.log("\n===== KEY TAKEAWAYS =====");
console.log("✓ ?? (Nullish Coalescing) - Only checks for null/undefined");
console.log("✓ ?. (Optional Chaining) - Safely access nested properties/methods");
console.log("✓ ?.[] - Safe bracket notation access");
console.log("✓ ?.() - Safe function call");
console.log("✓ ?? ignores 0, false, '' (empty string) - these are valid");
console.log("✓ || replaces all falsy values (0, false, '', null, undefined)");
console.log("✓ Combine ?? and ?. for powerful null-safe operations");
console.log("✓ Prevents 'Cannot read property of null/undefined' errors");
console.log("✓ Makes code cleaner and more readable");
console.log("✓ Returns undefined (not error) when chain breaks");
