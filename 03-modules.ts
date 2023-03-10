// CommonJS, every file is a module (by default)
// Modules - Emcapsulated code (only share the minimum)
import { names } from './04-names';
import { sayHi } from './05-utils';

import { items, person } from './06-alternative-flavor';
console.log(items, person);
sayHi('susan');
sayHi(names.john);
sayHi(names.peter);

require('./7-mind-grenade');
