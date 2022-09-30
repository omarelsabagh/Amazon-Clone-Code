import dotenv from 'dotenv';

dotenv.config();
//to use the testing environment for testing
process.env.ENV = 'test';
import request from 'supertest';
import { app } from './../server';
import { Orders } from './../models/orders.model';
import { Users } from '../models/users.model';

const users = new Users();
const orders = new Orders();

describe('POST /orders/:id', function () {
    it('response status 401 no token', async function () {
        const username: string = 'john';
        const email: string = 'john@gmail.com';
        const password: string = 'jhon@123';
        //create user for foriegn key
        const addedUser = await users.createUser(username,email, password);
        const userId = addedUser.id;
        const response = await request(app)
            .post(`/orders/${userId}`)
            .send({ status: 'active' });

        //expect the response to be 401 because no token provided. not authurized
        expect(response.status).toEqual(401);
        //clean database
        orders.deleteAllOrders();
        users.deleteAllusers();
    });
});
