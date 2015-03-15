define(["require", "exports", 'typescript-modular-boilerplate/core', 'typescript-modular-boilerplate/stuff/human', 'typescript-modular-boilerplate/string/core', 'typescript-modular-boilerplate/ajax/core'], function (require, exports, core, Human, s, a) {
    // Build the structure of the library here.
    var typescriptModularBoilerplate = {
        'VERSION': core.VERSION,
        Human: Human,
        sayHi: s,
        x: a
    };
    return typescriptModularBoilerplate;
});
