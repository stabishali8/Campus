import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Link} from 'react-router-dom';
import './App.css'

const style = {
  height: 300,
  width: 400,
  margin: 100,
  textAlign: 'center',
  display: 'inline-block',
};

const styling = {
  margin: 12,
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
            password : ''
        }
    }
    justSubmit(e){
        let val = JSON.parse(localStorage.getItem('students'))
        let arr = val == null ? [] : val;
        this.state.username  = this.state.username.toLocaleLowerCase();
        arr.push(this.state);
        localStorage.setItem('students',JSON.stringify(arr));
        this.state = {
            username : '',
            email : '',
            password : ''
        }
        this.setState(this.state);
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
                    <div className="header">Campus Recuirtment System</div>
                        
                        <Paper style={style} zDepth={3}>
                                <br/>
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
                                <br/><br/>
                                <Link to="signin"><RaisedButton onClick={this.justSubmit.bind(this)} label="Sign up" type="submit" primary={true} style={styling} /></Link>
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