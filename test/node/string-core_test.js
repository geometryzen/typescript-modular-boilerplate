'use strict';

var core = require('../../cjs/typescript-modular-boilerplate/string/core');
var assert = require('assert');
var vows = require('vows');

vows.describe('string core').addBatch({
    'stringUtil.sayHi': {
        'when "stringUtil.sayHi()" is called': {
            topic: function() {
                return core.sayHi().toLowerCase().indexOf('hello') > -1;
            },
            'it should return a greeting': function(expectation) {
                assert.equal(expectation, true);
            }
        }
    }
}).export(module);