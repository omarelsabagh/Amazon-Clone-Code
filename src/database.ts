import dotenv from 'dotenv';
import { Pool , PoolConfig } from 'pg';

dotenv.config();

//destructing env variables
const  {
    POSTGRES_HOST,
    POSTGRES_DB,
    POSTGRES_USER,
    POSTGRES_PASSWORD,
    PG_PORT
} = process.env;


const devComfig = `postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}:${PG_PORT}/${POSTGRES_DB}`
const proConfig =  process.env.DATABASE_URL
// `postgres://jmibpuccodogbq:288d25855c1a39eb5e2fe663f92bafec37d5bdd4db9b0bb695f55907dfb00c24@ec2-54-91-223-99.compute-1.amazonaws.com:5432/dckfpem231vnaf`
//creating connection
const Client = new Pool({
    connectionString:proConfig,
});

export default Client;
