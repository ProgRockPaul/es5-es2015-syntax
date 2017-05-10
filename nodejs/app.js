var _ = require('underscore');


// <script src="underscore.js"> tag for underscore
var instructors = ['PatrickJS', 'Scott Moss', 'Mike Adams'];

_.each(instructors, function(person) {
  console.log('Hello', person);
});
