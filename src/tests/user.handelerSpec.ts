import dotenv from 'dotenv';

dotenv.config();
//to use the testing environment for testing
process.env.ENV = 'test';
import request from 'supertest';
import { Users } from '../models/users.model';
import { app } from './../server';

const users = new Users();

describe('GET /users', function () {
    it('response status 401 no token', async function () {
        const response = await request(app).get('/users');
        //expect the response to be 401 because no token provided. not authurized
        expect(response.status).toEqual(401);
    });
});

describe('GET /users/:id', function () {
    it('response status 401 no token', async function () {
        const response = await request(app).get('/users/1');
        //expect the response to be 401 because no token provided. not authurized
        expect(response.status).toEqual(401);
    });
});

describe('POST /users', function () {
    it('response status 200', async function () {
        const response = await request(app)
            .post('/users')
            //request body
            .send({ username: 'john',email:'jhon@gmail.com', password: 'jhon@123' });
        expect(response.status).toEqual(200);
        users.deleteAllusers();
    });
});

describe('POST /users/signin', function () {
    it('response status 200', async function () {
        const username: string = 'john';
        const email: string = 'john@gmail.com';
        const password: string = 'jhon@123';
        await users.createUser(username,email, password);
        const response = await request(app)
            .post('/users/signin')
            //request body
            .send({ email: 'john@gmail.com', password: 'jhon@123' });
        expect(response.status).toEqual(200);
        users.deleteAllusers();
    });
});
