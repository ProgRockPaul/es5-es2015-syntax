// // Classes -  Syntactical sugar over Javascript's existing prototype-based inheritance. its just a cleaner easier way of doing things.
//
class App { //upper case name by convention
  constructor(){//the first thing that happens with a new class is the constructor function gets run, ANY TIME that class gets instantiated.
    console.log('hello');
  }
  method(){ // we just attack the method in ES^, very clean
    console.log('method called');
  }
}

var app = new App();
app.method();

// //hello
// //method called
//
// in ES5 we had to create a function for our App class
function App() {
  console.log('hello');//much like a constructor this is the code that gets run when the function gets declared.
}
App.prototype.method = function() {// the method is added to the prototype in ES5
  console.log('method called');
};

var app = new App();
app.method();
// //hello
// //method called
//
//
// // once again, ES5
var App = function() {
  console.log('hello');
}

var app = new App();


// and now ES6
class App2015 {
  constructor(){
    console.log('helloES2015');
  }

  method(){
    console.log('hello from method 2015');
  }
}

var app2015 = new App2015;
app2015.method();
//
