'use strict';

import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

export default class TopMenu extends React.Component {
  render(){
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">mPlayGround</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="/teachers">강사</NavItem>
          <NavItem eventKey={2} href="/lessons">클래스</NavItem>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={3} href="/login">로그인</NavItem>
          <NavItem eventKey={4} href="/register">회원가입</NavItem>
          <NavItem eventKey={5} href="/registerForTeacher">강사지원</NavItem>
        </Nav>
      </Navbar>
    );
  }
}
