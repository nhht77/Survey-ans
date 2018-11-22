import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

class FormFirstQuestions extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };  

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };  

  render() {
    
    const { values, handleChange } = this.props;
    const { ans4, ans5, ans6 } = values;
    
    return (
      <MuiThemeProvider >
        <React.Fragment>
      <h1>Survey 2nd questions</h1>
      <TextField
        id="standard-name"
        label="What is your favorite food?"
        name="ans4"
        value={ans4}
        margin="normal"
        style={styles.textField}
        onChange={handleChange('ans4')}
      />
      <br/>
      <TextField
        id="standard-name"
        label="Do you prefer talking over the phone or face to face?"
        name="ans5"
        value={ans5}
        margin="normal"
        style={styles.textField}
        onChange={handleChange('ans5')}
      />
      <br/>
      <TextField
        id="standard-name"
        label="What kind of old person do you want to grow up to become?"
        name="ans6"
        value={ans6}
        margin="normal"
        style={styles.textField}
        onChange={handleChange('ans6')}
      />
      <br/>
      
      
      <Button variant="contained" 
              color="default" 
              style={styles.button} 
              onClick={this.back}>
        Go Back
      </Button>
      <Button variant="contained" 
              color="primary" 
              style={styles.buttonPrimary} 
              onClick={this.continue}>
        Next Page
      </Button>
      </React.Fragment>
      </MuiThemeProvider>
    )
  }
}

const styles = {
  button:{
    marginTop: 30
  },
  buttonPrimary: {
    backgroundColor: '#2196f3',
    marginTop: 30,
    marginLeft:30        
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
