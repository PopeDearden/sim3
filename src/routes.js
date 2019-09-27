import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Auth from './Components/auth/Auth';
import Dash from './Components/dash/Dash';
import Post from './Components/post/Post';
import Form from './Components/form/Form';

export default (
  <Switch>
    <Route path='/' exact component={Auth} />
    <Route path='/dashboard' component={Dash} />
    <Route path='/post/:id' component={Post} />
    <Route path='/new' component={Form} />
  </Switch>
)


// WEBPACK FOOTER //
// ./src/routes.js