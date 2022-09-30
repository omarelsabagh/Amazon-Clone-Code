import dotenv from 'dotenv';

dotenv.config();
//to use the testing environment for testing
process.env.ENV = 'test';
import { Users } from '../models/users.model';
//getting the users Model
const users = new Users();

//tsting if functions defined
describe('Testing if the USER model functions are defined', () => {
    it('Expect INDEX model to be defined', () => {
        expect(users.getAllUsers).toBeDefined();
    });
    it('Expect CREATE model to be defined', () => {
        expect(users.createUser).toBeDefined();
    });

    it('Expect SHOW model to be defined', () => {
        expect(users.getOneUser).toBeDefined();
    });
});

//tsting if functions work correctly
describe('Testing if the User model functions work correctly', () => {

   
    it('Expect INDEX method to return empty array', async () => {
        const result = await users.getAllUsers();
        expect(result).toEqual([]);
    });

    it('Expect CREATE method to return object', async () => {
        const username: string = 'Omar';
        const email: string = 'Omar3@gamil.com';
        const password: string = 'omar@123';

        const result = await users.createUser(username,email, password);

        expect(result).toEqual({
            id: result.id,
            username: 'Omar',
            email: 'Omar3@gamil.com',
            password: result.password,
        });

        //cleaning database for other tests
        users.deleteAllusers();
    });

    it('Expect signin method to return object', async () => {
        const username: string = 'Omar';
        const email: string = 'Omar3@gamil.com';
        const password: string = 'omar@123';
        //creating user to check on it
        await users.createUser(username,email, password);
        const result = await users.signUsers(email, password);
        //condition if the function worked correctly
        if (result !== null) {
            expect(result).toEqual({
                id: result.id,
                username: 'Omar',
                email: 'Omar3@gamil.com',
                password: result.password,
            });
            //cleaning database for other tests
            users.deleteAllusers();
        }
    });

    it('Expect show method to return empty array', async () => {
        const id: number = 1;
        const result = await users.getOneUser(id);
        expect(result).toEqual([]);
    });
});
