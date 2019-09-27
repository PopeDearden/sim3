INSERT INTO users1 (
email, password)
VALUES (
$1, $2);
SELECT * FROM users1
WHERE email = $1;