import React from 'react';
import { FormGroup } from 'react-bootstrap';
import { ControlLabel } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'

export default class Movies extends React.Component {
  render(){
    return (
      <FormGroup controlId="username">
        <ControlLabel>ID</ControlLabel>
        <FormControl type="text" placeholder="Enter username" />
      </FormGroup>
    );
  }
}
