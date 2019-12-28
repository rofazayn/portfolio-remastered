import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ScrollToTop from './helpers/ScrollToTop';
import { Provider } from 'react-redux';
import store from './redux/store';

const root = (
  <Router basename='/'>
    <Provider store={store}>
      <ScrollToTop />
      <App />
    </Provider>
  </Router>
);

const manifest = document.getElementById('root');

ReactDOM.render(root, manifest);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
