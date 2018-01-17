import React from 'react';
import ReactDOM from 'react-dom';
import Quiz from './components/quiz/Quiz';
import NewQuiz from './components/quizbuilder/NewQuiz';
import Routes from './Routes';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Routes />, document.getElementById('root'));

registerServiceWorker();
