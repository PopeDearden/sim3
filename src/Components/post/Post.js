import React, { Component } from "react";
import Axios from "axios";

export default class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      img: "",
      content: "",
      username: "",
    };
  }

  componentDidMount() {
    this.getPost()
  }

  async getPost() {
    const {id} = this.props.match.params
    const postInfo = await Axios.get(`/api/post/${id}`)
    const {title, img, content, email} = postInfo.data[0]
    this.setState({
      title, img, content, username: email
    })
  }

  render() {
    const { title, img, content, username } = this.state;
    const profile = 'https://robohash.org/'+ username
    return (
      <div>
        <div className="post-info">
          <h1>{title}</h1>
          <img src={img} alt="" />
          <p>{content}</p>
        </div>
        <div className="poster">
          <h2>{username}</h2>
          <img src={profile} alt={profile}/>
          <div className='post_profile_pic' style={{ backgroundImage: `url('https://robohash.org/${username}')`}}></div>
        </div>
      </div>
    );
  }
}