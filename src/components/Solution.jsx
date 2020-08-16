// clue = 'hobbit questions';
import React, { Component } from 'react';
import Letter from './Letter';

class Solution extends Component {
  render() {
    const { letters, solution } = this.props;

    return (
      <div className="solution-container">
        <div className="word">
          {solution.word
            .split('')
            .map((l) =>
              letters[l.toUpperCase()] ? (
                <Letter key={l} status="show" letter={l.toUpperCase()} />
              ) : (
                <Letter key={l} status="hide" letter={'__'} />
              )
            )}
        </div>
        <div className="hint">{solution.hint}</div>
      </div>
    );
  }
}

export default Solution;
