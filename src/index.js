/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from './contexts/ThemeContext';
import './css/tailwind.css';

const root = document.getElementById('root');
ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  root,
);
