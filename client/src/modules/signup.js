import { handleActions } from 'redux-actions';

import axios from 'axios';

const POST_SIGNUP_PENDING = 'POST_SIGNUP_PENDING';
const POST_SIGNUP_SUCCESS = 'POST_SIGNUP_SUCCESS';
const POST_SIGNUP_FAILURE = 'POST_SIGNUP_FAILUER';

const LOGOUT = 'LOGOUT';

axios.defaults.withCredentials = true;

function postSignupAPI(data) {
  return axios.post('http://localhost:3001/user/signup', data);
}

const initialState = {
  pending: false,
  error: false,
  isSignup: localStorage.getItem('isSignup') === 'true',
};

export const signup = (data) => (dispatch) => {
  dispatch({ type: POST_SIGNUP_PENDING });

  return postSignupAPI(data)
    .then((result) => {
      dispatch({
        type: POST_SIGNUP_SUCCESS,
        payload: result.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: POST_SIGNUP_FAILURE,
        payload: error,
      });
    });
};

//
export default handleActions(
  {
    [POST_SIGNUP_PENDING]: (state, action) => {
      return {
        ...state,
        pending: true,
        error: false,
        isSignup: false,
      };
    },
    [POST_SIGNUP_SUCCESS]: (state, action) => {
      return {
        ...state,
        pending: false,
        data: action.payload,
        isSignup: true,
      };
    },
    [POST_SIGNUP_FAILURE]: (state, action) => {
      return {
        ...state,
        pending: false,
        error: true,
        isSignup: false,
      };
    },
    [LOGOUT]: (state, action) => {
      return {
        ...state,
        isSignup: false,
      };
    },
  },
  initialState
);
