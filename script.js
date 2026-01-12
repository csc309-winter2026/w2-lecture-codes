console.log("Hello, World!"); // Hello, World!

var a = 1;
a; // 1
typeof a; // number

var b = "hi";
console.log(b, typeof b, typeof typeof b); // hi string string

1239 + "hi"; // 1239hi
"hi" + false; // hifalse
"5" * 3; // 15
"10" - "4"; // 6
"10" / "2"; // 5

var c = 1;
c = "hi";
typeof c; // string

var obj = { name: "Alice", age: 30, nest: {} };
obj.balance = 1230;
obj["age"]; // 30
obj; // { name: 'Alice', age: 30, nest: {}, balance: 1230 }
obj.car; // undefined

var marks = { csc309: null, csc108: 80 };
console.log(marks.csc108, typeof marks.csc108);  // 80 number
console.log(marks.csc309, typeof marks.csc309);  // null object
console.log(marks.avg, typeof marks.avg);      // undefined undefined

typeof null // object

var arr = [1, "hi", false];
typeof arr // object
arr[1] // hi
arr.length  // 3
arr[2000] // undefined
arr[-10] // undefined
arr[-10] = "hello";
arr // [ 1, 'hi', false, '-10': 'hello' ]

function greet(name) {
    return "Hello, " + name + "!";
}
greet("Bob") // Hello, Bob!
greet() // Hello, undefined!
greet(1, 2, 3) // Hello, 1!

class Car {
  constructor(brand) {
    this.brand = brand;
  }
}
var myCar = new Car("Toyota");
typeof Car // function
typeof myCar // object
myCar // Car { brand: 'Toyota' }
myCar instanceof Car // true

1 == "1" // true
0 == false // true
undefined == null // true
[] == false // true
[[]] == false // true
[[]] == [] // false

1 === "1" // false
[] === false // false
undefined === null // false

var arr = [1, 2, "hello"];
for (var x of arr)
    console.log(x)
// 1
// 2
// hello

var arr = [1, 2, "hello"];
for (var x in arr)
    console.log(x)
// 0
// 1
// 2

function f(){
  // var x; // hoisting
  console.log(x)
  var x = 10;
  console.log(x)
}
f()
// undefined
// 10
// undefined

function f2(){
  console.log(x)
  if (false) {
    var x = 10;
  }
}
f2()
// undefined
// undefined

function f3(){
  console.log(x)
  if (false) {
    let x = 10;
  }
}
f3()
// Command failed: node /tmp/vscode-ext-mUibeC/venkat.js
// /tmp/vscode-ext-mUibeC/venkat.js:2
//   console.log(x)
//               ^
// ReferenceError: x is not defined
//     at f3 (/tmp/vscode-ext-mUibeC/venkat.js:2:15)
//     at Object.<anonymous> (/tmp/vscode-ext-mUibeC/venkat.js:7:13)
//     at Module._compile (node:internal/modules/cjs/loader:1761:14)
//     at Object..js (node:internal/modules/cjs/loader:1893:10)
//     at Module.load (node:internal/modules/cjs/loader:1481:32)
//     at Module._load (node:internal/modules/cjs/loader:1300:12)
//     at TracingChannel.traceSync (node:diagnostics_channel:328:14)
//     at wrapModuleLoad (node:internal/modules/cjs/loader:245:24)
//     at Module.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:154:5)
//     at node:internal/main/run_main_module:33:47
// Node.js v24.11.1

let p = 2;
let p = 3;
// Command failed: node /tmp/vscode-ext-JnCzxX/venkat.js
// /tmp/vscode-ext-JnCzxX/venkat.js:2
// console.log(let p = 3;);
//             ^^^
// SyntaxError: missing ) after argument list
//     at wrapSafe (node:internal/modules/cjs/loader:1692:18)
//     at Module._compile (node:internal/modules/cjs/loader:1735:20)
//     at Object..js (node:internal/modules/cjs/loader:1893:10)
//     at Module.load (node:internal/modules/cjs/loader:1481:32)
//     at Module._load (node:internal/modules/cjs/loader:1300:12)
//     at TracingChannel.traceSync (node:diagnostics_channel:328:14)
//     at wrapModuleLoad (node:internal/modules/cjs/loader:245:24)
//     at Module.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:154:5)
//     at node:internal/main/run_main_module:33:47
// Node.js v24.11.1

