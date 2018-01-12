import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home';
import Quiz from './Quiz';
import OtherPage from './OtherPage';

const Routes = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/quiz/:quizId" component={Quiz}/>
      <Route path="/otherPage" component={OtherPage}/>
    </div>
  </Router>
)

export default Routes;
