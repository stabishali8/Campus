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

export class UpdateForm extends Component{
  constructor(props){
        super(props);
        this.state = {
            user:'',
            education : '',
            skills : '',
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
  logout(){
    firebase.auth().signOut().catch(function(error){
        console.log("error "+error.message);
    }).then(()=>{
      console.log("success");
      this.props.history.push('/signin')
    });
  }
  _inputHandler(e){
    let userInput = {};
        userInput[e.target.name] = e.target.value;
        this.setState(userInput); 
    }
  justSubmit(e){

        var userId = firebase.auth().currentUser.uid;
        firebase.database().ref('USER/'+userId).set({
          ...this.state.user,
          Education: this.state.education,
          Skills: this.state.skills,
          Description:this.state.description
        }).then(function(){
            alert("Update successful");
        }, function(error){
          alert("Update unsuccessful");
        });
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
                    <Link to="/dashboard"><button>Dashboard</button>
                    </Link>
                    <button
                onClick={this.logout.bind(this)}                     
                    >SignOut</button>              

            </div>
            <Paper style={style} zDepth={2} rounded={false}>
              <br/>   
              <h2 className="heading3">Update Profile</h2>
              <hr/>
              <hr/>
                <TextField
                hintText = "Education" 
                onChange={this._inputHandler.bind(this)}
                value = {this.state.education}
                name="education" />
                <br/>
                <TextField
                hintText = "Skills" 
                onChange={this._inputHandler.bind(this)}
                value = {this.state.skills}
                name="skills" />
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
                <RaisedButton label="Update" 
                onClick={this.justSubmit.bind(this)}
                primary={true}
                />
                <RaisedButton className="buttonspace"
                label="Sign Out" 
                onClick={this.logout.bind(this)} 
                primary={true} />
                
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

