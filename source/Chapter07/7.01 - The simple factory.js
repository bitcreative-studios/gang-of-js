/* BicycleShop class. */

var BicycleShop = function() {}
BicycleShop.prototype = {
  sellBicycle: function(model) {
    var bicycle

    switch (model) {
      case "The Speedster":
        bicycle = new Speedster()
        break
      case "The Lowrider":
        bicycle = new Lowrider()
        break
      case "The Comfort Cruiser":
      default:
        bicycle = new ComfortCruiser()
    }
    Interface.ensureImplements(bicycle, Bicycle)

    bicycle.assemble()
    bicycle.wash()

    return bicycle
  },
}

/* The Bicycle interface. */

var Bicycle = new Interface("Bicycle", ["assemble", "wash", "ride", "repair"])

/* Speedster class. */

var Speedster = function() {
  // implements Bicycle
  // TODO
}
Speedster.prototype = {
  assemble: function() {
    // TODO
  },
  wash: function() {
    // TODO
  },
  ride: function() {
    // TODO
  },
  repair: function() {
    // TODO
  },
}

/* Usage. */

var californiaCruisers = new BicycleShop()
var yourNewBike = californiaCruisers.sellBicycle("The Speedster")

/* BicycleFactory namespace. */

var BicycleFactory = {
  createBicycle: function(model) {
    var bicycle

    switch (model) {
      case "The Speedster":
        bicycle = new Speedster()
        break
      case "The Lowrider":
        bicycle = new Lowrider()
        break
      case "The Comfort Cruiser":
      default:
        bicycle = new ComfortCruiser()
    }

    Interface.ensureImplements(bicycle, Bicycle)
    return bicycle
  },
}

/* BicycleShop class, improved. */

var BicycleShop = function() {}
BicycleShop.prototype = {
  sellBicycle: function(model) {
    var bicycle = BicycleFactory.createBicycle(model)

    bicycle.assemble()
    bicycle.wash()

    return bicycle
  },
}

/* BicycleFactory namespace, with more models. */

var BicycleFactory = {
  createBicycle: function(model) {
    var bicycle

    switch (model) {
      case "The Speedster":
        bicycle = new Speedster()
        break
      case "The Lowrider":
        bicycle = new Lowrider()
        break
      case "The Flatlander":
        bicycle = new Flatlander()
        break
      case "The Comfort Cruiser":
      default:
        bicycle = new ComfortCruiser()
    }

    Interface.ensureImplements(bicycle, Bicycle)
    return bicycle
  },
}
