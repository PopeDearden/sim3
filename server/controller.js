

module.exports = {


    async register(req, res) {
        const db = req.app.get('db')
        const { username, password } = req.body
        const user = await db.find_email(username)
        // if they have, stop the function
        if (user[0])
            return res.status(200).send({ message: 'Username already in use' })
        db.add_user([username, password]).then(user => res.status(200).send(user[0]))
            .catch(err => {
                return res.sendStatus(503)
            })
    },
    async login(req, res) {
        const db = req.app.get('db')
        const {username, password} = req.body
        const user =await  db.find_email(username)
        console.log(user[0].password)
       if(!user[0]) return res.status(200).send({message: 'Email not found'})
       if(user[0].password === password)
       res.status(200).send(user[0])


    },
    getPosts: (req,res) => {
        const db = req.app.get('db');

        db.join_tables()
        .then( posts => res.status(200).send(posts) )
        .catch(err => res.status(500).send( 'Wrong ,,getAll,, !' ))
    }

}