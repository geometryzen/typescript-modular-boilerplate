import Human = require('typescript-modular-boilerplate/stuff/human');
declare var typescriptModularBoilerplate: {
    'VERSION': string;
    Human: typeof Human;
    sayHi: {
        sayHi: () => string;
    };
    x: {
        sayHi: () => string;
    };
};
export = typescriptModularBoilerplate;
