import React, { Component } from 'react';
import LoginForm from './SignInForm';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export class SignIn extends Component{

        render(){
            return(
                <div>
                    <MuiThemeProvider>
                        <LoginForm/>                       
                    </MuiThemeProvider>
            
                </div>
            );
        }
}


