import React, { Component } from 'react';
import './App.css';
import Header from './views/Header.js'
import Footer from './views/Footer.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <p className="main">
          main
        </p>
        <Footer />
      </div>
    );
  }
}

export default App;
