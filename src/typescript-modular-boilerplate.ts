// Reference TypeScript (*.ts) files here, without including the ts extension.
import core = require('typescript-modular-boilerplate/core');
import Human = require('typescript-modular-boilerplate/stuff/human');
import s = require('typescript-modular-boilerplate/string/core');
import a = require('typescript-modular-boilerplate/ajax/core');

// Build the structure of the library here.
var typescriptModularBoilerplate = {
    'VERSION': core.VERSION,
    Human: Human,
    sayHi: s,
    x: a
};
export = typescriptModularBoilerplate;