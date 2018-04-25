import React, { Component } from 'react';
import logo from './index.png';
import './App.css';
import API from './API';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p></p>
          <h1 className="App-title">Shakespearean English Translator</h1>
        </header>
        <p className="App-intro">
          Please enter text:
        </p>
        <API/>
      </div>
    );
  }
}

export default App;
