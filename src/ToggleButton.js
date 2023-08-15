import React from 'react';
import './App.css'

const ToggleButton = ({ isDarkMode, toggleMode }) => {
  return (
    <button className={isDarkMode ? 'button-dark-mode' : 'button-light-mode'} onClick={toggleMode}>
      {isDarkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default ToggleButton;