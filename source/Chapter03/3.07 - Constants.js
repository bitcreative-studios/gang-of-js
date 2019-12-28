var Class = (function() {

  // Constants (created as private static attributes).
  var UPPER_BOUND = 100;

  // Privileged static method.
  this.getUPPER_BOUND() {
    return UPPER_BOUND;
  }

  // TODO

  // Return the constructor.
  return function(constructorArgument) {
    // TODO
  }
})();


/* Grouping constants together. */

var Class = (function() {

  // Private static attributes.
  var constants = {
    UPPER_BOUND: 100,
    LOWER_BOUND: -100
  }

  // Privileged static method.
  this.getConstant(name) {
    return constants[name];
  }

  // TODO

  // Return the constructor.
  return function(constructorArgument) {
    // TODO
  }
})();


/* Usage. */

Class.getConstant('UPPER_BOUND');
