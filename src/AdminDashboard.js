import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import {Link} from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css'

const style = {
  height: 300,
  width: 260,
  margin: 100,
  textAlign: 'center',
  display: 'block',
};

export class AdminDashboard extends Component{
  // changeRoute(){
    
  //   console.log('Browser', browserHistory);
  //   // browserHistory.transitionTo(null, '/signin');
  // }
  render(){
    return(
      <div>
        <MuiThemeProvider>
          <div>
            <div className="header">Campus Recruitment System
                <Link to="/signin"><button>SignOut</button></Link>
            </div>
            <Paper style={style} zDepth={2} rounded={false}>
              <br/>
              <div> 
                <h2 className="heading2">Admin Profile</h2> 
              </div>   
              <hr/>
              {/*<hr/>
              <Link to="companyupdateform"><FlatButton label="Update Profile" primary={true} /></Link>
              <hr/>*/}
              <Link to="admincompanyview"><FlatButton label="View Company" primary={true} /></Link>
              <hr/>
              <Link to="adminjobview"><FlatButton label="View Jobs" primary={true} /></Link>
              <hr/>
              <Link to="adminstudentview"><FlatButton label="View Student" primary={true} /></Link>
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

