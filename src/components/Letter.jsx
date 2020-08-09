import React from 'react';

const Letter = (props) => {
  const { letter, status } = props;

  const selectLetter = () => {
    props.selectLetter(letter);
  };

  return (
    <span onClick={selectLetter} className={status}>
      {letter}
    </span>
  );
};
export default Letter;
