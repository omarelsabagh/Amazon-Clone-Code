import express, { Request, Response } from 'express';
import { Products } from '../models/products.model';
import authMiddleware from './../middlewares/authmiddleware';

function productsHandeler(app: express.Application) {
    app.post('/products', express.json(),create);
    app.get('/products', express.json(), index);
    app.get('/products/:id', express.json(), show);
}

const products = new Products();

//create product

async function create(req: Request, res: Response) {
    try {
        const title: string = req.body.title;
        const price: number = parseInt(req.body.price);
        const description: string = req.body.description;
        const category: string = req.body.category;
        const image: string = req.body.image;

        

        const addedProduct = await products.addProductToDB(title, price,description,category,image);
        res.json({
            message: 'product added to DB successfully',
            addedProduct: addedProduct,
        });
    } catch (error) {
        res.status(400);
        res.json(error);
    }
}

//get all products

async function index(_req: Request, res: Response) {
    try {
        const allProducts = await products.showAllProducts();

        res.json({
            message: 'get all products from DB successfully',
            allProducts,
        });
    } catch (error) {
        res.status(400);
        res.json(error);
    }
}

//get one user

async function show(req: Request, res: Response) {
    try {
        const userId = parseInt(req.params.id);
        const oneProduct = await products.getOneProduct(userId);

        res.json({
            message: 'get one product from DB successfully',
            oneProduct,
        });
    } catch (error) {
        res.status(400);
        res.json(error);
    }
}
export default productsHandeler;
