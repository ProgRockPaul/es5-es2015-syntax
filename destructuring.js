//Destructuring is a simple syntax for dynamiclly plucking properties off of a data structure while assigning them to distinct variables.

// What is Destructuring
//
// You can destructure a data structure by referencing an object's property names inside of curly braces.
//
// var object = { "a": 1, "b": 2 }
// var {a, b} = object;
// console.log(a, " | ", b);
// => 1 | 2

var object = {
  'a': 1,
  'b': 2
}

var {a, b} = object;
// properies are plicked from the object
console.log(a, b);
// exactly the same as this es5
var object = {
  'a': 1,
  'b': 2
}
var a = object.a;
var b = object.b;

console.log(a, b);

//Why is it valuable
//
// In modern frameworks like Angular that are built on TypeScript (which is a superset of ES2015), destructuring is common in import statements to pluck specific modules from an exported file.


//prism object
var prism = {
  l: 5,
  w: 8
}
//rectagular prism area, even though we don't have a height we can enter one
function rectPrismArea({l, w, h = 10}){
  return l * w * h;
}

console.log(rectPrismArea(prism));
