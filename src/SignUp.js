import React, { Component } from 'react';
import PaperExampleSimple from './SignUpForm';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


export class SignUp extends Component{
    render(){
        return(
            <div>
                <MuiThemeProvider>
                        <PaperExampleSimple/>
                </MuiThemeProvider>
            </div>
        );
    }

}

export default SignUp;