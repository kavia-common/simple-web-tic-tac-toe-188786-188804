import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from './components';

// PUBLIC_INTERFACE
function App() {
  const [theme, setTheme] = useState('light');

  // Effect to apply theme to document element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="App">
      <header className="App-header">
        <button 
          className="theme-toggle" 
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          Current theme: <strong>{theme}</strong>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <div style={{ marginTop: 24, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <Button onClick={() => {}} aria-label="Primary demo button">Primary</Button>
          <Button variant="secondary" onClick={() => {}} aria-label="Secondary demo button">Secondary</Button>
          <Button variant="success" onClick={() => {}} aria-label="Success demo button" startIcon={<span aria-hidden="true">✓</span>}>
            Success
          </Button>
          <Button loading aria-label="Loading demo button">Loading</Button>
        </div>
      </header>
    </div>
  );
}

export default App;
