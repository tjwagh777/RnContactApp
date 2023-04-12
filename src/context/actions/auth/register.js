import {
  REGISTER_LOADING,
  REGISTER_SUCCESS,
  CLEAR_AUTH_STATE,
  REGISTER_FAIL,
} from '../../../constants/actionTypes';
import axiosIntance from '../../../helpers/axiosInterceptor';

export const clearAuthState = () => dispatch => {
  dispatch({
    type: CLEAR_AUTH_STATE,
  });
};

export default ({
    email,
    password,
    user: user_name,
    first: first_name,
    last: last_name,
  }) =>
  dispatch => {
    dispatch({type: REGISTER_LOADING});
    axiosIntance
      .post('auth/register', {
        email,
        password,
        user_name,
        first_name,
        last_name,
      })
      .then(res => {
        dispatch({
          type: REGISTER_SUCCESS,
          payload: res.data,
        });
      })
      .catch(err => {
        dispatch({
          type: REGISTER_FAIL,
          payload: err.response
            ? err.response.data
            : {error: 'registerAxiosCatch'},
        });
      });
  };
