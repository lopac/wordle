import React, { useEffect, useState } from 'react';
import Row from './grid/Row';

function Wordle() {
  const rows = [];

  const [history, setHistory] = useState([]);
  const [currentRow, setCurrentRow] = useState(0);

  const [guess, setGuess] = useState('');

  function onSubmit() {
    if (currentRow < 6) {
      setCurrentRow(currentRow + 1);
    }

    setHistory([...history, guess]);
    setGuess('');
  }

  function handleKey(key) {
    const keyNormalized = key.toString().toLowerCase();

    if (keyNormalized === 'backspace') {
      if (guess.length > 0) setGuess(guess.substring(0, guess.length - 1));
    } else if (keyNormalized === 'enter' && guess.length === 5) {
      onSubmit();
    } else if (guess.length < 5 && /^[a-z]$/.test(keyNormalized)) {
      setGuess(guess + keyNormalized);
    }
  }

  function handleKeyDown(e) {
    if (e.ctrlKey || e.metaKey || e.altKey) {
      return;
    }

    handleKey(e.key);
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 6; i++) {
    const value = i === currentRow ? guess : history[i] ?? '';
    rows.push(<Row key={`row-${i}`} value={value} />);
  }

  return <div className="p-8 mt-36">{rows}</div>;
}

export default Wordle;
