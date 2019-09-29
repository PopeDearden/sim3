SELECT posts.id, title, img, content, email FROM posts
JOIN users1 ON author_id = users1.user_id
WHERE posts.id = $1;