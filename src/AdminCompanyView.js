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


export class AdminCompanyView extends Component{
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
                    if(userObj[k].type==='company')
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
                        var cell2 = row.insertCell(2);
                        cell0.innerHTML = this.state.username[i];
                        cell1.innerHTML = this.state.email[i];
                        var button = document.createElement('button');
                        var buttonText = document.createTextNode('Delete');
                        button.appendChild(buttonText);
                        cell2.appendChild(button);
                        button.addEventListener('click',this.deleteUser.bind(this,k,rootRef));                        
                        
                    }
                }
            })
        }
        deleteUser(deletekey,rootRef)
        {
            // rootRef.on('value',snap=>{
            //     snap.ref(deletekey).remove();
            // })
                 console.log("delete "+deletekey)
                    firebase.database().ref().child('USER/'+deletekey).remove();
                    // firebase.database().ref().child('Apply/'+deletekey).remove();
                // firebase.database().ref('JOBS/'+deletekey).remove();
        }

        render(){
            return(
                <div>
                    <div className="header">Campus Recruitment System
                    <Link to="/admindashboard"><button>Dashboard</button>
                    </Link>
                    <Link to="/signin"><button>SignOut</button></Link>
                    </div>
                    {/*<Link to="signin"><RaisedButton label="SignOut"  primary={true} /></Link>*/}

                    <p>
                        <table id="TableShow">
                            <tr>
                                <th>Company Name</th>
                                <th>Company Email</th>
                            </tr>

                        </table>
                    </p>
                    {/*<Link to="signin"><RaisedButton label="SignOut"  primary={true} /></Link>*/}

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


