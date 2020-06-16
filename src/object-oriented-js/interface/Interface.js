/**
 * A helper class to provide JavaScript with the foundational component
 * of reusable Object Oriented Programming techniques.
 *
 * @category Object Oriented Foundations
 *
 * @example
 * const Composite = new Interface('Composite', ['add', 'remove', 'getChild']);
 * const FormItem = new Interface('FormItem', ['save']);
 *
 * // CompositeForm class
 * const CompositeForm = function(id, method, action){
 *   // implements Composite, FormItem ...
 * };
 *
 * FIXME: write my own message
 * function addForm(formInstance) {
 *   Interface.ensureImplements(formInstance, Composite, FormItem);
 *   // This function will throw an error if a required method is not implemented,
 *   // halting execution of the function.
 *   // All code beneath this line will be executed only if the checks pass.
 *   ...
 * }
 */

class Interface {
  /**
   *
   * @param {string} name The name of the Interface
   * @param {Array<string>} methods A non-empty
   *     array of expected method names the given interface must implement
   */
  constructor(name, methods) {
    if (arguments.length !== 2) {
      throw new Error(
        `Interface constructor called with ${arguments.length} arguments, but expected exactly 2`
      )
    }
    this.name = name
    this.methods = []
    methods.forEach(method => {
      if (typeof method !== "string")
        throw new Error(
          "Interface constructor expects method names to be passed in as a string"
        )
      this.methods.push(method)
    })
  }

  /**
   * Ensures that the given class implements the specified Interfaces
   *
   * @param {Object} object The class to be validated for proper interface implementation
   * @param {Interface} interfaces A non-empty, variable list of the interfaces required by the object
   */
  static ensureImplements(object, ...interfaces) {
    if (arguments.length < 2) {
      throw new Error(
        `Function Interface.ensureImplements called with ${arguments.length}, but expected at least 2.`
      )
    }

    interfaces.forEach(function(intrface) {
      if (intrface.constructor !== Interface) {
        throw new Error(
          "Function Interface.ensureImplements should be called with instances of the Interface class"
        )
      }
      intrface.methods.forEach(function(method) {
        if (!object[method] || typeof object[method] !== "function") {
          throw new Error(`
          Function Interface.ensureImplements: object does not implement the ${intrface.name} interface. Method ${method} was not found.
          `)
        }
      })
    })
  }
}

export default Interface
