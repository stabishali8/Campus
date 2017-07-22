import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Link} from 'react-router-dom';
import * as firebase from 'firebase';
import './App.css'
const style = {
  height: 375,
  width: 580,
  margin: 50,
  textAlign: 'center',
  display: 'inline-block',
};

export class CompanyPostJob extends Component{
  constructor(props){
        super(props);
        this.state = {
            user:'',
            jobtitle : '',
            salary : '',
            description : ''
        }
    }

//   changeRoute(){
    
//     console.log('Browser', browserHistory);
//     // browserHistory.transitionTo(null, '/signin');
//   }
  componentDidMount(){
    var userId = firebase.auth().currentUser.uid;
    const rootRef = firebase.database().ref().child('USER/'+userId);
    var userobj;
    rootRef.on('value',snap => {
      userobj = snap.val();
      this.setState({
        user:userobj
      })
      // alert(this.state.user+" User");
    })  
  }
  _inputHandler(e){
    let userInput = {};
        userInput[e.target.name] = e.target.value;
        this.setState(userInput); 
    }
  justSubmit(e){

        var userId = firebase.auth().currentUser.uid;
        firebase.database().ref('JOBS/').push({
          ...this.state.user,
          jobtitle: this.state.jobtitle,
          salary: this.state.salary,
          description:this.state.description
        }).then(function(){
            alert("Update successful");
        }, function(error){
          alert("Update unsuccessful");
        });
        this.props.history.push('/companydashboard');
        
        // firebase.database().ref('USER'+'/'+userId).
        // userId.updateProfile({
        //   Education: this.state.education,
        //   Skills: this.state.skills,
        //   Description:this.state.description
        // }).then(function(){
        //     alert("successful");
        // }, function(error){
        //   alert("unsuuce");
        // });

        // let val = JSON.parse(localStorage.getItem('update'));
        // let arr1 = val == null ? [] : val;
        // arr1.push(this.state);
        // localStorage.setItem('update',JSON.stringify(arr1));
        // this.state = {
        //     education : '',
        //     skills : '',
        //     description : ''
        // }
        // this.setState(this.state);
    }
  render(){
    return(
      <div>
        <MuiThemeProvider>
          <div>
            <div className="header">Campus Recuirtment System
                    <Link to="/companydashboard"><button>Dashboard</button>
                    </Link>
                    <Link to="/signin"><button>SignOut</button></Link>
            </div>
            <Paper style={style} zDepth={2} rounded={false}>
              <br/>   
              <h2 className="heading3">Post Job</h2>
              <hr/>
              <hr/>
                <TextField
                hintText = "Job Title" 
                onChange={this._inputHandler.bind(this)}
                value = {this.state.jobtitle}
                name="jobtitle" />
                <br/>
                <TextField
                hintText = "Salary" 
                onChange={this._inputHandler.bind(this)}
                value = {this.state.salary}
                name="salary" />
                <br/>
                <TextField
                hintText = "Description" 
                onChange={this._inputHandler.bind(this)}
                value = {this.state.description}
                name="description"
                multiLine={true}
                rows={2}
                rowsMax={2}
                 />
                 <br/><br/>
                {/*<Link to="/Dashboard">*/}
                <RaisedButton label="Post" 
                onClick={this.justSubmit.bind(this)}
                primary={true}
                />
                <Link to="/companydashboard"><RaisedButton className="buttonspace"
                label="Dashboard"  
                primary={true} /></Link>
                
                {/*</Link> */}
              {/*<Link to="signin"><FlatButton label="SignOut"  primary={true} /></Link>*/}
              {/*<FlatButton label="SignOut" onClick={this.changeRoute.bind(this)} primary={true} />*/}
            </Paper>
          </div>  
        </MuiThemeProvider>
      </div>
    );
  }
}


// const PaperExampleRounded = () => (
//   <div>
//     <div className="header">Campus Recuirtment System</div>
//     <Paper style={style} zDepth={2} rounded={false}>
//         <br/>   
//         <h2 className="heading2">Personal Profile</h2>
//         <hr/>
//         <hr/>
//         <FlatButton label="Update Profile" primary={true} />
//         <hr/>
//         <FlatButton label="View Profile" primary={true} />
//         <hr/>
//         <FlatButton label="View Jobs" primary={true} />
//         <hr/>
//         <FlatButton label="View Company" primary={true} />
//         <hr/>
//         <FlatButton label="SignOut" primary={true} />        
//     </Paper>
//   </div>
// );

// export default PaperExampleRounded;

