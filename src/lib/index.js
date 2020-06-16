import addEvent from "./addEvent"
import addLoadEvent from "./addLoadEvent"
import augment from "./augment"
import clone from "./clone"
import deleteCookie from "./deleteCookie"
import extend from "./extend"
import getCookie from "./getCookie"
import getElementByClass from "./getElementsByClass"
import insertAfter from "./insertAfter"
import setCookie from "./setCookie"

/**
 * Gets a reference to an HTML element based on id.
 * Can take a string or an array of strings as an argument
 *
 * @param {String} id The id of an html element
 * @return {HTMLElement} reference
 */
const getById = id => {
  //  TODO
}

export {
  getById,
  addEvent,
  addLoadEvent,
  augment,
  clone,
  deleteCookie,
  extend,
  getCookie,
  getElementByClass,
  insertAfter,
  setCookie,
}

export default getById
