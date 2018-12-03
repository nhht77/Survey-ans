import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

class AnswerOpt extends React.Component {
  state = {
    Answer:
      {
        // AnswerOpt:"",
        // questionId: 0
      }
  };

  handleChange = event => {
    
    let Answer = Object.assign({}, this.state.Answer);

    Answer.AnswerOpt = event.target.value;
    Answer.questionId = this.props.questionId;

    this.setState({Answer})
    this.props.onSave(Answer);    
  };

  render() {
    const answerOption = this.props.AnswerOption.filter( ans => ans.questionFK === this.props.questionId );
    const Options = answerOption.map( ans => {
        return <FormControlLabel
                key={ans.id}
                value={ans.answer_option}
                control={<Radio color="primary" />}
                label={ans.answer_option}
                labelPlacement="top"
            />
    })

    return (
      <FormControl style={styles.RadioAnswer} component="fieldset">
        <RadioGroup
          aria-label="position"
          name="position"
          value={this.state.Answer.AnswerOpt}
          onChange={this.handleChange}
          row
        >
          {Options}
        </RadioGroup>
      </FormControl>
    );
  }
}
const colorText = {'gray': '#000d11'}

const styles = {
  RadioAnswer: {
      marginTop:10,
      marginBottom:40,
      color: colorText.gray
  }
};


export default AnswerOpt;