require('dotenv').config()
const express = require('express')
const massive = require ('massive')
const {SERVER_PORT, CONNECTION_STRING} = process.env
const controller = require ('./controller')

const app = express()

massive(CONNECTION_STRING)
.then(dbInstance => {
    app.set("db", dbInstance)
},
console.log('db is working'))
.catch(err=>console.log(err))

app.use(express.json())

app.post('/auth/register', controller.register)

app.listen(SERVER_PORT, ()=> console.log(`${SERVER_PORT} wild chickens laying eggs`))