import firebase from 'firebase';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS
} from './types';

export const emailChanged = email => ({
  type: EMAIL_CHANGED,
  email
});

export const passwordChanged = text => ({
  type: PASSWORD_CHANGED,
  text
});

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });
};

export const loginUser = ({ email, password }) => {
  return dispatch => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(user => loginUserSuccess(dispatch, user));
      });
  };
};
