import PropTypes from 'prop-types';
import React from 'react';
import Cell from './Cell';

function Row({ value, wordToGuess, isSubmitted }) {
  const cells = [];

  function getBgClass(i) {
    const isMatch = wordToGuess[i] === value[i];
    const contains = wordToGuess.includes(value[i]);

    if (!isSubmitted) {
      return null;
    }

    if (isMatch) {
      return 'match';
    }

    if (contains) {
      return 'contains';
    }

    return 'miss';
  }

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 5; i++) {
    const cellValue = value[i] ?? '';

    cells.push(<Cell key={`cell-${i}`} value={cellValue} bgClass={getBgClass(i)} />);
  }

  return <div className="flex justify-center gap-2 mb-2">{cells}</div>;
}

Row.propTypes = {
  value: PropTypes.string.isRequired,
  wordToGuess: PropTypes.string.isRequired,
  isSubmitted: PropTypes.bool.isRequired,
};

export default Row;
