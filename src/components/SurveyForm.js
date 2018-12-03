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
  
  handleSubmit = (e) => {
    e.preventDefault();
      const {Answer} = this.state;
      Answer.forEach( (val) => apiCalls.registerAnswer(val.AnswerOpt, val.questionId));
  }

  onSave = val => {

    let newAnswer = this.state.Answer.filter( ans => ans.questionId !== val.questionId);

    this.setState(prevState => ({
      Answer: [...newAnswer, val]
    }))
}

  render() {
    const {Answer} = this.state;
    const questions = this.state.questions.map( (q, idx) => {
        return <div key={idx}> <FormQuestions  {...q}/> 
                    <AnswerOpt 
                        questionId={q.id} 
                        AnswerOption={this.state.AnswerOpt} 
                        Answer={Answer}  
                        onSave={this.onSave}  
                    /> 
                </div>
    })


    return (
    <div>
    <h1>Survey 1st questions</h1>
    <form onSubmit={this.handleSubmit}>
        {questions}
        <Button 
              type="submit"
              variant="contained" 
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
