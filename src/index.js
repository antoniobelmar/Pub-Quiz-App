import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Quiz from './Quiz';
import Routes from './Routes';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Routes />, document.getElementById('root'));
registerServiceWorker();
