CREATE TABLE users1 (
user_id SERIAL PRIMARY KEY,
email VARCHAR (100),
password TEXT
);

SELECT * FROM users1;


INSERT INTO users1 (
email, password)
VALUES (
'taylor@email.com', '123');