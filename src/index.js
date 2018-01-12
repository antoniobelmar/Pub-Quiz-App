import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Quiz from './Quiz';
import NewQuiz from './newQuiz';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<NewQuiz />, document.getElementById('root'));
registerServiceWorker();
