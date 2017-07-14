import React, { Component } from 'react';
import './App.css';
import {SignIn} from './SignIn';
import {ViewProfile} from './ViewProfile';

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
