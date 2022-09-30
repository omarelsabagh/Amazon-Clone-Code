import express, { Request, Response } from 'express';
import { ProductsInOrder } from './../models/getProductsFromOrder.model';

function getProductsFromOrderHandeler(app: express.Application) {
    app.get('/productinorder/:id', express.json(), index);
 
}

const productFromOrdr = new ProductsInOrder;

async function index(req: Request, res: Response) {
    try {
   
         
        const response = await productFromOrdr.getAllProducts(req.params.id);

        res.json({ message: 'get all products in order success', response ,number_of_products:response.length });
    } catch (error) {
        res.status(400);
        res.json(error);
    }
}

export default getProductsFromOrderHandeler;