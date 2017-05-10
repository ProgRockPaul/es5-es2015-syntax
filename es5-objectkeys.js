// What it does:
//


var languagesIKnow = {
  'Javascript': '1 year',
  'Ruby': '1 year',
  'Engligh': 'obviously'
}
var keys = Object.keys(languagesIKnow);
// Object.keys is a function on the Object constructor that takes in an object and outputs that objects keys into an array.


// this is pretty great because we can now do array methods on the object's keys.
var upperKeywords = keys.map(function(key){
  return key.toUpperCase();
})

console.log(upperKeywords);
// Why it's valuable:
//
// Array's have far more useful helper methods and by using Object.keys instead of the traditional for (var key in obj) syntax it is much easier to chain transformational methods to the object in the same way we would do with an array.
//

var obj = {
  "4": 224,
  "two": 2,
  "five": 35
}

var keys = Object.keys(obj);

var multipliedByTwo = keys.map(function(key){
  return obj[key]*2;
})

console.log(multipliedByTwo);
