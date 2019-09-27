CREATE TABLE users1 (
user_id SERIAL PRIMARY KEY,
email VARCHAR (100),
password TEXT,
profile_pic TEXT
);

SELECT * FROM users1;


INSERT INTO users1 (
email, password)
VALUES (
'taylor@email.com', '123');



-- CREATE TABLE posts (
--     user_id INTEGER,
--     author VARCHAR(100),
--     image TEXT,
--     post TEXT
-- )

select users1.user_id, posts.author, posts.post
from users1
INNER JOIN posts ON posts.user_id=users1.user_id;

INSERT INTO posts (user_id, author, image, post)
VALUES (6, 'Taylor', 'imageurlfake', 'sadfasld;fkjasfd;lkajsfd;lkadsjflaksdfjalsdkfjalsfdkjalskfdjalskdfsaldkfjalskdfjalskfdjsalfdkjalsfdkjalskdfjd')
SELECT * FROM posts;