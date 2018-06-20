import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/home/Home';
import Feedback from './components/feedback/Feedback';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/feedback" component={Feedback} />
        </div>
        </Router>
    , document.getElementById('root'));
registerServiceWorker();
