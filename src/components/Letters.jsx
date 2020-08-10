import React, { Component } from 'react';
import Letter from './Letter';

class Letters extends Component {
  render() {
    const { letters } = this.props;
    return Object.keys(letters).map((l) =>
      letters[l] ? (
        <Letter
        key={l}
          selectLetter={this.props.selectLetter}
          status="checked"
          letter={l}
        />
      ) : (
        <Letter 
        key={l}
          selectLetter={this.props.selectLetter}
          status="unChecked"
          letter={l}
        />
      )
    );
  }
}

export default Letters;
