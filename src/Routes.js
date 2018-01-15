import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Quiz from './Quiz';
import NewQuiz from './components/quizbuilder/NewQuiz';

const Routes = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/quiz/new" component={NewQuiz}/>
        <Route path="/quiz/:quizId" component={Quiz}/>
      </Switch>
    </div>
  </Router>
)

export default Routes;
