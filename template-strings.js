//One of the most simple and convenient new features of ES2015 is the introduction of template strings.

// What are Template Strings
//
// Template strings are the use of the back-tick symbol (`) to open and close a multi-line string. Template strings also allow for string interpolation using the $ { data } syntax.
//

var myData = {
  data: 'hello'
}

var template = `
  <div>
    ${ myData.data }
  </div>
`

console.log(template);
//
// Why are they valuable
//
// With ES5, the way we had to create template strings was by concatenating a large number of strings together and to spend time organizing our various quotes and plus signs.


var myData = {
  data: 'hello'
}

var template = "+
  '<div>' +
    myData.data +
  '</div>' +
"

console.log(template)
//
