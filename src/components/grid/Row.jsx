import PropTypes from 'prop-types';
import React from 'react';
import { useSetRecoilState } from 'recoil';
import { keyboardColorsMapState } from '../../atoms';
import CellState from '../../constants/CellState';
import Cell from './Cell';

function Row({ value, wordToGuess, isSubmitted }) {
  const setKeyboardColorsMap = useSetRecoilState(keyboardColorsMapState);

  const getCellState = (index, letter) => {
    const isMatch = wordToGuess[index] === letter;

    const contains = !isMatch && wordToGuess.includes(letter);

    if (!isSubmitted) {
      if (!letter) return CellState.INIT;
      return CellState.ACTIVE;
    }

    if (isMatch) {
      return CellState.MATCH;
    }

    if (contains) {
      return CellState.CONTAINS;
    }

    return CellState.MISS;
  };

  const getKeyState = (index, letter, prevState) => {
    const newState = getCellState(index, letter);

    if (
      !prevState ||
      prevState === CellState.ACTIVE ||
      (prevState === CellState.CONTAINS && newState === CellState.MATCH)
    ) {
      return newState;
    }

    return prevState;
  };

  const cells = [];

  for (let i = 0; i < 5; i += 1) {
    const letter = value[i] ?? '';

    const cellState = getCellState(i, letter);

    if (letter !== '') {
      setKeyboardColorsMap((prev) => ({
        ...prev,
        [letter]: getKeyState(i, letter, prev[letter]),
      }));
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
