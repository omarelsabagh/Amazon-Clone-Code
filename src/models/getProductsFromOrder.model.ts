import Client from './../database';

export class ProductsInOrder {


    async getAllProducts(orderId:number|string){
        try {
            const conn = await Client.connect();
            const sql = `SELECT * FROM products INNER JOIN order_products ON order_products.order_id = $1 AND products.id = order_products.product_id`;

            const allProducts = await conn.query(sql,[orderId]);

            conn.release();
            return allProducts.rows;
        } catch (error) {
            throw new Error(`couldn't get all users: ${error}`);
        }
    }

}