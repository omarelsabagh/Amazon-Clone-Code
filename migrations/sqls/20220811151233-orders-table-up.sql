/* Replace with your SQL commands */
CREATE TABLE orders(
    id SERIAL PRIMARY KEY,
    status VARCHAR(50),
    user_id BIGINT REFERENCES users(id) NOT NULL
);