require('dotenv').config()
const express = require('express')
const massive = require ('massive')
const {SERVER_PORT, CONNECTION_STRING, SECRET} = process.env
const controller = require ('./controller')
const session = require ('express-session')

const app = express()

app.use(
    session({
        secret: SECRET,
        resave: false, 
        saveUninitialized: true,
    })
)
massive(CONNECTION_STRING)
.then(dbInstance => {
    app.set("db", dbInstance)
},
console.log('db is working'))
.catch(err=>console.log(err))

app.use(express.json())

app.post('/auth/register', controller.register)
app.post('/auth/login', controller.login)
app.get('/api/posts', controller.getAllPosts)
app.get('/api/post/:id', controller.getPost)
app.post('/api/post/:id', controller.addPost)
app.post('/api/auth/logout', controller.logout)
app.get('/api/auth/me', controller.getUser)


app.listen(SERVER_PORT, ()=> console.log(`${SERVER_PORT} wild chickens laying eggs`))