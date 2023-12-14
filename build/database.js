"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
const promise_1 = require("mysql2/promise");
exports.pool = (0, promise_1.createPool)({
    connectionLimit: 5,
    host: 'bmepumiyogpxvjhqyvia-mysql.services.clever-cloud.com',
    user: 'ure9aphxdwdkx81k',
    password: 'O9aUToRmmG7v5TLbxsx7',
    port: 3306,
    database: 'bmepumiyogpxvjhqyvia',
    //database:'controlactiv2'
    //socketPath: '/control-actividades-396300:us-central1:cont-act'
});
