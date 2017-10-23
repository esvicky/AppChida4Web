import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Maps from './components/Maps';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Localízame</h1>
        </header>
        <p className="App-intro">
          Aquí podrás visualizar mi ruta, ya que he activado el botón de emergencia para que sepas donde estoy.
        </p>
        <div className="App-map">
          <Maps />
        </div>
      </div>
    );
  }
}

export default App;
