import PropTypes from 'prop-types';
import React from 'react';
import { useSetRecoilState } from 'recoil';
import { keyboardColorsMapState } from '../../atoms';
import CellState from '../../constants/CellState';
import Cell from './Cell';
import { getCellState } from './gridHelpers';

function Row({ value, wordToGuess, isSubmitted }) {
  const setKeyboardColorsMap = useSetRecoilState(keyboardColorsMapState);

  const cells = [];

  for (let i = 0; i < 5; i += 1) {
    const letter = value[i] ?? '';

    const cellState = getCellState(i, wordToGuess, value, isSubmitted);

    if (letter !== '') {
      setKeyboardColorsMap((prev) => {
        let val = null;

        if (!prev[letter] || prev[letter] === CellState.ACTIVE) {
          val = cellState;
        }
        // color already defined
        else {
          val = prev[letter];
        }

        return {
          ...prev,
          [letter]: val,
        };
      });
    }

    cells.push(<Cell key={`cell-${i}`} value={letter} state={cellState} />);
  }

  return <div className="flex justify-center gap-2 mb-2">{cells}</div>;
}

Row.propTypes = {
  value: PropTypes.string.isRequired,
  wordToGuess: PropTypes.string.isRequired,
  isSubmitted: PropTypes.bool.isRequired,
};

export default Row;
