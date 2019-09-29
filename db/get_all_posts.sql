  
SELECT posts.author_id, posts.id, title, img, content, email FROM posts
JOIN users1 ON author_id = users1.user_id
WHERE title LIKE $(search)
AND NOT CAST(posts.author_id AS INTEGER) = $(id);