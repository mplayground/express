'use strict';

import React from 'react';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'

import UserNameText from './component/username_text.jsx';
import PasswordText from './component/password_text.jsx';
import SignupBottom from './component/signup_bottom.jsx';

export default class Movies extends React.Component {
  render(){
    return (
      <form>
        <UserNameText />
        <PasswordText />
        <SignupBottom />
      </form>
    );
  }
}
