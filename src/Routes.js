import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Quiz from './Quiz';

const Routes = () => (
  <Router>
    <Route path="/quiz/:quizId" component={Quiz}/>
  </Router>
)

export default Routes;
