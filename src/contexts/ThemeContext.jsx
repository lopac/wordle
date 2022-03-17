import React, { createContext, useState } from 'react';

const ThemeContext = createContext({ isDarkMode: undefined, setMode: () => {} });

// eslint-disable-next-line react/prop-types
function ThemeProvider({ children }) {
  const previous = localStorage.getItem('isDarkMode') ?? false;

  const [isDarkMode, setDarkMode] = useState(previous);

  const setMode = () => {
    const newState = !isDarkMode;
    localStorage.setItem('isDarkMode', newState.toString());
    setDarkMode(newState);
  };

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  return <ThemeContext.Provider value={{ isDarkMode, setMode }}>{children}</ThemeContext.Provider>;
}

export { ThemeContext, ThemeProvider };
