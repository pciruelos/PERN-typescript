import {Pool} from 'pg';


export const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    password: 'password',
    database: 'pern',
    port: 5432

});