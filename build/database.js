"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
const promise_1 = require("mysql2/promise");
exports.pool = (0, promise_1.createPool)({
    host: 'db4free.net',
    user: 'vinsoft2',
    password: 'Termineit0r',
    port: 3306,
    //database:'p04cont-Act'
    database: 'controlactiv2'
});
