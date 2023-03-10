"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
console.log('start');
(0, fs_1.readFile)('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    const first = result;
    (0, fs_1.readFile)('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        const second = result;
        (0, fs_1.writeFile)('./content/result-async.txt', `Here is the result: ${first} ${second}`, () => {
            console.log('done with this task!');
        });
    });
});
console.log('starting next task!');
