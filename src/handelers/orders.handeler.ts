import express, { Request, Response } from 'express';
import { Orders } from './../models/orders.model';
import authMiddleware from './../middlewares/authmiddleware';

function ordersHandeler(app: express.Application) {
    app.post('/orders/:id', express.json(), authMiddleware, Create);
}

const orders = new Orders();

//add order
async function Create(req: Request, res: Response) {
    try {
        const status: string = req.body.status;
        const userId: string = req.params.id;
        const addedOrder = await orders.addOrder(status, userId);
     
 
            res.json({
                message: 'success',
                added_order: addedOrder,
            });

        

    } catch (error) {
        res.status(400);
        res.json(error);
    }
}

export default ordersHandeler;
