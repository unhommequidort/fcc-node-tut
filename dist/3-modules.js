"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// CommonJS, every file is a module (by default)
// Modules - Emcapsulated code (only share the minimum)
const _4_names_1 = require("./4-names");
const _5_utils_1 = require("./5-utils");
const _6_alternative_flavor_1 = require("./6-alternative-flavor");
console.log(_6_alternative_flavor_1.items, _6_alternative_flavor_1.person);
(0, _5_utils_1.sayHi)('susan');
(0, _5_utils_1.sayHi)(_4_names_1.names.john);
(0, _5_utils_1.sayHi)(_4_names_1.names.peter);
require('./7-mind-grenade');
