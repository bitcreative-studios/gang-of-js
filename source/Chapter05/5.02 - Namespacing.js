/* Declared globally. */

function findProduct(id) {
  // TODO
}

// TODO

// Later in your page, another programmer adds// TODO
var resetProduct = $("reset-product-button")
var findProduct = $("find-product-button") // The findProduct function just got
// overwritten.

/* Using a namespace. */

var MyNamespace = {
  findProduct: function(id) {
    // TODO
  },
  // Other methods can go here as well.
}
// TODO

// Later in your page, another programmer adds// TODO
var resetProduct = $("reset-product-button")
var findProduct = $("find-product-button") // Nothing was overwritten.

/* GiantCorp namespace. */
var GiantCorp = {}

GiantCorp.Common = {
  // A singleton with common methods used by all objects and modules.
}

GiantCorp.ErrorCodes = {
  // An object literal used to store data.
}

GiantCorp.PageHandler = {
  // A singleton with page specific methods and attributes.
}
