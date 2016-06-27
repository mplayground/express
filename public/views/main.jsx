import React from 'react';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'

export default class Movies extends React.Component {
  render(){
    return (
      <div id='main'>
        <h1>main page</h1>
        <ul>
          <li><Link to={'/login'}>로그인</Link></li>
          <li><Link to={'/signup'}>회원가입</Link></li>
        </ul>
      </div>
    );
  }
}
