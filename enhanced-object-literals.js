//enhanced object literals are syntactical sugar for dynamic property generation in object literals.

var obj = {

  handler: function(){},
    [ 'prop_' + 42]: 'life'
};
console.log(obj.prop_42);
//life

//in ES5 we are taking an object literal and we are adding the property after it's been defined.
var obj = {
  property: 'first prop'
};
obj[ 'prop_' + 42 ] = 'life';

console.log(obj);

//in ES6 we put the key prop and its value into the object definition.

var obj = {
  property: 'first prop',
  [ 'prop_' + 42 ] = 'life'
};

console.log(obj);
