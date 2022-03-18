/* eslint-disable react/button-has-type */
import React from 'react';
import ThemeModeBtn from './components/ThemeModeBtn';
import { ThemeContext } from './contexts/ThemeContext';

function App() {
  const { isDarkMode } = React.useContext(ThemeContext);

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <div className="px-8 pt-6 bg-white dark:bg-slate-900 h-screen">
        <div className="grid grid-cols-3 gap-0">
          <div />
          <h2 className="text-center font-nova tracking-widest text-5xl dark:text-white">Wordle</h2>
          <div className="text-right">
            <ThemeModeBtn />
          </div>
        </div>
        <hr className="mt-6" />
      </div>
    </div>
  );
}

export default App;
