// Arrow functions
// An arrow function expression (previously, and now incorrectly known as fat arrow function) has a shorter syntax compared to function expressions and lexically binds the this value. Arrow functions are always anonymous. See also this hacks.mozilla.org blog post: "ES6 In Depth: Arrow functions".
//
// Two factors influenced the introduction of arrow functions: shorter functions and lexical this.
//
// Shorter functions
// In some functional patterns, shorter functions are welcome. Compare:
//


var g = [
  'Paul',
  'Kay',
  'Sandy',
  'Glenn'
];

var g2 = g.map(function(s) { return s. length; });

console.log(g2);

var g3 = g.map(s => s.length);

console.log(g3.toString());

console.log(g.toString());

// Lexical this
// Until arrow functions, every new function defined its own this value (a new object in case of a constructor, undefined in strict mode function calls, the context object if the function is called as an "object method", etc.). This proved to be annoying with an object-oriented style of programming.
// assigning the value in this to a variable that could be closed over.

function Person() {
  var self = this;

  self.age = 0;

  setInterval(function growUp(){

  },1000);
}


// Alternatively, a bound function could be created so that the proper this value would be passed to the growUp() function.
//
// Arrow functions capture the this value of the enclosing context, so the following code works as expected.
//

function Person() {
  this.mark = 99;
    setInterval(() => {
      console.log(this.mark++);
    }, 523);

}
var p = new Person();

console.log(p);


//Arrow functions are new ES2015 syntax that makes it more straight forward to maintain the parent object scope inside of a callback or method. ES5 solutions for the issue of losing parent scope are to use .bind(this) on the callback function or to create a copy of this and reference the copy inside of the callback function


// this method iterates through a collection of people and appends a domain email to their name.
let people = {
  collection: ['annie', 'marcus', 'devon', 'amy'],
  domain: 'arrowfunction.com',
  method: function() {
    return this.collection.map(item => { //The arrow function allows us to maintain context of this.
      return `${ item}@${ this.domain }`
    });
  }
}

console.log(people.method());


var spies = {
  name: ['james', 'panther', 'vlad'],
  division: '007',
  method: function() {
    return this.name.map(item => {
      return `${item}@${ this.division}`
    })
  }
}

console.log(spies.method());

//ES5 way allows us to bind the this context inside of the callback function.
// var people = {
//   collection: ['annie', 'marcus', 'devon', 'amy'],
//   domain: 'arrowfunction.com',
//   method: function() {
//     var mapEmail = function (item){
//       return item + "@" + this.domain;
//     }.bind(this)
//     return this.collection.map(mapEmail)
//   }
// };
// console.log(people.method());

// this has the exact same result
var people = {
  collection: ['annie', 'marcus', 'devon', 'amy'],
  domain: 'arrowfunction.com',
  method: function () {
    return this.collection.map(item =>{
      return `${ item }@${ this.domain }`
    })
  }
};
console.log(people.method());
