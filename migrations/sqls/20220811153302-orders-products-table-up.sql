/* Replace with your SQL commands */

CREATE TABLE order_products(
quantity integer,
order_id BIGINT REFERENCES orders(id),
product_id BIGINT REFERENCES products(id)
 );