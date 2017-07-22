import React, { Component } from 'react';
import './App.css';
import {SignIn} from './SignIn';
import * as firebase from 'firebase'; 

class App extends Component {
  constructor(){
    super();
    this.state = {
      username: 10
    };
  }
  componentDidMount(){
      const rootRef = firebase.database().ref().child('react');
      const usernameRef = rootRef.child('username');
      usernameRef.on('value' , snap =>{
          this.setState({
            username: snap.val()
          });
      }); 
  }
  render() {
    return (
      <div className="App">
        {/*<h1>{this.state.username}</h1>*/}
        <SignIn {...this.props}/>
      </div>
    );
  }
}

export default App;
