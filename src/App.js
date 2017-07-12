import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {SignIn} from './SignIn';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAwesomeReactComponent from './MyAwesomeReactComponent';
 

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>*/}
          <MuiThemeProvider>
              <MyAwesomeReactComponent />
          </MuiThemeProvider>
        {/*<SignIn/>*/}
      </div>
    );
  }
}

export default App;
