"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const server = http_1.default.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our homepage');
        return;
    }
    if (req.url === '/about') {
        res.end('Here is our short history');
        return;
    }
    res.end(`
  <h1>Oops!</h1>
  <p>We can't seem to find the page you're looking for.</p>
  <a href="/">Go back home!</a>`);
    return;
});
server.listen(5001);
