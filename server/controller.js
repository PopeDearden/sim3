

module.exports = {


    async register(req, res) {
        const db = req.app.get('db')
        const { username, password } = req.body
        const user = await db.find_email(username)
        // if they have, stop the function
        if (user[0])
            return res.status(200).send({ message: 'Username already in use' })
        db.add_user([username, password]).then(user => 
            {{req.session.userid = user[0].user_id}
            res.status(200).send(user[0])})
            .catch(err => {
                return res.sendStatus(503)
            })
    },
    async login(req, res) {
        const db = req.app.get('db')
        const {username, password} = req.body
        const user =await  db.find_email(username)
        console.log(user[0].user_id)
       if(!user[0]) return res.status(200).send({message: 'User not found'})
       if(user[0].password === password)
       req.session.userid = user[0].user_id
       res.status(200).send(user[0])


    },
    logout(req,res){
        console.log(req.session)
        req.session.destroy()
        res.status(200).send({
            message: 'logged out'
        })

    },
    getAllPosts: async (req, res) => {
        const { userPosts, search } = req.query;
        const id = req.session.userid
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
      addPost: (req, res) => {
          console.log(req.params, req.body)
        const { id } = req.params
        const { title, img, content } = req.body
        const db = req.app.get('db')
        db.add_post([title, img, content, id])
          .then(result => {
            res.status(200).send(result)
          }
          )
      },
      getUser: async(req, res) => {
        const db= await req.app.get('db')
        const userid = req.session.userid;
        db.get_user(userid)
        .then(user => {
            res.status(200).send(user[0])
        })
      }
}