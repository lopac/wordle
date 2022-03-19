import CellState from '../../constants/CellState';

/* eslint-disable import/prefer-default-export */
export function getCellState(index, wordToGuess, currentWord, isSubmitted) {
  const isMatch = wordToGuess[index] === currentWord[index];

  const contains = !isMatch && wordToGuess.includes(currentWord[index]);

  if (!isSubmitted) {
    if (!currentWord[index]) return CellState.INIT;
    return CellState.ACTIVE;
  }

  if (isMatch) {
    return CellState.MATCH;
  }

  if (contains) {
    return CellState.CONTAINS;
  }

  return CellState.MISS;
}
