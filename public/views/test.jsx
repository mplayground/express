import React from 'react';
import ReactDOM from 'react-dom';

export default class Test extends React.Component {

  render() {
    console.log(this.props.title);

    return (
      <h1>111{this.props.title}</h1>
    )
  }
}
