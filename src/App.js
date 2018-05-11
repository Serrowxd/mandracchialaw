import React, { Component } from 'react';
import './App.css';

// Imports
import HomePage from './components/Routes/HomePage/HomePage';
import NavBar from './components/NavBar/NavBar';

class App extends Component {
  render() {
    return (
      <div className="appBack">
        <NavBar />
        <HomePage />
      </div>
    );
  }
}

export default App;
