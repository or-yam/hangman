import React, { Component } from 'react';
// import Letter from './Letter';

const Solution = () => {
  const letters = ['_', '_', '_', '_'];
  const clue = 'hobbit questions';
  return (
    <div>
      {letters.map((l) => (
        <span> {l} </span>
      ))}
      <div>{clue}</div>
    </div>
  );
};

export default Solution;
