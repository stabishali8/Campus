import React from 'react';
import Paper from 'material-ui/Paper';

const style = {
  height: 300,
  width: 400,
  margin: 100,
  textAlign: 'center',
  display: 'inline-block',
};

const PaperExampleSimple = () => (
    <div>
        <Paper style={style} zDepth={3} />
    </div>
);

export default PaperExampleSimple;