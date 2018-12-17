import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Merry Xmas Sweet Bug
          </p>
          <a
            className="App-link"
            href="https://www.bible.com/bible/111/1CO.13.4-8.NIV"
            target="_blank"
            rel="noopener noreferrer"
          >
            Love Is Patient
          </a>
        </header>
      </div>
    );
  }
}

export default App;
