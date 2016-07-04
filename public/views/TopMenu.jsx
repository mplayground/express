'use strict';

import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import cookie from 'react-cookie';

class Loginbefore extends React.Component {
  render() {
    return(
      <Nav pullRight>
        <NavItem eventKey={3} href="/login">로그인</NavItem>
        <NavItem eventKey={4} href="/signup">회원가입</NavItem>
        <NavItem eventKey={5} href="/registerForTeacher">강사지원</NavItem>
      </Nav>
    )
  }
}

class LoginAfter extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.logout = this.logout.bind(this);
  };

  logout() {
    cookie.remove('access_token', { path: '/' });
    location.href = '/';
  }

  render() {
    return (
      <Nav pullRight>
        <NavItem eventKey={3} href="/">프로필</NavItem>
        <NavItem eventKey={4} onClick={this.logout}>로그아웃</NavItem>
      </Nav>
    )
  }
}

export default class TopMenu extends React.Component {

  render(){

    // 토큰 존재여부로 로그인 체크
    var access_token = cookie.load('access_token');

    console.log(access_token);

    var LoginTop;
    if(access_token != undefined) {
      LoginTop = LoginAfter;
    } else {
      LoginTop = Loginbefore;
    }

    // 뭔가 state를 활용하여 깔끔하게 적용할 수 있을거 같은 생각이 들긴한데..
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">mPlayGround</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="/teachers">강사</NavItem>
          <NavItem eventKey={2} href="/lessons">클래스</NavItem>
        </Nav>
        <LoginTop />
      </Navbar>
    );
  }
}
