/* Replace with your SQL commands */

CREATE TABLE products(
 id SERIAL PRIMARY KEY,
 title VARCHAR(50) NOT NULL,
 price INTEGER NOT NULL,
 description TEXT NOT NULL,
 category VARCHAR NOT NULL,
 image VARCHAR NOT NULL
 );