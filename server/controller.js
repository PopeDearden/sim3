

module.exports = {


    async register(req, res) {
        const db = req.app.get('db')
        const { username, password } = req.body
        const user = await db.find_email(username)
        // if they have, stop the function
        if (user[0])
            return res.status(200).send({ message: 'Username already in use' })
        db.add_user([username, password]).then(user => res.status(200).send(user))
            .catch(err => {
                return res.sendStatus(503)
            })
    }

}