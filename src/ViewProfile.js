import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router-dom';
import './App.css'

const style = {
  height: 370,
  width: 400,
  margin: 70,
  textAlign: 'center',
  display: 'inline-block',
};

export class ViewProfile extends Component{
        returnData(){
        let val = JSON.parse(localStorage.getItem('students'))
        let arr = val == null ? [] : val;
        return arr;
        }
        render(){
            return(
                <div>
                    <MuiThemeProvider>
                        <div>
                            <div className="header">Campus Recruitment System</div>
                            <Paper style={style} zDepth={3}>
                                <br/>
                                <h2 className="headingProfile">Profile </h2>
                                <hr />
                                        {/*var items = this.returnData().map((elem,i) => {
            return <li key={i}><span>{elem}</span></li>
        });*/}
                                <h3 className="subheading">Education:</h3>
                                <h3 className="subheading">Email:</h3>
                                <h3 className="subheading">Skills:</h3>   
                                <h3 className="subheading">Description:</h3>
                                <hr className="hr"/>
                                <Link to="/dashboard"><RaisedButton 
                                label="Dashboard"  
                                primary={true} /></Link>

                            </Paper>
                        </div> 
                       </MuiThemeProvider>
            
                </div>
            );
        }
}


