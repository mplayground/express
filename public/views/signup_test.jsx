'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import { FormGroup } from 'react-bootstrap';
import { ControlLabel } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

class UsernameText extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.usernameHandleChange = this.usernameHandleChange.bind(this);
    this.state = {username: ''};
  }

  usernameHandleChange(e) {
    this.setState({username: e.target.value});
  }

  render(){
    return (
      <FormGroup controlId="username">
        <ControlLabel name={this.state.username}>ID</ControlLabel>
        <FormControl type="text" onChange={this.usernameHandleChange} placeholder="Enter username" />
      </FormGroup>
    );
  }
}

class PasswordText extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.passwordHandleChange = this.passwordHandleChange.bind(this);
    this.state = {password: ''};
  }

  passwordHandleChange(e) {
    this.setState({password: e.target.value});
  }

  render(){
    return (
      <FormGroup controlId="password">
        <ControlLabel name={this.state.password}>Password</ControlLabel>
        <FormControl type="password" onChange={this.passwordHandleChange} placeholder="Enter password"  />
      </FormGroup>
    );
  }
}

class RegisterButton extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.register = this.register.bind(this);
  }

  register() {
    console.log('test');
  }

  render(){
    return (
      <Button bsStyle="primary" bsSize="large" onClick={this.register}>
        Register
      </Button>
    );
  }
}

export default class Signup extends React.Component {
  constructor(props, context) {
    super(props, context);
  };

  render(){
    return (
      <form>
        <UsernameText />
        <PasswordText />
        <RegisterButton />
      </form>
    );
  }
}
