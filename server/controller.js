

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
    getAllPosts: async (req, res) => {
        const { userPosts, id, search } = req.query;
        // console.log(userPosts, id, search)
        const db = req.app.get("db");
        console.log(id)
        let postsArr = [];
        if (userPosts === "true" && search) {
          postsArr = await db.get_all_posts({ search: `%${search}%`, id: "0" });
        }
        if (userPosts === "false" && !search) {
          postsArr = await db.get_all_posts({ search: "%%", id:  id  });
        }
        if (userPosts === "false" && search) {
          postsArr = await db.get_all_posts({ search: `%${search}%`, id:  id  });
        }
        if (userPosts === "true" && !search) {
          postsArr = await db.get_all_posts({ search: "%%", id: "0" });
        }
        res.status(200).send(postsArr);
      },
      getPost: async (req, res) => {
        const id = req.params.id
        const db = req.app.get('db')
        const post = await db.get_post(id)
        res.status(200).send(post)
      },
}