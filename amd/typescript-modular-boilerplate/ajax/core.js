/**
 * @module ajax
 */
define(["require", "exports", 'typescript-modular-boilerplate/string/core'], function (require, exports, stringCore) {
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
    return ajaxCore;
});
