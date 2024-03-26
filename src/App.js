import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Halo Selamat Datang di Website Saya</h1>
        </header>
        <p className="App-intro">
          Silahkan kunjungi github saya di link berikut https://github.com/rrafids
        </p>
      </div>
    );
  }
}

export default App;
