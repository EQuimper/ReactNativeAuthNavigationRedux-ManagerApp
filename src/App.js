import React, { Component } from 'react';
// import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import createLogger from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import config from './config/';
import LoginForm from './components/LoginForm';

const middleware = [
  createLogger(),
  ReduxThunk
];

class App extends Component {
  componentWillMount() {
    firebase.initializeApp(config.fbConfig);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(...middleware));
    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
