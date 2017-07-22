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


export class ViewJob extends Component{
    constructor(){
        super();
        this.state={
            jobtitle:[],
            salary:[],
            description:[],
            email:[],
            key:[]
        }
    }
    componentDidMount(){
        var uid = firebase.auth().currentUser.uid;
        const rootRef = firebase.database().ref().child('JOBS/');
        rootRef.on('value',snap =>{
            var userObj = snap.val();
            var key=Object.keys(userObj);
            var table = document.createElement('table');
            for(var i=0;i<key.length;i++){
                var k = key[i];
                this.state.email[i]=userObj[k].email;
                this.state.jobtitle[i]=userObj[k].jobtitle;
                this.state.salary[i]=userObj[k].salary;
                this.state.description[i]=userObj[k].description;
                var table =document.getElementById('TableShow');
                var row = table.insertRow(1);
                var cell0 = row.insertCell(0);
                var cell1 = row.insertCell(1);
                var cell2 = row.insertCell(2);
                var cell3 = row.insertCell(3);
                var cell4 = row.insertCell(4);
                cell0.innerHTML = this.state.jobtitle[i];
                cell1.innerHTML = this.state.salary[i];
                cell2.innerHTML = this.state.description[i];
                cell3.innerHTML = this.state.email[i];
                var button = document.createElement('button');
                var buttonText = document.createTextNode('Apply');
                button.appendChild(buttonText);
                cell4.appendChild(button);
                button.addEventListener('click',this.ApplyUser.bind(this,i,k));
            }

        })

    }
    ApplyUser(index,key){
        var userId = firebase.auth().currentUser.uid;
        const rootRef = firebase.database().ref().child('USER/'+userId);
        rootRef.on('value', snap => {
            var user = snap.val();
            let userData = (snap.val() || {
                userid:userId,
                name: user.name,
                email:user.email
            });
            // console.log("userID"+ user.name);
            var rootRefernce=firebase.database().ref();
            const anoRootRef = rootRefernce.child('Apply/'+key).push(userData);
            alert("Thank You")  
        })
    }
    render(){
            return(
                <div>
                    <div className="header">Campus Recruitment System
                        <Link to="/dashboard"><button>Dashboard</button>
                        </Link>
                        <Link to="/signin"><button>Sign Out</button></Link>                                      
                    </div>
        {/*<p>*/}
                <table id="TableShow">
                   <tr>
                    
                        <th>Job Title</th>
                        <th>Description </th>
                        <th>Salary</th>
                        <th>Email</th>        
                    </tr>
         
                </table>
         {/*</p> */}
                    {/*<MuiThemeProvider>
                        <div>
                            <div className="header">Campus Recruitment System</div>
                            <Paper style={style} zDepth={3}>
                                <br/>
                                <h2 className="headingProfile">Jobs </h2>
                                <hr />
                                <h3 className="subheading">Job Tile:</h3>
                                <h3 className="subheading">Salary:</h3>   
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


