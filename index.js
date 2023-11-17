// local modules
const { a, add } = require("./local-1");
const { a: a2, add: add2 } = require("./local-2");

console.log(a2);

// Built in Modules
const path = require('path')
console.log(path.parse("D:/[Level 2 Web Development]/Mission 2 (Be a Mongoose Master)/Module 7 (Mastering the Foundation of Node js and Express)/Learning Node/index.js"))