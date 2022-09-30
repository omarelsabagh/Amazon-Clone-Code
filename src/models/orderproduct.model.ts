import Client from './../database';

interface Orderproduct {
    id?: number | string;
    quantity: number | string;
    order_id: number | string;
    product_id: number | string;
}
export class Orderproducts {
    //add product to order
    async addProductToOrder(
        quantity: number,
        orderId: string,
        productId: string
    ): Promise<Orderproduct> {
        try {
            const conn = await Client.connect();
            const sql = `INSERT INTO order_products ( quantity,order_id,product_id) VALUES ($1,$2,$3) RETURNING *`;

            const result = await conn.query(sql, [
                quantity,
                orderId,
                productId,
            ]);
            const order = result.rows[0];

            conn.release();

            return order;
        } catch (error) {
            throw new Error(`couldnt add product to an order: ${error}`);
        }
    }

    //delete all order products

    async deleteAllOrderProducts(): Promise<void> {
        try {
            const conn = await Client.connect();
            const sql = `DELETE FROM order_products`;

            await conn.query(sql);

            conn.release();
        } catch (error) {
            throw new Error(`couldn't delete all users: ${error}`);
        }
    }
}
