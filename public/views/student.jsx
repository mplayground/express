import React from 'react';
import ReactDOM from 'react-dom';

export default class Student extends React.Component {

  render() {
    var vid = this.props.params.id;

    return (
        <div>
          <h1>{this.props.title}</h1>
          <h2>{vid}</h2>
          <h3>{this.props.params.id}</h3>
        </div>
    )
  }
}
