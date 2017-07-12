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


const PaperExampleSimple = () => (
    <div>
      <div className="header">Campus Recuirtment System</div>
        <Paper style={style} zDepth={3}>
            <br/>
            <TextField hintText="User Name" />
            <br/>
            <br/>
            <TextField hintText="Email" type="email"/>
            <br/>
            <br/>
            <TextField hintText="Password" type="password"/>
            <br/><br/>
            <RaisedButton label="Sign up" primary={true} style={styling} />

       </Paper>
    </div>
);

export default PaperExampleSimple;