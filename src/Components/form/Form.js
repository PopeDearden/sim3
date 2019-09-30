import React, { Component } from 'react';
import Axios from 'axios';
import {connect} from 'react-redux'

// import noImage from './../../assets/no_image.jpg';
// import './Form.css';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      img: '',
      content: ''
    };
    this.submit = this.submit.bind(this);
  }
  async submit() {
    const id = this.props.id
    console.log(id)
    const {title, img, content} = this.state
    await Axios.post(`/api/post/${id}`, {title, img, content})
    this.props.history.push('/dashboard')
}
  render() {
    let imgSrc = this.state.img;
    return (
      <div className='Form content_box'>
          Form
        <h2 className='title'>New Post</h2>
        <div className='form_input_box'>
          <p>Title:</p>
          <input value={this.state.title} onChange={e => this.setState({ title: e.target.value })} />
        </div>
        <div className='form_img_prev' style={{ backgroundImage: `url('${imgSrc}')` }} alt='preview' ></div>
        <div className='form_input_box'>
          <p>Image URL:</p>
          <input value={this.state.img} onChange={e => this.setState({ img: e.target.value })} />
        </div>
        <div className='form_text_box'>
          <p>Content:</p>
          <textarea value={this.state.content} onChange={e => this.setState({ content: e.target.value })} />
        </div>
        <button onClick={this.submit} className='dark_button form_button'>Post</button>
      </div>
    );
  }
}
function mapStateToProps(store) {
  return {
      id: store.id
  }
}

export default connect(mapStateToProps)(Form)
