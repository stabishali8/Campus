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

export class CompanyViewProfile extends Component{
        constructor(){
            super();
            this.state = {
                    email:'',
                    companyname:'',
                    address:'',
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
                companyname:snap.val().companyname,
                address:snap.val().address,
                description:snap.val().description
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
                                <Link to="/companydashboard"><button>Dashboard</button>
                                </Link>
                                <button
                                onClick={this.logout.bind(this)}>Sign Out
                                </button>                                             
                            </div>
                            <Paper style={style} zDepth={3}>
                                <br/>
                                <h2 className="headingProfile">Profile </h2>
                                <hr />
                                        {/*var items = this.returnData().map((elem,i) => {
            return <li key={i}><span>{elem}</span></li>
        });*/}
                                <h3 className="subheading">Company Name:{this.state.companyname}</h3>
                                <h3 className="subheading">Email:{this.state.email}</h3>
                                <h3 className="subheading">Address:{this.state.address}</h3>   
                                <h3 className="subheading">Description:{this.state.description}</h3>
                                <hr className="hr"/>
                                <Link to="/companydashboard"><RaisedButton 
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


