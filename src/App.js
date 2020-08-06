import React, { Component } from 'react';
import './App.css';
import Letters from './components/Letters.jsx';
import Score from './components/Score.jsx';
import Solution from './components/Solution.jsx';

class App extends Component {
  constructor() {
    super();
    this.state = {
      // letterStatus: this.generateLettersStatus(),
      letterStatus: {
        A: false,
        B: false,
        C: false,
        D: false,
        E: false,
        F: false,
        G: false,
        H: false,
        I: false,
        J: false,
        K: false,
        L: false,
        M: true,
        N: false,
        O: false,
        P: false,
        Q: false,
        R: false,
        S: false,
        T: true,
        U: false,
        V: false,
        W: false,
        X: false,
        Y: false,
        Z: false,
      },
      solution: {
        word: 'mountain',
        hint:
          'What has roots as nobody sees,Is taller than treesUp, up it goes,And yet never grows?',
      },
      score: 5,
    };
  }

  generateLettersStatus() {
    let letterStatus = {};
    for (let i = 65; i < 91; i++) {
      letterStatus[String.fromCharCode(i)] = false;
    }
    return letterStatus;
  }

  render() {
    const { letterStatus, solution, score } = this.state;
    return (
      <div>
        {<Score score={score} />}
        {<Solution solution={solution} letters={letterStatus} />}
        {<Letters letters={letterStatus} />}
      </div>
    );
  }
}

export default App;
