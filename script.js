console.log("Hello World!"); // Hello World!

var x = 1;
console.log(x); // 1

var y = "hello";
console.log(y); // hello

console.log(typeof x, typeof y);
// number string

var a = 1;
console.log(typeof a, typeof typeof a);
a = false;
console.log(typeof a);
// number string
//

"hello" + 3; // hello3
4 + true; // 5
"5" - 2; // 3

var obj = { name: "Alice", age: 30 };
console.log(obj.name);
console.log(obj["age"]);
console.log(typeof obj);
// Alice
// 30
// object

var arr = [10, 20, 30];
console.log(arr[0]);
console.log(arr.length);
console.log(typeof arr);
// 10
// 3
// object

var obj2 = { name: 1, income: null };
console.log(obj2.age, typeof obj2.age);
console.log(obj2.income, typeof obj2.income);
// undefined undefined
// null object

function greet(name) {
  console.log("Hello, " + name + "!");
}
greet("Bob");
greet();
// Hello, Bob!
// Hello, undefined!
// undefined

var x = undefined;
console.log(x.name);
// Command failed: node /tmp/vscode-ext-Hm7nyU/venkat.js
// /tmp/vscode-ext-Hm7nyU/venkat.js:2
// console.log(x.name)
//               ^
// TypeError: Cannot read properties of undefined (reading 'name')
//     at Object.<anonymous> (/tmp/vscode-ext-Hm7nyU/venkat.js:2:15)
//     at Module._compile (node:internal/modules/cjs/loader:1761:14)
//     at Object..js (node:internal/modules/cjs/loader:1893:10)
//     at Module.load (node:internal/modules/cjs/loader:1481:32)
//     at Module._load (node:internal/modules/cjs/loader:1300:12)
//     at TracingChannel.traceSync (node:diagnostics_channel:328:14)
//     at wrapModuleLoad (node:internal/modules/cjs/loader:245:24)
//     at Module.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:154:5)
//     at node:internal/main/run_main_module:33:47
// Node.js v24.11.1

var x = null;
console.log(x.name);

// Command failed: node /tmp/vscode-ext-Xd4o80/venkat.js
// /tmp/vscode-ext-Xd4o80/venkat.js:2
// console.log(x.name)
//               ^
// TypeError: Cannot read properties of null (reading 'name')
//     at Object.<anonymous> (/tmp/vscode-ext-Xd4o80/venkat.js:2:15)
//     at Module._compile (node:internal/modules/cjs/loader:1761:14)
//     at Object..js (node:internal/modules/cjs/loader:1893:10)
//     at Module.load (node:internal/modules/cjs/loader:1481:32)
//     at Module._load (node:internal/modules/cjs/loader:1300:12)
//     at TracingChannel.traceSync (node:diagnostics_channel:328:14)
//     at wrapModuleLoad (node:internal/modules/cjs/loader:245:24)
//     at Module.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:154:5)
//     at node:internal/main/run_main_module:33:47
// Node.js v24.11.1

var x = null;
console.log(x?.name);
// undefined

function test() {}
console.log(typeof test); // function

class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
}
var myCar = new Car("Toyota", "Corolla");
console.log(myCar.make, myCar.model);
console.log(myCar);
console.log(typeof Car, typeof myCar);
console.log(myCar instanceof Car);
// Toyota Corolla
// Car { make: 'Toyota', model: 'Corolla' }
// function object
// true

1 == "1" // true
null == undefined // true

[] == false // true
[[]] == false // true
[] == [[]] // false

1 === "1" // false
null === undefined // false

var arr = [1, 2, 3, -3, 94, "hello", false, {}];
for (var i of arr)
  console.log(i)
// 1
// 2
// 3
// -3
// 94
// hello
// false
// {}


var arr = [1, 2, 3, -3, 94, "hello", false, {}];
for (var i in arr)
  console.log(i)
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7

function f(){
  // var a;
  console.log(a);
  if (true){
    var a = 20;
  }
  console.log(a);
}
f()
// undefined
// 20
// undefined

function g(){
  if (true){
    let a = 20;
  }
  console.log(a);
}
g()
// Command failed: node /tmp/vscode-ext-8wLkPG/venkat.js
// /tmp/vscode-ext-8wLkPG/venkat.js:5
//   console.log(a);
//               ^
// ReferenceError: a is not defined
//     at g (/tmp/vscode-ext-8wLkPG/venkat.js:5:15)
//     at Object.<anonymous> (/tmp/vscode-ext-8wLkPG/venkat.js:7:13)
//     at Module._compile (node:internal/modules/cjs/loader:1761:14)
//     at Object..js (node:internal/modules/cjs/loader:1893:10)
//     at Module.load (node:internal/modules/cjs/loader:1481:32)
//     at Module._load (node:internal/modules/cjs/loader:1300:12)
//     at TracingChannel.traceSync (node:diagnostics_channel:328:14)
//     at wrapModuleLoad (node:internal/modules/cjs/loader:245:24)
//     at Module.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:154:5)
//     at node:internal/main/run_main_module:33:47
// Node.js v24.11.1

var a = 1;
var a = 2;
a // 2

let b = 1;
let b = 2;
b
// Command failed: node /tmp/vscode-ext-8EzddL/venkat.js
// /tmp/vscode-ext-8EzddL/venkat.js:2
// let b = 2;
//     ^
// SyntaxError: Identifier 'b' has already been declared
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

const c = 10;
c = 20;
c
// Command failed: node /tmp/vscode-ext-mz22Q6/venkat.js
// /tmp/vscode-ext-mz22Q6/venkat.js:2
// c = 20;
//   ^
// TypeError: Assignment to constant variable.
//     at Object.<anonymous> (/tmp/vscode-ext-mz22Q6/venkat.js:2:3)
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
  return this.name; // this is bound to the object calling the function
}
var person = { name: "Charlie", print };
person.print() // Charlie
print() // undefined

this // {} special global object

var obj = { 
  name: "Diana",
  greet() {
  // greet: function() {
    return `Hello, ${this.name}!`;
  },
  greetWithDelay: function() {
    setTimeout(function (){
      console.log(`Hi, ${this.name}, nice to meet you!`);
    }, 1000);
    // inside setTimeout you have
    // function setTimeout(f, delay)..
    // sleep(delay)
    // f() --> this is the special global object
  }
};
console.log(obj.greet())
console.log(obj.greetWithDelay())
// Hello, Diana!
// Hi, undefined, nice to meet you!

var obj = { 
  name: "Diana",
  greetWithDelay: function() {
    // this is the caller object
    setTimeout(() => {
      console.log(`Hi, ${this.name}, nice to meet you!`);
    }, 1000);
  }
};
obj.greetWithDelay()
// Hi, Diana, nice to meet you!


var obj = { 
  name: "Diana",
  greetWithDelay: () => {
    setTimeout(() => {
      console.log(`Hi, ${this.name}, nice to meet you!`);
    }, 1000);
  }
};
obj.greetWithDelay()
// Hi, undefined, nice to meet you!