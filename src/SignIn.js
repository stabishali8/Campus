import React, { Component } from 'react';
import PaperExampleSimple from './card';
import TextFieldEx from './input';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


export class SignIn extends Component{

        render(){
            return(
                <div>

                <MuiThemeProvider>
                        <PaperExampleSimple/>
                        
                </MuiThemeProvider>
                <TextFieldEx/>
                </div>
            );
        }
}


