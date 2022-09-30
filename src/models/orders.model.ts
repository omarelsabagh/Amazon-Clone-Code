import Client from './../database';

interface Order {
    id?: number | string;
    status: string;
    user_id: number | string;
    check1?:number|string|null;
}
export class Orders {
    //add order
    async addOrder(orderStatus: string, userId: string): Promise<Order> {
        try {

       
                const conn = await Client.connect();
                const sql = `INSERT INTO orders ( status,user_id ) VALUES ($1,$2) RETURNING *`;

                const addedOrders = await conn.query(sql, [orderStatus, userId]);
    
                conn.release();
    
                return addedOrders.rows[0];
                
               
          
        } catch (error) {
            throw new Error(`couldnt add an order: ${error}`);
        }
    }

    async deleteAllOrders(): Promise<void> {
        try {
            const conn = await Client.connect();
            const sql = `DELETE FROM orders`;

            await conn.query(sql);

            conn.release();
        } catch (error) {
            throw new Error(`couldn't delete all orders: ${error}`);
        }
    }
}
