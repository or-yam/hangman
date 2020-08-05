import React from 'react';
import './App.css';
import Letters from './components/Letters.jsx';
import Score from './components/Score.jsx';
import Solution from './components/Solution.jsx';

function App() {
  return (
    <div>
      {<Score />}
      {<Solution />}
      {<Letters />}
    </div>
  );
}

export default App;
