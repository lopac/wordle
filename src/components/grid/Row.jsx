import PropTypes from 'prop-types';
import React from 'react';
import Cell from './Cell';
import { getCellState } from './gridHelpers';

function Row({ value, wordToGuess, isSubmitted }) {
  const cells = [];

  for (let i = 0; i < 5; i += 1) {
    const cellValue = value[i] ?? '';

    cells.push(
      <Cell
        key={`cell-${i}`}
        value={cellValue}
        state={getCellState(i, wordToGuess, value, isSubmitted)}
      />,
    );
  }

  return <div className="flex justify-center gap-2 mb-2">{cells}</div>;
}

Row.propTypes = {
  value: PropTypes.string.isRequired,
  wordToGuess: PropTypes.string.isRequired,
  isSubmitted: PropTypes.bool.isRequired,
};

export default Row;
