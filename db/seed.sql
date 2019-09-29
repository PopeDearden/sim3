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



CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(45),
    img TEXT,
    content TEXT,
    author_id INTEGER REFERENCES users1(user_id)
);

select users1.user_id, posts.author, posts.post
from users1
INNER JOIN posts ON posts.user_id=users1.user_id;

INSERT INTO posts (user_id, author, image, post)
VALUES (6, 'Taylor', 'imageurlfake', 'sadfasld;fkjasfd;lkajsfd;lkadsjflaksdfjalsdkfjalsfdkjalskfdjalskdfsaldkfjalskdfjalskfdjsalfdkjalsfdkjalskdfjd')
SELECT * FROM posts;