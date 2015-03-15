define([
    'typescript-modular-boilerplate/string/core',
    'typescript-modular-boilerplate/ajax/core'
], function(
    core,
    ajax
) {
    describe("string core", function() {
        it("returns a greeting when `sayHi` is called.", function() {

            var div = document.createElement('div');

            div.innerHTML = core.sayHi() + ajax.sayHi();

            var greet = 'Hello, Multiverse!';

            expect(div.innerHTML).toBe(greet + greet);
        });
    });
});