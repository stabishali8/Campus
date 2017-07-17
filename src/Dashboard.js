import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import {Link} from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css'

const style = {
  height: 365,
  width: 260,
  margin: 50,
  textAlign: 'center',
  display: 'block',
};

export class Dashboard extends Component{
  // changeRoute(){
    
  //   console.log('Browser', browserHistory);
  //   // browserHistory.transitionTo(null, '/signin');
  // }
  render(){
    return(
      <div>
        <MuiThemeProvider>
          <div>
            <div className="header">Campus Recruitment System</div>
            <Paper style={style} zDepth={2} rounded={false}>
              <br/>   
              <h2 className="heading2">Personal Profile</h2>
              <hr/>
              <hr/>
              <Link to="updateform"><FlatButton label="Update Profile" primary={true} /></Link>
              <hr/>
              <Link to="viewprofile"><FlatButton label="View Profile" primary={true} /></Link>
              <hr/>
              <Link to="viewjob"><FlatButton label="View Jobs" primary={true} /></Link>
              <hr/>
              <Link to="viewcompany"><FlatButton label="View Company" primary={true} /></Link>
              <hr/>
              <Link to="signin"><FlatButton label="SignOut"  primary={true} /></Link>
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

