import random from 'random';
import React, { useEffect, useState } from 'react';
import Alert from './Alert';
import Row from './grid/Row';

const dictionary = ['adieu', 'basic', 'thing', 'stuff', 'water', 'quant'];

const wordToGuess = dictionary[random.int(0, 5)];

function Wordle() {
  const rows = [];

  const [history, setHistory] = useState([]);
  const [hasShowAlert, setShowAlert] = useState(false);
  const [hasMatched, setHasMatched] = useState(false);
  const [currentRow, setCurrentRow] = useState(0);

  const [guess, setGuess] = useState('');

  function onSubmit() {
    if (currentRow < 6) {
      const isInDictionary = dictionary.includes(guess);

      if (!isInDictionary) {
        setShowAlert(true);

        const timeout = setTimeout(() => {
          clearTimeout(timeout);
          setShowAlert(false);
        }, 3000);
      } else {
        if (wordToGuess === guess) setHasMatched(true);

        setCurrentRow(currentRow + 1);

        setHistory([...history, guess]);
        setGuess('');
      }
    }
  }

  function handleKey(key) {
    if (hasMatched) {
      return;
    }

    const keyNormalized = key.toString().toLowerCase();

    if (keyNormalized === 'backspace') {
      if (guess.length > 0) {
        setGuess(guess.substring(0, guess.length - 1));
      }

      setShowAlert(false);
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
    rows.push(
      <Row key={`row-${i}`} value={value} wordToGuess={wordToGuess} isSubmitted={currentRow > i} />,
    );
  }

  return (
    <>
      {hasShowAlert && (
        <Alert>
          <p className="text-2xl uppercase font-medium">Not in word list</p>
        </Alert>
      )}
      <div className="p-8 mt-6 md:mt-24">{rows}</div>
    </>
  );
}

export default Wordle;
