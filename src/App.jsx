import React from 'react';
import Nav from './components/Nav';
import Wordle from './components/Wordle';
import { ThemeContext } from './contexts/ThemeContext';

function App() {
  const { isDarkMode } = React.useContext(ThemeContext);

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <div className="px-8 pt-6 bg-white dark:bg-slate-900 h-screen">
        <Nav />
        <Wordle />
      </div>
    </div>
  );
}

export default App;
