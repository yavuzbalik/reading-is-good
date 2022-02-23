/* eslint-disable */
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import ApplicationView from './pages/application/view/applicationView';
import rootReducer from './redux/reducer';
import { history } from './history'
import './index.scss';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
      <Provider store={store}>
          <ApplicationView />
      </Provider>,
  document.getElementById('root'),
);
