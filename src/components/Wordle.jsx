import random from 'random';
import React, { useEffect, useState } from 'react';
import WORDS from '../constants/wordList';
import Alert from './Alert';
import Row from './grid/Row';

const wordToGuess = WORDS[random.int(0, 5757)];

// eslint-disable-next-line no-console
console.log(wordToGuess);

function Wordle() {
  const rows = [];

  const [history, setHistory] = useState([]);
  const [hasShowAlert, setShowAlert] = useState(false);
  const [alertText, setAlertText] = useState('');
  const [hasMatched, setHasMatched] = useState(false);
  const [currentRow, setCurrentRow] = useState(0);

  const [guess, setGuess] = useState('');

  const showAlert = (text) => {
    setAlertText(text);
    setShowAlert(true);

    const timeout = setTimeout(() => {
      clearTimeout(timeout);
      setShowAlert(false);
    }, 5000);
  };

  const onSubmit = () => {
    if (guess.length < 5) {
      showAlert('Not enough letters');
      return;
    }

    const isInDictionary = WORDS.includes(guess);

    if (!isInDictionary) {
      showAlert('Not in word list');
    } else {
      if (wordToGuess === guess) {
        showAlert(`Genius`);
        setHasMatched(true);
      }

      setCurrentRow(currentRow + 1);

      setHistory([...history, guess]);
      setGuess('');
    }

    if (currentRow >= 5 && !hasMatched) showAlert(`${wordToGuess}`);
  };

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
    } else if (keyNormalized === 'enter') {
      onSubmit();
    } else if (guess.length < 5 && /^[a-z]$/.test(keyNormalized)) {
      setShowAlert(false);
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

  for (let i = 0; i < 6; i += 1) {
    const value = i === currentRow ? guess : history[i] ?? '';
    rows.push(
      <Row key={`row-${i}`} value={value} wordToGuess={wordToGuess} isSubmitted={currentRow > i} />,
    );
  }

  return (
    <>
      {hasShowAlert && (
        <Alert>
          <p className="text-2xl uppercase font-medium">{alertText}</p>
        </Alert>
      )}
      <div className="p-8 mt-6 md:mt-24">{rows}</div>
    </>
  );
}

export default Wordle;
