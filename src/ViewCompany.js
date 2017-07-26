import React, { Component } from 'react';
// import Paper from 'material-ui/Paper';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router-dom';
import * as firebase from 'firebase';
import './ViewCompany.css';
import './App.css';

// const style = {
//   height: 370,
//   width: 400,
//   margin: 70,
//   textAlign: 'center',
//   display: 'inline-block',
// };


export class ViewCompany extends Component{
        constructor()
        {
            super();
            this.state = {
                username:[],
                email:[],
                company:''
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
            const rootRef = firebase.database().ref().child('USER/');
            rootRef.orderByChild('type').equalTo('company').on('value',snap=>{
                // var userObj = snap.val();
                    this.setState({
                        company:snap.val()
                    })
                // var objKey=Object.keys(userObj);
                // var table = document.createElement('table');
                // for(var i=0; i<objKey.length;i++)
                // {
                //     var k=objKey[i];
                //     if(userObj[k].type==='company')
                //     {
                //         this.state.username[i] = userObj[k].name;
                //         this.state.email[i] = userObj[k].email;
                //         console.log("Company Name"+this.state.username[i]);
                //         console.log("Company Name"+this.state.email[i]);
                //         var table = document.getElementById("TableShow");
                //         var row = table.insertRow(1);
                //         var cell0 = row.insertCell(0);
                //         var cell1 = row.insertCell(1);
                //         cell0.innerHTML = this.state.username[i];
                //         cell1.innerHTML = this.state.email[i];
                //     }
                // }
            })
        }
        render(){

            let jobs = '';
            if(this.state.company!=null)
            {
            jobs = Object.keys(this.state.company).map((key)=>{
                return(                
                <div className="jobview">   
                    <p className="jobviewheading">Company Name:   {this.state.company[key].name}</p> 
                    <p className="jobviewheading">Email:   {this.state.company[key].email}</p>
                    {/*<p className="jobviewheading">Description:   {this.state.job[key].description}</p>*/}
                       {/*<button className="jobviewbutton" onClick={this.Delete.bind(this,key)}>Delete</button>                    */}
                </div>
                )

                
            })
            }

            return(
                <div>
                    <div className="header">Campus Recuirtment System
                        <Link to="/dashboard"><button>Dashboard</button>
                        </Link>
                        <button
                        onClick={this.logout.bind(this)}                                             
                        >Sign Out</button>              

                    </div>
                    <br/>   
                    {jobs !== '' ? jobs : <span></span>}
                    <br/>
                    {/*<p>
                        <table id="TableShow">
                            <tr>
                                <th>Company Name</th>
                                <th>Company Email</th>
                            </tr>

                        </table>
                    </p>*/}
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


