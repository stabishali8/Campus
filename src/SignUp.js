import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import {Link} from 'react-router-dom';
import * as firebase from 'firebase';
import './App.css'

const style = {
  height: 370,
  width: 400,
  margin: 70,
  textAlign: 'center',
  display: 'inline-block',
};

const styling = {
  margin: 12,
};

const styles = {
    margin:15,
    radioButton: {
    marginTop: 4,
  },
};

export class SignUp extends Component{
//  handleText(e) {
//            let userInput = e.target.value
//     }
    constructor(){
        super();
        this.state = {
            username : '',
            email : '',
            password : '',
            type:''

        }
    }
    justSubmit(e){

        firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).catch(function(error) {
      // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
     
    }).then(()=>{
     
      var uid = firebase.auth().currentUser.uid;
      firebase.database().ref('USER'+'/'+uid).set({
      name:this.state.username,
      email:this.state.email,
      password:this.state.password,
      type:this.state.type

     });
      this.props.history.push('/SignIn');
  });
        // let val = JSON.parse(localStorage.getItem('students'))
        // let arr = val == null ? [] : val;
        // this.state.username  = this.state.username.toLocaleLowerCase();
        // arr.push(this.state);
        // localStorage.setItem('students',JSON.stringify(arr));
        // this.state = {
        //     username : '',
        //     email : '',
        //     password : ''
        // }
        // this.setState(this.state);
    }
    _inputHandler(e){
        let userInput = {};
         userInput[e.target.name] = e.target.value;
         this.setState(userInput);
          
    }
    render(){
        return(
            <div>
                <MuiThemeProvider>
                    <div>
                    <div className="header">Campus Recuirtment System
                        <Link to="/signin"><button>Sign in</button></Link>                                          
                    </div>
                        
                        <Paper style={style} zDepth={3}>
                                <h2>Sign up </h2>
                                <TextField
                                        hintText = "User Name" 
                                        onChange={this._inputHandler.bind(this)}
                                        value = {this.state.username}
                                        name="username" />
                                <br/>
                                <br/>
                                <TextField className="email" hintText="Email" 
                                    type="email" 
                                    onChange={this._inputHandler.bind(this)}
                                    value = {this.state.email}
                                    name="email"/>
                                <br/>
                                <br/>
                                <TextField className="password" name="password" 
                                hintText="Password" 
                                type="password" 
                                value = {this.state.password}
                                onChange={this._inputHandler.bind(this)}
                                name="password" />
                                <br/>
                                <RadioButtonGroup name="type" onChange={this._inputHandler.bind(this)}>
                                    <RadioButton
                                        value="student"
                                        label="Student"
                                        name="student"
                                        style={styles.radioButton}
                                    />
                                    <RadioButton
                                        value="company"
                                        label="Company"
                                        name="company"
                                        style={styles.radioButton}
                                    />
                                </RadioButtonGroup>                                
                                <RaisedButton onClick={this.justSubmit.bind(this)} label="Sign up" type="submit" primary={true} style={styling} />
                        </Paper>
                        
                    </div>

                </MuiThemeProvider>
            </div>
        );
    }

}
// SignUp.PropTypes = {
//     _inputHandler: React.PropTypes.func.isRequired,
//     _submit: React.PropTypes.func.isRequired

// }

export default SignUp;