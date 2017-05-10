// getters and setters
var obj = {
  firstProperty: "I am the firstProperty",
  secondProperty: "I am the secondProperty",
  combinedProperties: "... once again... ",
  get fullSentence() {
// - get is a property that enables you to dynamically retrieve the value of properties based on the internal state of the object
    return this.firstProperty + " " + this.secondProperty + this.combinedProperties;
  },
  set fullSentence(value) {
// - set is the opposite and enables you to dynamically set the state of an internal property for an object.
    var fullSentenceArray = value.split(' ');
    this.firstProperty = fullNameArray[0];
    this.secondProperty = secondPropertyArray[1];
  }
}
// Why they're valuable:
//
// Getters and Setters allow you to dynamically generate properties based on the current state of the object and to dynamicaly modify the values of an objects properties by setting them.

console.log(obj.firstProperty + obj.combinedProperties + obj.secondProperty);
obj.firstProperty = "I've renamed the first property";
console.log(obj.firstProperty + obj.combinedProperties + obj.secondProperty);
