// clue = 'hobbit questions';
import React, { Component } from 'react';
import Letter from './Letter';

class Solution extends Component {
  render() {
    const { letters, solution } = this.props;

    return (
      <div>
        <div className='word'>
          {solution.word
            .split('')
            .map((l) =>
              letters[l.toUpperCase()] ? (
                <Letter  status="show" letter={l.toUpperCase()}  />
              ) : (
                <Letter  status="hide" letter={'__'} />
              )
            )}
        </div>
        <div>{solution.hint}</div>
      </div>
    );
  }
}

export default Solution;
