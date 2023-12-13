import { createPool } from 'mysql2/promise';

export const pool =createPool(
    {
        host:'db4free.net',
        user:'vinsoft2',
        password:'Termineit0r',
        port:3306,
        //database:'p04cont-Act'
        database:'controlactiv2'
    }
) 