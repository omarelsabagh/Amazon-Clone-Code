import dotenv from 'dotenv';

dotenv.config();
//to use the testing environment for testing
process.env.ENV = 'test';
import { Orders } from '../models/orders.model';
import { Users } from '../models/users.model';
import { Orderproducts } from './../models/orderproduct.model';
import { Products } from './../models/products.model';
const orders = new Orders();
const users = new Users();
const orderproducts = new Orderproducts();
const products = new Products();

//testing if functions are defined
describe('Testing if the OrderProduct model functions are defined', () => {
    it('Expect create model to be defined', () => {
        expect(orderproducts.addProductToOrder).toBeDefined();
    });
});

//tsting if functions work correctly
describe('Testing if the OrderProduct model functions work correctly', () => {
    it('Expect create method to return object', async () => {
        //add user
        //for foriegn key for adding product
        const username: string = 'Omar';
        const email: string = 'Omar@gamil.com';
        const password: string = 'omar@123';

        const user = await users.createUser(username,email, password);

        //add product
        //for the product id
        const title: string = 'Samsung';
        const price: number = 2000;
        const description:string = "good product";
        const category:string = "mobile";
        const image:string = "myImg"

        const product = await products.addProductToDB(title, price,description,category,image);
        //add order by user
        const status: string = 'active';

        const userID: string = user.id as string;
        const order = await orders.addOrder(status, userID);

        //add product to order
        const quantityOrderProduct: number = parseInt('20');
        //order id forign key from orders table id
        const orderId: string = order.id as string;
        //product id forign key from products table id
        const productId: string = product.id as string;
        const result = await orderproducts.addProductToOrder(
            quantityOrderProduct,
            orderId,
            productId
        );

        expect(result).toEqual({
            quantity: 20,
            order_id: `${orderId}`,
            product_id: `${productId}`,
        });

        //clean database
        await orderproducts.deleteAllOrderProducts();
        await orders.deleteAllOrders();
        await products.deleteAllProducts();
        await users.deleteAllusers();
    });
});
