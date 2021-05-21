/* lets me use JSX */
import React from 'react';
/* Allows us to attach app to dom */
import ReactDOM from 'react-dom';

import App from './components/App';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);