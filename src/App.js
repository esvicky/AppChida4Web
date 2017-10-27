import React, { Component } from 'react';
import logo from './logo.svg';
import firebase from 'firebase'
import Maps from './components/Maps';
import './App.css';

class App extends Component {
  componentWillMount(){
    firebase.initializeApp({
      apiKey: "AIzaSyAjcTEES1yLGNyW1keIoWvSPesIpqHofbA",
      authDomain: "datausers-432fe.firebaseapp.com",
      databaseURL: "https://datausers-432fe.firebaseio.com",
      projectId: "datausers-432fe",
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">KEEP ME SAFE</h1>
        </header>
        <p className="App-intro">
          Aquí podrás visualizar mi ruta, ya que he activado el botón de emergencia para que sepas donde estoy.
        </p>
        <h3>MAPA</h3>
        <div className="App-map">
          <Maps />
        </div>
        <div>
          <footer className="App-footer">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">KEEP ME SAFE</h1>
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
