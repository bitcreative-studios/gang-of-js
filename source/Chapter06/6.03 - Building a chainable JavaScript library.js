// Include syntactic sugar to help the development of our interface.
Function.prototype.method = function(name, fn) {
  this.prototype[name] = fn;
  return this;
};
(function() {
  function _$(els) {
    // // TODO
  }
  /*
    Events
      * addEvent
      * getEvent
  */
  _$.method('addEvent', function(type, fn) {
    // // TODO
  }).method('getEvent', function(e) {
    // // TODO
  }).
  /*
    DOM
      * addClass
      * removeClass
      * replaceClass
      * hasClass
      * getStyle
      * setStyle
  */
  method('addClass', function(className) {
    // // TODO
  }).method('removeClass', function(className) {
    // // TODO
  }).method('replaceClass', function(oldClass, newClass) {
    // // TODO
  }).method('hasClass', function(className) {
    // // TODO
  }).method('getStyle', function(prop) {
    // // TODO
  }).method('setStyle', function(prop, val) {
    // // TODO
  }).
  /*
    AJAX
      * load. Fetches an HTML fragment from a URL and inserts it into an element.
  */
  method('load', function(uri, method) {
    // // TODO
  });
  window.$ = function() {
    return new _$(arguments);
  });
})();

Function.prototype.method = function(name, fn) {
  // // TODO
};
(function() {
  function _$(els) {
    // // TODO
  }
  _$.method('addEvent', function(type, fn) {
    // // TODO
  })
  // // TODO

  window.installHelper = function(scope, interface) {
    scope[interface] = function() {
      return new _$(arguments);
    }
  };
})();


/* Usage. */

installHelper(window, '$');

$('example').show();


/* Another usage example. */

// Define a namespace without overwriting it if it already exists.
window.com = window.com || {};
com.example = com.example || {};
com.example.util = com.example.util || {};

installHelper(com.example.util, 'get');

(function() {
  var get = com.example.util.get;
  get('example').addEvent('click', function(e) {
    get(this).addClass('hello');
  });
})();
