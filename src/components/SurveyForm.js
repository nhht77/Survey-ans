import React, { Component } from 'react'
import FormQuestions  from './FormQuestions';
import Button from '@material-ui/core/Button';
import * as apiCalls from './apiHelper';

import AnswerOpt from './AnswerOpt';


class SurveyForm extends Component {
    constructor(props){
        super(props);
            this.state ={
                questions: [],
                AnswerOpt: [],
                Answer:[]
            };
    }

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  componentWillMount(){
      this.loadQuestion();
      this.loadAnswerOpt();
  }

  loadQuestion = async () => {
   let questions = await apiCalls.getQuestion(); 
   this.setState({questions});
  }
  
  loadAnswerOpt = async () => {
    let AnswerOpt = await apiCalls.getAnswerOpt(); 
    this.setState({AnswerOpt});
  }

  Submit = () => {
      console.log(this.state.Answer);
  }
  
  handleSubmit = () => {
      console.log(this.state.Answer);
  }

  render() {
    const {Answer} = this.state;
    const questions = this.state.questions.map( (q, idx) => {
        return <div key={idx}> <FormQuestions  {...q}/> 
                    <AnswerOpt 
                        questionId={q.id} 
                        AnswerOption={this.state.AnswerOpt} 
                        Answer={Answer}    
                    /> 
                </div>
    })


    return (
    <div>
    <h1>Survey 1st questions</h1>
    <form onSubmit={this.handleSubmit}>
        {questions}
        <Button variant="contained" 
              color="primary" 
              style={styles.button}>
        Submit
      </Button>
    </form>
    </div>
    );
  }
}

const styles = {
    button: {
      backgroundColor: '#2196f3',
      marginTop: 30,
      marginBottom: 30
    }
}

export default SurveyForm
