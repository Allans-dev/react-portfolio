import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import './index.css';
import 'font-awesome/css/font-awesome.min.css';
import * as serviceWorker from './serviceWorker';
import App from './App';

const history = createBrowserHistory();

ReactDOM.render(
  <BrowserRouter history={history} basename={process.env.PUBLIC_URL}>
    <App />
  </BrowserRouter>,
  // eslint-disable-next-line no-undef
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
