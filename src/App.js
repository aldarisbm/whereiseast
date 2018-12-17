import React, { Component } from 'react';
import logo from './strawberry.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <br />
          <p>
            Happy Christmas Bug<br />
            team JAAM forever, si?<br />
            this is just the beginning.<br />

          </p>
          <a
            className="App-link"
            href="https://www.bible.com/bible/111/1CO.13.4-8.NIV"
            target="_blank"
            rel="noopener noreferrer"
          >
            love is patient, love is kind
          </a>
        </header>
      </div>
    );
  }
}

export default App;
