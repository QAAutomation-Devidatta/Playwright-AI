# JavaScript Engine

## What is a JavaScript Engine?

A JavaScript engine is a computer program that executes JavaScript code. It interprets or compiles JavaScript source code and converts it into machine-executable code. Every browser and server-side JavaScript runtime (like Node.js) has a JavaScript engine.

## How JavaScript Engine Works

### 1. **Parsing**
- The engine reads the JavaScript code as plain text
- It performs **lexical analysis** to break the code into tokens
- It performs **syntax analysis** to check if the code follows JavaScript grammar rules
- Creates an **Abstract Syntax Tree (AST)**

### 2. **Compilation**
- The code is compiled into **intermediate code** or **bytecode**
- Most modern engines use **JIT (Just-In-Time) compilation**
- Hot code paths are compiled to machine code for faster execution

### 3. **Execution**
- The compiled code is executed by the JavaScript engine
- Memory is allocated for variables and functions
- The engine manages the call stack and memory heap

## Popular JavaScript Engines

### 1. **V8 Engine**
- **Used by**: Google Chrome, Node.js, Electron
- **Written in**: C++
- **Features**:
  - JIT compilation
  - Optimized for performance
  - Used in most modern JavaScript applications
- **Timeline**: Introduced in 2008

### 2. **SpiderMonkey**
- **Used by**: Mozilla Firefox
- **Written in**: C/C++
- **Features**:
  - First JavaScript engine
  - Incremental garbage collection
  - Support for ECMAScript standards

### 3. **JavaScriptCore (JSC)**
- **Used by**: Apple Safari, WebKit
- **Written in**: C++
- **Features**:
  - Optimized for Apple devices
  - Efficient memory usage
  - Fast startup time

### 4. **Chakra**
- **Used by**: Microsoft Edge (older versions)
- **Written in**: C++
- **Features**:
  - JIT compilation
  - Supports TypeScript and JavaScript

### 5. **QuickJS**
- **Used by**: Lightweight embedded systems
- **Written in**: C
- **Features**:
  - Small footprint
  - Fast execution
  - Suitable for IoT and embedded devices

## JavaScript Engine Architecture

```
┌─────────────────────────────────────┐
│     JavaScript Source Code          │
└────────────────┬────────────────────┘
                 │
                 ▼
        ┌─────────────────┐
        │    Parser       │ (Lexical & Syntax Analysis)
        └────────┬────────┘
                 │
                 ▼
        ┌─────────────────┐
        │  AST (AST)      │ (Abstract Syntax Tree)
        └────────┬────────┘
                 │
                 ▼
        ┌─────────────────┐
        │   Compiler      │ (JIT Compilation)
        │   (Interpreter) │
        └────────┬────────┘
                 │
                 ▼
        ┌─────────────────┐
        │ Machine Code    │
        │ (Bytecode)      │
        └────────┬────────┘
                 │
                 ▼
        ┌─────────────────┐
        │   Execution     │ (Run on CPU)
        │  & Output       │
        └─────────────────┘
```

## Key Concepts

### 1. **Call Stack**
- Stores function calls in LIFO (Last-In-First-Out) order
- Limited size; stack overflow occurs if exceeded
- Executes synchronous code

```javascript
function a() {
    console.log("Function A");
    b();
}

function b() {
    console.log("Function B");
}

a();
// Call Stack: a() -> b() -> console.log()
```

### 2. **Heap**
- Dynamic memory allocation for objects and arrays
- Not organized in any particular order
- Garbage collection automatically frees unused memory

```javascript
let obj = { name: "John" };  // Allocated in Heap
let num = 42;                 // Allocated in Stack
```

### 3. **Callback Queue & Event Loop**
- Callback Queue stores callbacks from async operations
- Event Loop checks if Call Stack is empty, then pushes callbacks from Queue to Stack
- Enables asynchronous programming

```javascript
console.log("Start");

setTimeout(() => {
    console.log("Async Operation");
}, 0);

console.log("End");

// Output:
// Start
// End
// Async Operation
```

### 4. **Garbage Collection**
- Automatically removes unreferenced objects from memory
- Prevents memory leaks
- Different strategies: Mark-and-Sweep, Reference Counting, Generational Collection

## V8 Engine Execution Process (Example)

```
1. Parsing Phase
   JavaScript Code → Tokenization → Syntax Analysis → AST

2. Compilation Phase
   AST → Baseline Compilation (Simple JIT) 
       → Optimized Compilation (Full JIT) for Hot Code
   
3. Execution Phase
   Machine Code → CPU Execution → Results
```

## Performance Optimization Techniques

### 1. **JIT Compilation**
- Compiles frequently used code to machine code
- Trades compilation time for faster execution
- Most modern engines use this approach

### 2. **Inline Caching**
- Caches property lookups to speed up object property access
- Reduces lookup time for repeated accesses

### 3. **Hidden Classes**
- V8 uses hidden classes to optimize object property access
- Objects with same properties share optimized code paths

### 4. **Code Specialization**
- Functions optimized based on the types of arguments passed
- Removes type checks for known data types

## Example: How V8 Executes Code

```javascript
function add(a, b) {
    return a + b;
}

// First call - Baseline Compilation
add(1, 2);           // Interpreted

// Repeated calls - Optimized
add(3, 4);           // JIT Compiled & Optimized
add(5, 6);           // Uses cached optimized version
add("a", "b");       // Might cause deoptimization if type changes
```

## Browser vs Node.js Engine

| Aspect | Browser | Node.js |
|--------|---------|---------|
| Engine | V8 (Chrome), JSC (Safari), Chakra (Edge) | V8 |
| APIs | DOM, Window, localStorage | fs, http, path |
| Globals | window, document | global, __dirname |
| Modules | ES6 Modules, CommonJS | CommonJS, ES6 |

## Modern JavaScript Engine Features

1. **Streaming Parsing** - Parse while downloading
2. **Lazy Compilation** - Compile only used functions
3. **Off-Main-Thread Compilation** - Compile without blocking UI
4. **Tiered Compilation** - Multiple compilation levels
5. **Predictable GC** - Scheduled garbage collection

## References

- [V8 Official Documentation](https://v8.dev/)
- [MDN: JavaScript Engine](https://developer.mozilla.org/en-US/docs/)
- [How JavaScript Works by Philip Roberts](https://www.youtube.com/watch?v=8aGhZQkoFbQ)
