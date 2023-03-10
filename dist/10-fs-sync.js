"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
console.log('start');
const first = (0, fs_1.readFileSync)('./content/first.txt', 'utf8');
const second = (0, fs_1.readFileSync)('./content/second.txt', 'utf8');
console.log(first);
console.log(second);
(0, fs_1.writeFileSync)('./content/result-sync.txt', `Here is the result: ${first}, ${second}`, { flag: 'a' });
console.log('done with this task');
console.log('starting the next one');