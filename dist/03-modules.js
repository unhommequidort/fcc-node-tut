"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// CommonJS, every file is a module (by default)
// Modules - Emcapsulated code (only share the minimum)
const _04_names_1 = require("./04-names");
const _05_utils_1 = require("./05-utils");
const _06_alternative_flavor_1 = require("./06-alternative-flavor");
console.log(_06_alternative_flavor_1.items, _06_alternative_flavor_1.person);
(0, _05_utils_1.sayHi)('susan');
(0, _05_utils_1.sayHi)(_04_names_1.names.john);
(0, _05_utils_1.sayHi)(_04_names_1.names.peter);
require('./7-mind-grenade');