let p = 3;
p = "hello";
console.log(p);  // hello


const name = "Charlie";
name = "Dave"
name
// Command failed: node /tmp/vscode-ext-8kRbYH/venkat.js
// /tmp/vscode-ext-8kRbYH/venkat.js:2
// name = "Dave"
//      ^
// TypeError: Assignment to constant variable.
//     at Object.<anonymous> (/tmp/vscode-ext-8kRbYH/venkat.js:2:6)
//     at Module._compile (node:internal/modules/cjs/loader:1761:14)
//     at Object..js (node:internal/modules/cjs/loader:1893:10)
//     at Module.load (node:internal/modules/cjs/loader:1481:32)
//     at Module._load (node:internal/modules/cjs/loader:1300:12)
//     at TracingChannel.traceSync (node:diagnostics_channel:328:14)
//     at wrapModuleLoad (node:internal/modules/cjs/loader:245:24)
//     at Module.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:154:5)
//     at node:internal/main/run_main_module:33:47
// Node.js v24.11.1

function print() {
  // `this` refers to the object that called the method
  // If not called as a method, `this` is special global object
  return this.name;
}
var user = { name: "Eve", print };
user.print() // Eve
print() // undefined

undefined.name
// Command failed: node /tmp/vscode-ext-koGtF3/venkat.js
// /tmp/vscode-ext-koGtF3/venkat.js:1
// console.log(undefined.name);
//                       ^
// TypeError: Cannot read properties of undefined (reading 'name')
//     at Object.<anonymous> (/tmp/vscode-ext-koGtF3/venkat.js:1:23)
//     at Module._compile (node:internal/modules/cjs/loader:1761:14)
//     at Object..js (node:internal/modules/cjs/loader:1893:10)
//     at Module.load (node:internal/modules/cjs/loader:1481:32)
//     at Module._load (node:internal/modules/cjs/loader:1300:12)
//     at TracingChannel.traceSync (node:diagnostics_channel:328:14)
//     at wrapModuleLoad (node:internal/modules/cjs/loader:245:24)
//     at Module.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:154:5)
//     at node:internal/main/run_main_module:33:47
// Node.js v24.11.1

this // {} special global object

var alice = {
  name: "Alice",
  greet() {
    return "Hello, " + this.name + "!";
  },
  greetWithDelay() {
    // Here, `this` is the caller object (alice) 
    setTimeout(function() {
      // Here, `this` is the special global object
      // Because there's no caller
      console.log("Hello, " + this.name + "!");
    }, 1000);
    // function setTimeout(f, t) {
    //   sleep(t)
    //   f()
    // }
  }
}
alice.greet() // Hello, Alice!
alice.greetWithDelay() // Hello, undefined!

var alice2 = {
  name: "Alice",
  greetWithDelay() {
    // Here, `this` is the caller object (alice) 
    setTimeout(() => {
      console.log("Hello, " + this.name + "!");
    }, 1000);
  }
}
alice2.greetWithDelay() // Hello, Alice!

var alice3 = {
  name: "Alice",
  greetWithDelay: () => {
    setTimeout(() => {
      console.log("Hello, " + this.name + "!");
    }, 1000);
  }
}
alice3.greetWithDelay() // Hello, undefined!

var alice4 = {
  name: "Alice",
  greetWithDelay: () => {
    // Value of this comes from the surrounding scope
    // Which is the special global object
    setTimeout(function(){
      // Here, `this` is the caller object
      // Because there is no caller, it is the special global object
      console.log("Hello, " + this.name + "!");
    }, 1000);
  }
}
alice4.greetWithDelay() // Hello, undefined!
