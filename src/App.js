import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {SignIn} from './SignIn';
import {SignUp} from './SignUp';
 

class App extends Component {
  render() {
    return (
      <div className="App">
        <SignIn/>
      </div>
    );
  }
}

export default App;
