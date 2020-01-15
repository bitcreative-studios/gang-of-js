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
    for (const method of methods) {
      if (typeof method !== "string")
        throw new Error(
          "Interface constructor expects method names to be passed in as a string"
        )
      this.methods.push(method)
    }
  }
}

export default Interface
