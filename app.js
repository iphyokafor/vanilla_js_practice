// var name = 'John Doe';
// console.log(name);
// name = 'Steve Smith';
// console.log(name);

// // Init a Variable
// var greeting;
// console.log(greeting);
// greeting = 'Hello';
// console.log(greeting);

// // Variables can only include letters, numbers, _, $
// // Variables cannot start with a number

// // Milti word variables
// var firstName = 'John'  // camel case
// var first_name = 'Sara' // underscore
// var FirstName = 'Tom' //pascal case

// Let
// let name; 
// name = 'John Doe';
// console.log(name);
// name = 'Steve Smith';
// console.log(name);

// Const 
// const name = 'John';
// console.log(name);
// //cannot reassign
// name = 'Sara';
// //have to assign a value
// const greeting;

// const person = {
//   name = 'John',
//   age = 30
// }
// person.name = 'Sara';

// console.log(person);

// const numbers = [1,2,3,4,5];
// numbers.push(6);

// console.log(numbers);

//we can change arrays and objects that are assigned to a varaible using const but we can't redeclare the variables. 

// PRIMITIVE
//String
// const name = 'John doe';
// Number
// const age = 45;
// Boolean
// const hasKids = true;
// Null
// const car = null;
// Undefined
// let test;
// Symbol
// const sym = Symbol();

// REFERENCE TYPES - Objects
// Array
// const hobbies = ['movies', 'music'];
// Object literal
// const address = {
//   city: 'Boston',
//   state: 'MA'
// }
// Date
// const today = new Date();


// console.log(today);
// console.log(typeof today);

// Type conversion

// let val;

// Number to string
// val = String(5);
// val = String(4 + 4);
// Bool to string
// val = String(true);
// Date to string
// val = String(new Date());
// Array to string
// val = String([1,2,3,4]);

// toString()
// val = (5).toString();
// val = (true).toString();

// String to number
// val = Number('5');
// val  = Number(true);
// val = Number(false);
// val = Number(null);
// val = Number('hello');
// val = Number([1,2,3,4]);

// parseInt() and parseFloat()
// val = parseInt('100.30');
// val = parseFloat('100.322');

// output
// console.log(val);
// console.log(typeof val);
// console.log(val.length);
// console.log(val.toFixed());

// Type Cohersion
// const val1 = String(5);
// const val2 = 6;
// const sum = Number(val1 + val2);

// console.log(sum);
// console.log(typeof sum);

// const num1 = 100;
// const num2 = 50;
// let val;

// Simple math with numbers
// val = num1 + num2;
// val = num1 * num2;
// val = num1 - num2;
// val = num1 / num2;
// val = num1 % num2;

// Math Object
// val = Math.PI;
// val = Math.E;
// val = Math.round(2.4);
// val = Math.ceil(2.4);
// val = Math.floor(2.9);
// val = Math.sqrt(64);
// val = Math.abs(-3);
// val = Math.pow(6, 2);
// val = Math.min(2,33, 4,445, 2, -1, 0);
// val = Math.max(2,33, 4,445, 2, -1, 0);
// val = Math.random();

// val = Math.floor(Math.random() * 20 +1);

// console.log(val);

// String Methods and Concatenation
// const firstName = 'William';
// const lastName = 'Johnson';
// const age = 36;
// const str = "hello there my name is Jess";
// const tags = 'web design, programming, web development'

// let val;

// val = firstName + lastName;

// Concatenation
// val = firstName + ' ' + lastName;

// Append
// val = 'Sandra ';
// val += 'Jesse';

// val = 'Hello, my name is ' + firstName + ' and I am ' + age;

// Escaping
// val = 'That\'s awesome , I can\'t wait';

// Length
// val = firstName.length;

// Concat
// val = firstName.concat(' ', lastName);

// Change case
// val = firstName.toUpperCase();
// val = firstName.toLowerCase();

// val = firstName[0];

// indexOf()
// val = firstName.indexOf('l');
// val = firstName.lastIndexOf('l');

// charAt()
// val = firstName.charAt(2);
// Get last character
// val = firstName.charAt(firstName.length - 1);

// Get Substrings - substring()
// val = firstName.substring(0, 4);

// slice()
// val = firstName.slice(0,4);
// val = firstName.slice(-3);

// spilt()
// val = str.split(' ');
// val = tags.split(',');

// replace()
// val = str.replace('Jess', 'jack').toUpperCase();

// include()
// val = str.includes('foo');

// console.log(val);