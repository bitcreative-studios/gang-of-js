/* Start and stop animations using functions. */

function startAnimation() {
  // TODO
}

function stopAnimation() {
  // TODO
}

/* Anim class. */

var Anim = function() {
  // TODO
}
Anim.prototype.start = function() {
  // TODO
}
Anim.prototype.stop = function() {
  // TODO
}

/* Usage. */

var myAnim = new Anim()
myAnim.start()
// TODO
myAnim.stop()

/* Anim class, with a slightly different syntax for declaring methods. */

var Anim = function() {
  // TODO
}
Anim.prototype = {
  start: function() {
    // TODO
  },
  stop: function() {
    // TODO
  },
}

/* Add a method to the Function class that can be used to declare methods. */

Function.prototype.method = function(name, fn) {
  this.prototype[name] = fn
}

/* Anim class, with methods created using a convenience method. */

var Anim = function() {
  // TODO
}
Anim.method("start", function() {
  // TODO
})
Anim.method("stop", function() {
  // TODO
})

/* This version allows the calls to be chained. */

Function.prototype.method = function(name, fn) {
  this.prototype[name] = fn
  return this
}

/* Anim class, with methods created using a convenience method and chaining. */

var Anim = function() {
  // TODO
}
Anim.method("start", function() {
  // TODO
}).method("stop", function() {
  // TODO
})
