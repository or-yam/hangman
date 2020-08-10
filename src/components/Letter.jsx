import React from 'react';

const Letter = (props) => {
  const { letter, status } = props;

  const selectLetter = () => {
    return props.selectLetter ? props.selectLetter(letter) : null;
  };

  return (
    <span onClick={selectLetter} className={`${status} letter`}>
      {letter}
    </span>
  );
};
export default Letter;
