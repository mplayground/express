import React from 'react';
import { Button } from 'react-bootstrap';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'

export default class Movies extends React.Component {
  constructor(props){
    super(props)
    this.register = this.register.bind(this);
  }

  register() {

    $.ajax({
        url: "/students/signup",
        method: "post",
        data: {},
        dataType : 'json',
        cache: false,
        success: function(data) {
          console.log('data : ' + data);
        },
        error: function(request, status, error) {
          console.log("request.status : " + request.status);
        }
    });
  }

  render(){
    return (
      <Button
        bsStyle="primary"
        bsSize="large"
        onClick={this.register}
      >
        Register
      </Button>
    );
  }
}
