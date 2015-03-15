define(["require", "exports"], function (require, exports) {
    var sayHi = function () {
        return "Hello, Multiverse!";
    };
    var stringCore = {
        sayHi: sayHi
    };
    return stringCore;
});
