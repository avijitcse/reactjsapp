import React, { Component } from 'react';
import Nav from '../nav/Nav';

export default class Feedback extends Component {
  render() {
    return (
      <div className="feedback">
        <Nav />
        {/* { this.props.children } */}
        <h2>This is Feedback Page</h2>
      </div>
    )
  }
}
