/****** Arithmetic Operators ******/
/* // let x = 5;
// let y = 2;
// let result = x + y;
// console.log(result);
// console.log('Bonjour...!');
// console.log('Result is :'+result)
// let a = 10
// a++
// console.log('Value of a is : '+a)

// function sum(a,b) {
 //   return a + b;
// }

// console.log(sum(2, 5));

/* /**** Assignment  Operators ******/
// let x = 10;
// x -=5;     // x = x+5; x -=5-> x=x-5; x*=5-> x=x*5...
//console.log(x)
// console.log('Value of x is :'+x); 

/*********Comparaison Operations********/

//let x = 10;
//let y = 20;
//let result = x == y; // x equal to y
//console.log(result);



//console.log(t == z);
//== equal to; === value and equal type; != not equal to; !== not equal value and type.

/*
 Ternary Operation : like if-then-else
 takes 3 arguments
 condition ? value if true : value if false
 */
//let result = x > y ? x : y;
//console.log(result);

/*********Logical  Operations********/  
// && logical And : True if both conditions are true
// || logica OR: True if any of the condition is true
// ! logical NOT: Will return if the condition is false and vice versa

// let A = true;
// let B = false;
// console.log(!B);
// console.log((10>5) || (6<3));

/********* Type  Operations********/
// typeof : Return the type of a variable 
//( We can use the typeof operetor to find the data type of a javaScript variable)
// instanceceof : Returns true if an object is an instance of an object type
// (The instanceof operator returns a boolean value that indicates if an object is instance of a particular class)

//  let firstName = 'Raoul';
//   console.log (typeof firstName);
//  console.log (typeof 123);
//   console.log (typeof true);

// let lastName = new String('Paul');
// console.log (lastName instanceof String);

// console.log (typeof "Paull");                         // Returns "string"
// console.log (typeof 123);                             // Returns "number"
// console.log (typeof false);                           // Returns "boolean"
// console.log (typeof NaN);                             // Returns "number"
// console.log (typeof[1,2,3,4]);                         // Returns "object"
// console.log (typeof{name: 'Peter', age:25});           // Returns "object"
// console.log (typeof new Date());                       // Returns "object"
// console.log (typeof null);                             // Returns "object"
// console.log (typeof function() {});                    // Returns "function"
// console.log (typeof myClass);                          // Returns "undefined"


/********* Bitwise  Operations********/

// & AND : sets each bit to 1 if both bits are 1
// | OR  : sets each bit to 1 if one of two bits is 1
// ^ XOR : sets each bit to 1 if only one of two bits is 1
// ~ NOT : inverts all the bits
// << Left Shit : Shift left and fills empty space with o
// >> Right Shift: shift right

// Bitwise operations treat arguments as 32-bit numbers 
// and work on the level of their binary representation.

let A = 3;
let B = 5;
console.log (A ^ B);
console.log (~5);

