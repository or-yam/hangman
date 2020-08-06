import React, { Component } from 'react';

const Letter = (props) => {
  const { letter, status } = props;
  return letter ? (
    <span className={status}>{letter}</span>
  ) : (
    <span className={status}>{letter}</span>
  );
};
export default Letter;
