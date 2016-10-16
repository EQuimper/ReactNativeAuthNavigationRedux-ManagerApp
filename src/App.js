import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import createLogger from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import config from './config/';
import Router from './Router';

const middleware = [
  createLogger(),
  ReduxThunk
];

const store = createStore(reducers, {}, applyMiddleware(...middleware));

class App extends Component {
  componentWillMount() {
    firebase.initializeApp(config.fbConfig);
  }
  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
