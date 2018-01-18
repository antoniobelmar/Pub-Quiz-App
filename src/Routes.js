import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from './components/home/Home';
import Quiz from './components/quiz/Quiz';
import NewQuiz from './components/quizbuilder/NewQuiz';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/quiz/new" component={NewQuiz}/>
      <Route path="/quiz/:quizId" component={Quiz}/>
    </Switch>
  </Router>
);

export default Routes;
