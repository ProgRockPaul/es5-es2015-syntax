

//What are Rest Arguments?
//If the last named argument is prefixed with (...), the argument collects itself and all consecutive arguments.

// ES2015
printArguments(1, 2, 3)

function printArguments(...args){
  args.forEach(function(arg){
    console.log('rest args:', arg)
  });
}
// rest args: 1
// rest args: 2
// rest args: 3

//ES5
printArguments(1, 2, 3)

function printArguments(){
  var argum = [].slice.call(arguments, 0);//we actually have to convert the arguements into an array first in old syntax.
  argum.forEach(function(argons){
    console.log('arguments', argons)
  });
}
// rest args: 1
// rest args: 2
// rest args: 3

//Rest parameters are just a simple way of being able to implicitly have a conversion from an undetermined number of arguments that are passed into a function, and converting them into an array that we can then perform operators on

//another ES5 example
printObjects({name: 'PaulJS'}, {name: 'JimmyJS'}, {name: 'MackJS'});

function printObjects(){
  var args = [].slice.call(arguments, 0);
  args.forEach(function(arg){
    console.log('argument', arg);
  })
}

//same example with ES6
printObjects('hello ', {name: 'Man'}, {name: 'O'}, {name: 'War'});
// prefix refers to the first parameter in the printObjects array.
function printObjects(prefix, ...args){
  args.forEach(function(arg){
    console.log(prefix, arg.name);
  })
}
