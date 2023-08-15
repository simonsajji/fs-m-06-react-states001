import React, { useState } from 'react';
import './App.css';
import ToggleButton from './ToggleButton';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };
  return (
     <div className={isDarkMode ? 'dark-mode App' : 'light-mode App'}>
      <div className='d-flex j-space p-20 align-center'>
        <div className={isDarkMode ? 'heading-dark heading' : 'heading-light heading'}>Overreacted</div>
        <ToggleButton isDarkMode={isDarkMode} toggleMode={toggleMode} />
      </div>
      <div className='p-20  flex-column'>
        <h2 className={isDarkMode ? 'h2-dark' : 'h2-light'}>WET CodeBase</h2>
        <small className={isDarkMode ? 'small-dark' : 'small-light'}>24th January   <i>11 min read</i></small>
        <small className={isDarkMode ? 'small-dark' : 'small-light'}>Come play eiht me</small>
      </div>
      <div className='p-20  flex-column'>
        <h2 className={isDarkMode ? 'h2-dark' : 'h2-light'}>Goodbye, Clean code</h2>
        <small className={isDarkMode ? 'small-dark' : 'small-light'}>24th January   <i>11 min read</i></small>
        <small className={isDarkMode ? 'small-dark' : 'small-light'}>Come play eiht me</small>
      </div>
      <div className='p-20  flex-column'>
        <h2 className={isDarkMode ? 'h2-dark' : 'h2-light'}>What are the React Team Principles</h2>
        <small className={isDarkMode ? 'small-dark' : 'small-light'}>23rd February  <i>11 min read</i></small>
        <small className={isDarkMode ? 'small-dark' : 'small-light'}>Review what are the principles!</small>
      </div>
      <div className='p-20  flex-column'>
        <h2 className={isDarkMode ? 'h2-dark' : 'h2-light'}>My Decade in Review</h2>
        <small className={isDarkMode ? 'small-dark' : 'small-light'}>24th January   <i>11 min read</i></small>
        <small className={isDarkMode ? 'small-dark' : 'small-light'}>A Personal reflection</small>
      </div>
  
   </div>
  );
}

export default App;
