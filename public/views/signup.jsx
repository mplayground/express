'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import { FormGroup } from 'react-bootstrap';
import { ControlLabel } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

export default class Signup extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.usernameHandleChange = this.usernameHandleChange.bind(this);
    this.passwordHandleChange = this.passwordHandleChange.bind(this);
    this.register = this.register.bind(this);

    this.state = {
      username: '',
      password: ''
    };
  };

  usernameHandleChange(e) {
    this.setState({username: e.target.value});
  }

  passwordHandleChange(e) {
    this.setState({password: e.target.value});
  }

  register() {
    console.log('username : ' + this.state.username);
    console.log('password : ' + this.state.password);

    $.ajax({
      url: '/students/signup',
      method: "post",
      data: {username:this.state.username, password:this.state.password},
      dataType : 'text',
      cache: false,
      success: function(data) {
        console.log("data : " + data);
        alert('등록 성공');
      }.bind(this),
      error: function(request, status, error) {
        console.log("request.status : " + request.status);
        alert('등록 실패');
      }.bind(this)
    });

    this.setState({username: ''});
    this.setState({password: ''});
  }

  render(){
    return (
      <form>
        <FormGroup controlId="username">
          <ControlLabel>ID</ControlLabel>
          <FormControl type="text" value={this.state.username} onChange={this.usernameHandleChange} placeholder="Enter username" />
        </FormGroup>
        <FormGroup controlId="password">
          <ControlLabel>Password</ControlLabel>
          <FormControl type="password" value={this.state.password} onChange={this.passwordHandleChange} placeholder="Enter password"  />
        </FormGroup>
        <Button bsStyle="primary" bsSize="large" onClick={this.register}>
          Register
        </Button>
      </form>
    );
  }
}
