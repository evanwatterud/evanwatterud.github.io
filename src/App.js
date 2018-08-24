import React, { Component } from 'react';
import './css/normalize.css'
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path='/' component={HomePage}/>
      </BrowserRouter>
    );
  }
}

export default App;
