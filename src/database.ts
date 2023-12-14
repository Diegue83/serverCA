import { createPool } from 'mysql2/promise';

export const pool =createPool(
    {
        connectionLimit: 5,
        host:'bmepumiyogpxvjhqyvia-mysql.services.clever-cloud.com',
        user:'ure9aphxdwdkx81k',
        password:'O9aUToRmmG7v5TLbxsx7',
        port:3306,
        database:'bmepumiyogpxvjhqyvia',
        //database:'controlactiv2'
        //socketPath: '/control-actividades-396300:us-central1:cont-act'
    }
) 