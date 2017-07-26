import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import * as firebase from 'firebase';
import {Link} from 'react-router-dom';
import './App.css'

const style = {
  height: 370,
  width: 400,
  margin: 70,
  textAlign: 'center',
  display: 'inline-block',
};

export class ViewProfile extends Component{
        constructor(){
            super();
            this.state = {
                    email:'',
                    education:'',
                    skills:'',
                    description:''
            }
        }
        logout(){
            firebase.auth().signOut().catch(function(error){
                console.log("error "+error.message);
            }).then(()=>{
            console.log("success");
            this.props.history.push('/signin')
            });
        }
        
        componentDidMount()
        {
            var userId = firebase.auth().currentUser.uid;
            const rootRef = firebase.database().ref().child('USER/'+userId);
            rootRef.on('value',snap => {
            // userobj = snap.val();
            this.setState({
                email:snap.val().email,
                education:snap.val().Education,
                skills:snap.val().Skills,
                description:snap.val().Description
            })
            // alert(this.state.user+" User");
            })  
        }
        // returnData(){
        // let val = JSON.parse(localStorage.getItem('students'))
        // let arr = val == null ? [] : val;
        // return arr;
        // }
        render(){
            return(
                <div>
                    <MuiThemeProvider>
                        <div>
                            <div className="header">Campus Recruitment System
                        <Link to="/dashboard"><button>Dashboard</button>
                        </Link>
                        <button
                        onClick={this.logout.bind(this)}
                        >Sign Out</button>                                              
                            </div>
                            <Paper style={style} zDepth={3}>
                                <br/>
                                <h2 className="headingProfile">Profile </h2>
                                <hr />
                                        {/*var items = this.returnData().map((elem,i) => {
            return <li key={i}><span>{elem}</span></li>
        });*/}
                                <h3 className="subheading">Education:{this.state.education}</h3>
                                <h3 className="subheading">Email:{this.state.email}</h3>
                                <h3 className="subheading">Skills:{this.state.skills}</h3>   
                                <h3 className="subheading">Description:{this.state.description}</h3>
                                <hr className="hr"/>
                                <Link to="/dashboard"><RaisedButton 
                                label="Dashboard"  
                                primary={true} /></Link>
                                <br/>
                                <br/>
                                <RaisedButton 
                                label="Sign Out"
                                onClick={this.logout.bind(this)}  
                                primary={true} />

                            </Paper>
                        </div> 
                       </MuiThemeProvider>
            
                </div>
            );
        }
}


