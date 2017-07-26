import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import * as firebase from 'firebase';
import {Link} from 'react-router-dom';
import './App.css'

const style = {
  height: 320,
  width: 400,
  margin: 90,
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

export class SignIn extends Component{
        constructor(){
            super();
                this.state = {
                    username: '',
                    password: '',
                }
        }

        justSubmit(e){
            firebase.auth().signInWithEmailAndPassword(this.state.username, this.state.password).catch(function(error) {
      // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log( errorCode + errorMessage);
            
            }).then(()=>{
            let typeCheck=null;
            var userId = firebase.auth().currentUser.uid;
            const rootRef= firebase.database().ref().child('USER/'+ userId);
            // const userRef = rootRef.child('USER/'+ userId);
            rootRef.on('value', snap => {
            var userObj = snap.val();    
            typeCheck = userObj.type;    
            debugger;
            if(typeCheck === 'student'){
                //this.props.history.push('/student');
                this.props.history.push('/Dashboard');
            }
            else if(typeCheck === 'company'){
                this.props.history.push('/CompanyDashboard');
            }
            // else if(typeCheck === 'admin')
            // {
            //     this.props.history.push('/AdminDashboard');
            // }
            else if(typeCheck === '')
            {
                // alert("Don't match account");
                this.props.history.push('/AdminDashboard');
            }
        });
                
        });
//             firebase.auth().signInWithEmailAndPassword(this.state.username,this.state.password).then((error)=> {
//   // Handle Errors here.
//             var typeCheck;
//             var userId = firebase.auth().currentUser.uid;
//             const rootRef= firebase.database().ref();
//             const userRef = rootRef.child('USER/'+userId);
//             userRef.on('value',snap => {
//             typeCheck=snap.val().type;
//             if(typeCheck==='student'){
//                 this.props.history.push('/dashboard');
//             }
//             if(typeCheck==='company'){
//             this.props.history.push('/signIn');
//             }})
//         /*<div>
//         <Link to="/Student"> </Link><br></br><br></br>
//         </div>             */
//         }).catch((error)=>{
//         var errorCode = error.code;
//         var errorMessage = error.message;
//         console.log("err",errorCode);
//         });
            // let val = JSON.parse(localStorage.getItem('students'));
            // let arr = val == null ? [] : val;
            // let index = arr.findIndex(i => i.username === this.state.username);

            // if(index >= 0 && arr[index].password === this.state.password){
            //     console.log("True");
            //     this.props.history.push('/dashboard');
            // }
            // else {
            //         alert("Incorrect username or password");
            // }
            // this.state = {
            //     username : '',
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
                            <div className="header">Campus Recruitment System</div>
                            <Paper style={style} zDepth={3}>
                                <br/>
                                <h2>Sign in </h2>
                                <TextField hintText="User Name"
                                onChange={this._inputHandler.bind(this)}
                                value = {this.state.username}
                                name="username" />
                                <br/>
                                <TextField hintText="Password" 
                                onChange={this._inputHandler.bind(this)}
                                value = {this.state.password}                                
                                name="password"
                                type="password"/>
                                <br/>

                                <RaisedButton label="Sign in" onClick={this.justSubmit.bind(this)} primary={true} style={styling} />
                                {/*<RaisedButton label="Sign up"  primary={true} style={styles} />*/}
                                <Link to="signup">
                                <RaisedButton label="Sign up"  primary={true} style={styles} />
                                </Link>

                                <br/>

                            </Paper>
                        </div> 
                       </MuiThemeProvider>
            
                </div>
            );
        }
}


