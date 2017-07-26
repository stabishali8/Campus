import React, { Component } from 'react';
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


export class ExampleStudentView extends Component{
    constructor(){
        super();
        this.state={
            name:"",
            email:"",
            job:""
        }
    }
    componentDidMount(){
        // var uid = firebase.auth().currentUser.uid;
        const rootRef = firebase.database().ref().child('USER/');
        rootRef.orderByChild('type').equalTo('student').on('value',snap =>{
            // var userObj = snap.val();                
                    this.setState({
                            job:snap.val()
                    })            
         })

    }
    logout(){
    firebase.auth().signOut().catch(function(error){
        console.log("error "+error.message);
    }).then(()=>{
      console.log("success");
      this.props.history.push('/signin')
    });
    }    
    remove(deletekey){
        debugger;
           firebase.database().ref('USER/'+deletekey).remove();
    }
    render(){
            let jobs='';
            if(this.state.job!=null)
            {
                jobs = Object.keys(this.state.job).map((key)=>{
                    return(                
                    <div className="jobview">   
                        <p className="jobviewheading">Name:   {this.state.job[key].name}</p> 
                        <p className="jobviewheading">Email:   {this.state.job[key].email}</p>
                        {/*<p className="jobviewheading">Description:   {this.state.job[key].description}</p>*/}
                        <button className="jobviewbutton" onClick={this.remove.bind(this,key)}>Delete</button>
                        <br/>                  
                        <br/>  
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
                    {jobs !== ''? jobs :<span></span>}
                    <br/>   
                </div>
            );
        }
}


