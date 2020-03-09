//Addition Operation Examples
  let x = 0;
  let y = 5;
  console.log(x + y);
//Pre Increment
console.log(x);
console.log(++x);
console.log(x);
console.log(++x)
console.log(x);
console.log(++x)
console.log(x)
console.log(++x)
//Post Increment
console.log(x);
console.log(x++);
console.log(x);
console.log(x++);
console.log(x);
console.log(x++);
console.log(x);

//Examples
let xs = 10
let ys = xs;
//Pre Increment Example
ys = ++xs;
console.log(xs);
console.log(ys);
//Post Increment Example
ys = xs++;
console.log(xs);
console.log(ys);
//Pre Decrement Example
ys = --xs;
console.log(xs);
console.log(ys);
//Post Decrement Example
ys = xs--;
console.log(xs);
console.log(ys);

//Post Increment "x++" will read and display the x first, THEN add +1 after the code has been displayed
//Pre Increment "++x" will read the +1 BEFORE displaying X, so the equation will be done before x is displayed.

// I <= 10; Means it will keep adding +1 until NO GREATER THAN 10
for(let i = 0; i <= 10; i++){
console.log(i);
};

//Unary, Binary Operators
let a = 1;
a = -a;
(a);     //-1, Here the operator is unary minus

const firstword = "Hello";
const secondword = "World";

console.log(firstword + secondword);
console.log(firstword); (secondword);
console.log(` ${firstword} ${secondword}`);

//Numbers as a string
console.log(10 + 5);
console.log(10 + '5');
console.log('10' + 5);
console.log(10 + 10 + '5');
console.log('10' + '10');
//what about
console.log("10" + "10");
//No difference

//10/03/2020
console.log( +true );  // 1, true is converted to 1 using unary plus

console.log( +false ); // 0, false is converted to 0

console.log( +"" );   // 0, empty string converted to 0

console.log(10 + 5 * 3); // 25, First Multiplication then Addition

let x = 10;
//Assign
console.log( "=" )
//Add and Assign (adds x and then assigns original value of x)
console.log( x += 10);
//Subtract and Assign
console.log( x -= 10);
//Multiply and Assign
console.log( x *= 10);
//Divide and Assign
console.log( x /= 10);
//Divide and Assign Modulus
//The modulus assignment operator divides the value stored in the left variable by the right value.
//If value is a string, an attempt is made to convert the string to a number before performing the modulus and assignment.
console.log( x %= 9);



//Addition Operation Examples

//   console.log(x + y);
//   let x = 10;
//   let y = 5;

//   let x = 10;
//   let y = 5;
//   let result = x + y;
//   console.log(result);

//   let x = 10 + 5
//   console.log(x)

// Increment Operator (++) increments the variable value by one
// syntax: ++x (or) x++ 

// Pre-Increment: Increments by one, then return x
// Post-Increment: Returns x, then increment by one

//These next statements are made too difficult to understand, so i really dont know
// Pre Increment: Increments the value and execute the expression/ statement
// Post Increment: Evaluate the expression/ statement, then increments the value

// Pre-decrement : Decrements the value by one, then return x
// Post-decrement : Returns x, then decrements value by one

