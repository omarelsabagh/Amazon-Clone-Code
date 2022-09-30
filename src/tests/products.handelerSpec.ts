import dotenv from 'dotenv';

dotenv.config();
//to use the testing environment for testing
process.env.ENV = 'test';
import request from 'supertest';
import { app } from './../server';
import { Products } from './../models/products.model';

const products = new Products();

describe('GET /products', function () {
    it('response status 200', async function () {
        const response = await request(app).get('/products');
        expect(response.status).toEqual(200);
    });
});

describe('GET /products/:id', function () {
    it('response status 200', async function () {
        const response = await request(app).get('/products/1');
        expect(response.status).toEqual(200);
    });
});

describe('POST /products', function () {
    it('response status 200', async function () {
        const response = await request(app)
            .post('/products')
            .send({ title: 'Nokia', price: 2000 ,description:"good product",category:"mobile",image:"myImg" });
        expect(response.status).toEqual(200);
        products.deleteAllProducts();
    });
});
