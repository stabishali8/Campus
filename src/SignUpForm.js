import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


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
        <Paper style={style} zDepth={3}>
            <br/>
            <br/>
            <TextField hintText="User Name" />
            <TextField hintText="Email" type="email"/>
            <TextField hintText="Password" type="password"/>
            <br/>
            <RaisedButton label="Sign up" primary={true} style={styling} />

       </Paper>
    </div>
);

export default PaperExampleSimple;