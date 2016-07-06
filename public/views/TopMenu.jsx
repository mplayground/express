'use strict';

import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import cookie from 'react-cookie';
import { If, Then, Else } from 'react-if';

class LoginBefore extends React.Component {
  render() {
    return (
      <Nav pullRight>
        <NavItem eventKey={3} href="/login">로그인</NavItem>
        <NavItem eventKey={4} href="/signup">회원가입</NavItem>
        <NavItem eventKey={5} href="/registerForTeacher">강사지원</NavItem>
      </Nav>
    );
  }
}

class LoginAfter extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.logout = this.logout.bind(this);
  };

  logout() {
    cookie.remove('access_token', { path: '/' });
    location.href ='/';
  }

  render() {
    return (
      <Nav pullRight>
        <NavItem eventKey={6} href="/">프로필</NavItem>
        <NavItem eventKey={7} onClick={this.logout}>로그아웃</NavItem>
      </Nav>
    );
  }
}

export default class TopMenu extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      access_token: cookie.load('access_token'),
      is_login: false,
      login_menu:''
    };

    if(this.state.access_token != undefined) {
      this.state.is_login = true;
    }
  };

  // constructor 또는  render에서 if/else 처리를 할시에 오류가 발생.. 그래서 여기에 함
  componentDidMount() {
    if(this.state.is_login) {
      this.setState({login_menu: <LoginAfter />});
    } else {
      this.setState({login_menu: <LoginBefore />});
    }
  }

  render() {
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
        {this.state.login_menu}
      </Navbar>
    );
  }
}
