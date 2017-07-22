import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router-dom';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import './App.css'

const style = {
  height: 370,
  width: 400,
  margin: 70,
  textAlign: 'center',
  display: 'inline-block'
};


export class ToolBar extends Component{
        render(){
            return(
                
                        <Toolbar>
                            <span className="head">Campus Recruitment System</span>
                            <ToolbarGroup>
                                <Link to="/dashboard"><RaisedButton 
                                label="log out"  
                                primary={true} /></Link>
                            </ToolbarGroup>
                        </Toolbar>                    
            
                
            );
        }
}


