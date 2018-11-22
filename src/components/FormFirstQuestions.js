import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

class FormFirstQuestions extends Component {
  state = {
    open: true,
  };

  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };
  
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };  

  render() {
    
    const { values, handleChange } = this.props;
    const { ans1, ans2, ans3 } = values;
    
    return (
      <MuiThemeProvider >
        <React.Fragment>
      <h1>Survey 1st questions</h1>
      <TextField
        id="standard-name"
        label="What kind of music do you like to listen to?"
        name="ans1"
        value={ans1}
        margin="normal"
        style={styles.textField}
        onChange={handleChange('ans1')}
      />
      <br/>
      <TextField
        id="standard-name"
        label="What are your favorite TV shows?"
        name="ans2"
        value={ans2}
        margin="normal"
        style={styles.textField}
        onChange={handleChange('ans2')}
      />
      <br/>
      <TextField
        id="standard-name"
        label="Would you rather be the best player on a horrible team or the worst player on a great team?"
        name="ans3"
        value={ans3}
        margin="normal"
        style={styles.textField}
        onChange={handleChange('ans3')}
      />
      <br/>
      
      <Button variant="contained" 
              color="primary" 
              style={styles.button} 
              onClick={this.continue}>
        Next Page
      </Button>

      </React.Fragment>
      </MuiThemeProvider>
    )
  }
}

const styles = {
  button: {
    backgroundColor: '#2196f3',
    marginTop: 30
  },
  textField: {
    marginLeft: 10,
    marginRight: 10,
    width: 700,
  }
};

FormFirstQuestions.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default FormFirstQuestions
