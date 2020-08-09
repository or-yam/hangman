import React, { Component } from 'react';

class EndGame extends Component {
  render() {
    return <div>{this.props.status === 'win' ? 'WIN' : 'LOST'}</div>;
  }
}

export default EndGame;
