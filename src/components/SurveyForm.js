import React, { Component } from 'react'
import FormFirstQuestions  from './FormFirstQuestions';
import FormSecondQuestions  from './FormSecondQuestions';
import Confirm  from './Confirm';

class SurveyForm extends Component {
    constructor(props){
        super(props);
            this.state ={
                step:1,
                ans1: "",
                ans2: "",
                ans3: "",
                ans4: "",
                ans5: "",
                ans6: "",
                questions: []
            };
    }

//   Next step
nextStep = () => {
    const { step } = this.state;
    this.setState({
        step: step+1
    })
}

//   Prev Step
prevStep = () => {
    const { step } = this.state;
    this.setState({
        step: step - 1
    })
}

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  componentWillMount(){
      this.loadQuestion();
  }

  loadQuestion = () => {
    fetch('/questions')
    .then( res => {
        if(!res.ok){
            if(res.status >= 400 && res.status < 500){
                return res.json().then( data => 
                    { 
                        let err = {errorMessage: data.message} 
                        throw err;
                    })
            } else {
                let err = {errorMessage: 'Server is offline, please try again!'}
                throw err;
            }
        }
        return res.json();
    })
    .then (questions => this.setState({questions}));
  }

  render() {
    const { step } = this.state;
    const {ans1, ans2, ans3, ans4, ans5, ans6} = this.state;
    const values = { ans1, ans2, ans3, ans4, ans5, ans6 }
    switch(step){
        case 1:
        return (
            <FormFirstQuestions
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={values}
            />
        );
        case 2:
        return (
            <FormSecondQuestions
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
        />
        );
        case 3:
        return (
            <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
        />
        );
        case 4:
        return (
            <h1>Success</h1>
        );

        default:
        return (
          <h1>Welcome to Survey</h1>
        );
    }
  }
}

export default SurveyForm
