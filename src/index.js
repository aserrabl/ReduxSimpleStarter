import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import reducers from './reducers';

const API_KEY = 'AIzaSyDhgtkCPK6_BP1ix7TrRIAzCpJ4Uhoou_4';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
    <App />
  , document.querySelector('.container'));
