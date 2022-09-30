import express from 'express';
import productsHandeler from './../handelers/products.handeler';
import ordersHandeler from './../handelers/orders.handeler';
import userHandeler from './../handelers/users.handeler';
import orderProductHandeler from './../handelers/orderproduct.handeler';
import getProductsFromOrderHandeler from './../handelers/getProductsFromOrder.handler';

getProductsFromOrderHandeler

//not to import all the functions in the server file




export function fetchAllRoutes(app: express.Application) {
    productsHandeler(app);
    userHandeler(app);
    ordersHandeler(app);
    orderProductHandeler(app);
    getProductsFromOrderHandeler(app);
}
