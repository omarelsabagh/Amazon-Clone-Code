import express, { Request, Response } from 'express';
import { Orderproducts } from './../models/orderproduct.model';
import authMiddleware from './../middlewares/authmiddleware';

function orderProductHandeler(app: express.Application) {
    app.post(
        '/orders/:id/products',
        express.json(),
        authMiddleware,
        addProductToOrder
    );
}

const orderproducts = new Orderproducts();
async function addProductToOrder(req: Request, res: Response) {
    try {
        
        const quantity: number = parseInt(req.body.quantity);
        const orderId: string = req.params.id;
        const productId: string = req.body.productid;

        const addedProduct = await orderproducts.addProductToOrder(
            quantity,
            orderId,
            productId
        );
        res.json({
            message: 'product added to order successfully',
            addedProduct: addedProduct,
        });
    } catch (error) {
        res.status(400);
        res.json(error);
    }
}

export default orderProductHandeler;
