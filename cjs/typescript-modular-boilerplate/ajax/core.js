/**
 * @module ajax
 */
var stringCore = require('typescript-modular-boilerplate/string/core');
/**
 * @class ajax.core
 * @uses string.core
 */
/**
 * Returns a welcome string.
 *
 * @method sayHi
 * @static
 *
 * @returns {String} The welcome string.
 */
var sayHi = function () {
    return stringCore.sayHi();
};
var ajaxCore = {
    sayHi: sayHi
};
module.exports = ajaxCore;
