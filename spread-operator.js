//spread operators are conceptually the opposite of rest parameters. enables dynamic expansion of an expression.

// //ES6 style
let nums = [1, 2, 3];

function addEverything(x, y, z) {
  return x + y + z;
}

let val = addEverything(...nums);
//...nums spreads each value inside of the array

console.log(val);
// //6

//in ES5

var nums = [1, 2, 3];

function addEverything(x, y, z) {
  return x + y + z;
}

var val = addEverything.apply(this, nums)

console.log(val);

// another example in ES6

let array = ['me', 'you', 'them'];

function addThem(x,y,z) {
  return x + y + z;
}

let spread = addThem(...array);

console.log(spread);
