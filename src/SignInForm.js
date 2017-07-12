import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import './App.css'

const style = {
  height: 300,
  width: 400,
  margin: 100,
  textAlign: 'center',
  display: 'inline-block',
};

const styling = {
  margin: 12,
};

const styles = {
    margin:15,
};


const LoginForm = () => (
    <div>
        <div className="header">Campus Recruitment System</div>
        <Paper style={style} zDepth={3}>
            <br/>
            <h2>Sign in </h2>
            <TextField hintText="User Name" />
            <br/>
            <TextField hintText="Password" type="password"/>
            <br/>
            <RaisedButton label="Sign in" primary={true} style={styling} />
            <RaisedButton label="Sign up" primary={true} style={styles} />

            <br/>

       </Paper>
    </div>
);

export default LoginForm;