select users1.user_id, posts.author, posts.post
from users1
INNER JOIN posts ON posts.user_id=users1.user_id;