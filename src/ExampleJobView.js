import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import * as firebase from 'firebase';
import './ViewCompany.css';
import './App.css';


export class ExampleJobView extends Component{
    constructor(){
        super();
        this.state={
            job:{}
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
    componentDidMount(){
        // var uid = firebase.auth().currentUser.uid;
        const rootRef = firebase.database().ref().child('JOBS/');
        rootRef.on('value',snap =>{
            // var userObj = snap.val();
            this.setState({
                    job:snap.val()
            })
         })

    }
    remove(deletekey){
        debugger;
           firebase.database().ref('JOBS/'+deletekey).remove();
           firebase.database().ref('Apply/'+deletekey).remove();
    }
    render(){

            let jobs = '';

            if(this.state.job!=null)
            {
            jobs = Object.keys(this.state.job).map((key)=>{
                return(                
                <div className="jobview">   
                    <p className="jobviewheading">Job Title:   {this.state.job[key].jobtitle}</p> 
                    <p className="jobviewheading">Salary:   {this.state.job[key].salary}</p>
                    <p className="jobviewheading">Description:   {this.state.job[key].description}</p>
                       <button className="jobviewbutton" onClick={this.remove.bind(this,key)}>Delete</button>                    
                </div>
                )

                
            })
            }

            return(
                <div>
                    <div className="header">Campus Recruitment System
                    <Link to="/admindashboard"><button>Dashboard</button>
                    </Link>
                    <button
                onClick={this.logout.bind(this)}                     
                    >SignOut</button>
                    </div>
                    <br/>
                    {jobs !== '' ? jobs : <span></span>}
                    <br/>   
                </div>
            );
        }
}


