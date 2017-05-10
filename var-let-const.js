//ES2015 introduces two new ways to declare variables that help to get around some unexpected behavior that can occur with variable assignment and variable hoisting in Javascript. `let` and `const` create a new scope when they appear inside of curly braces { }

// ES5 var
var thingThang = 'COFFFEE!!!';

if(true){
  var thingThang = 'THIS PRINTTTS!!!!!';
}

console.log(thingThang);
//

// What are the `let` & `const` keywords?
//
// `let` is just like `var` except it is blocked scoped, which prevents variables from being hoisted to the top of our scope during the javascript declaration, which is what occurs with the `var` keyword.

let stringThang = 'THISS PRINTS!!!';

if(true){
  let stringThang = 'COFFFEE!!!!!!EEE';
}

console.log(stringThang);

// `const` is just like `let` except for it cannot be reassigned after it has been initialized with a value. It is also block scoped.

const str = "I will not do anything";

if(true){
  str = "BSDFG";
}

console.log(str);

// when you try to re assign this it give you an error

var day = 'today';

if (true){
  var day = 'tommorow';
}

console.log(day);

// when you try to re assign this it give you an error

let day = 'today';

if (true){
  let day = 'tommorow';
}

console.log(day);
// when you try to re assign this it give you an error


const day = 'today';

if (true){
  day = 'tommorow';
}

console.log(day);
