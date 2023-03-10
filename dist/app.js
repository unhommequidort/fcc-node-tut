"use strict";
// npm - global command, comes with node
// npm --version
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// local dependency - use it only in this particular project
// npm i <package name>
// global dependency - use it in any project
// npm install -g <package name>
// sudo install -g <package name> (mac)
// package.json - manifest file (stores important info about project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)
const lodash_1 = __importDefault(require("lodash"));
const items = [1, [2, [3, [4]]]];
const newItems = lodash_1.default.flattenDeep(items);
console.log(newItems);
