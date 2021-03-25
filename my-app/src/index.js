/* lets me use JSX */
import React from 'react';
/* Allows us to attach app to dom */
import ReactDOM from 'react-dom';

import App from './components/App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);