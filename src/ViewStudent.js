import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router-dom';
import * as firebase from 'firebase';
import './ViewCompany.css';
import './App.css';

const style = {
  height: 370,
  width: 400,
  margin: 70,
  textAlign: 'center',
  display: 'inline-block',
};


export class ViewStudent extends Component{
        constructor()
        {
            super();
            this.state = {
                username:[],
                email:[]
            }
        }
        componentDidMount()
        {
            const rootRef = firebase.database().ref().child('USER/');
            rootRef.on('value',snap=>{
                var userObj = snap.val();
                var objKey=Object.keys(userObj);
                var table = document.createElement('table');
                for(var i=0; i<objKey.length;i++)
                {
                    var k=objKey[i];
                    if(userObj[k].type==='student')
                    {
                        this.state.username[i] = userObj[k].name;
                        this.state.email[i] = userObj[k].email;
                        console.log("Company Name"+this.state.username[i]);
                        console.log("Company Name"+this.state.email[i]);
                        var table = document.getElementById("TableShow");
                        var row = table.insertRow(1);
                        var cell0 = row.insertCell(0);
                        var cell1 = row.insertCell(1);
                        cell0.innerHTML = this.state.username[i];
                        cell1.innerHTML = this.state.email[i];
                    }
                }
            })
        }
        render(){
            return(
                <div>
                    <div className="header">Campus Recruitment System
                        <Link to="/companydashboard"><button>Dashboard</button>
                        </Link>
                        <Link to="/signin"><button>Sign Out</button></Link>                                      
                    </div>
                    <p>
                        <table id="TableShow">
                            <tr>
                                <th>Student Name</th>
                                <th>Student Email</th>
                            </tr>

                        </table>
                    </p>
                    {/*<MuiThemeProvider>
                        <div>
                            <div className="header">Campus Recruitment System</div>
                            <Paper style={style} zDepth={3}>
                                <br/>
                                <h2 className="headingProfile">Company </h2>
                                <hr />
                                <h3 className="subheading">Name:</h3>
                                <h3 className="subheading">Email:</h3>   
                                <h3 className="subheading">Description:</h3>
                                <hr className="hr"/>
                                <Link to="/dashboard"><RaisedButton 
                                label="Dashboard"  
                                primary={true} /></Link>

                            </Paper>
                        </div> 
                       </MuiThemeProvider>*/}
            
                </div>
            );
        }
}


