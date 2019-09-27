import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

import { updateUser, logout } from './../../ducks/reducer';

// import homeLogo from './../../assets/home_logo.png';
// import newLogo from './../../assets/new_logo.png';
// import logoutLogo from './../../assets/shut_down.png';
// import './SideNav.css';

class SideNav extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }
  componentDidMount() {
    axios.get('/api/v2/auth/me')
      .then(res => {
        this.props.updateUser(res.data);
      })
  }
  logout() {
    axios.post('/api/v2/auth/logout')
      .then(res => this.props.logout())
  }
  render() {
    
    if (this.props.location.pathname !== '/') {
      return (
        <div className='Nav'>
          <div className='nav_profile_container'>
            <div className='nav_profile_pic'></div>
            <p>{this.props.username}</p>
          </div>
          <div className='nav_links'>
            <Link to='/dashboard'><button>Home</button></Link>
            <div>
            <Link to='/new'><button>New</button></Link>
            </div>
          </div>
          <Link to='/' onClick={this.logout}><button>Logout</button></Link>
        </div>
      )
    } else {
      return null
    }
  }
}
function mapStateToProps(state) {
  return state;
}
export default withRouter(connect(mapStateToProps, { updateUser, logout })(SideNav));


// WEBPACK FOOTER //
// ./src/components/side-nav/SideNav.js