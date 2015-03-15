// Reference TypeScript (*.ts) files here, without including the ts extension.
var core = require('typescript-modular-boilerplate/core');
var Human = require('typescript-modular-boilerplate/stuff/human');
var s = require('typescript-modular-boilerplate/string/core');
var a = require('typescript-modular-boilerplate/ajax/core');
// Build the structure of the library here.
var typescriptModularBoilerplate = {
    'VERSION': core.VERSION,
    Human: Human,
    sayHi: s,
    x: a
};
module.exports = typescriptModularBoilerplate;
