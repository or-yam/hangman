import React, { Component } from 'react';
// import Letter from './Letter';

const letters = 'abcdefghijklmnopqrstuvwxyz'

class Letters extends Component {
  render() {
    return <div>{letters[4]}</div> ;
  }
}

export default Letters;
