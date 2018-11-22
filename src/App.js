import React, { Component } from 'react';
import NavBar from './components/NavBar';
import './App.css';

import SurveyForm from './components/SurveyForm';

class App extends Component {
  render() {
    return (
      <div className="App">
      <NavBar/>
        <SurveyForm/>
      </div>
    );
  }
}

export default App;
