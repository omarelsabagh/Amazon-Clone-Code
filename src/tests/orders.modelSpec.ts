import dotenv from 'dotenv';

dotenv.config();
//to use the testing environment for testing
process.env.ENV = 'test';
import { Orders } from '../models/orders.model';
import { Users } from '../models/users.model';
const orders = new Orders();
const users = new Users();

//tsting if functions defined
describe('Testing if the Order model functions are defined', () => {
    it('Expect index model to be defined', () => {
        expect(orders.addOrder).toBeDefined();
    });
});

//tsting if functions work correctly
describe('Testing if the Order model functions work correctly', () => {
    it('Expect create method to return object', async () => {
        const username: string = 'Omar';
        const email: string = 'Omar@gamil.com';
        const password: string = 'omar@123';

        //create user for foriegn key
        const user = await users.createUser(username,email, password);
        const status: string = 'active';
        const userID: string = user.id as string;
        const result = await orders.addOrder(status, userID);

        expect(result).toEqual({
            id: result.id,
            status: 'active',
            user_id: `${userID}`,
        });

        //clean database
        await orders.deleteAllOrders();
        await users.deleteAllusers();
    });
});
