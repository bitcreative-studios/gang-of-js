/**
 * Attaches function func as a listener to the element obj.
 * type specifies the event that the function should listen for
 *
 * @param {HTMLElement} obj The element
 * @param {string} type Name of the event to attach to
 * @param {Function} func The function to call
 * @return {void}
 *
 * @example
 * const elm = document.querySelector("#myElement");
 * const handleClickEvent = evt => console.log(evt);
 *
 * addEvent(elm,"click",handleClickEvent);
 * @todo Implement function
 */
const addEvent = (obj, type, func) => {}

export default addEvent
