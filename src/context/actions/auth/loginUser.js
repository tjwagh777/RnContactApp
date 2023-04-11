import {LOGIN_LOADING, LOGIN_SUCCESS} from '../../../constants/actionTypes';
import axiosIntance from '../../../helpers/axiosInterceptor';

export default ({password, username}) =>
  dispatch => {
    dispatch({type: LOGIN_LOADING});
    axiosIntance
      .post('auth/login', {
        password,
        username,
      })
      .then(res => {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: res.data,
        });
      })
      .catch(err => {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: err.response
            ? err.response.data
            : {error: 'registerAxiosCatch'},
        });
      });
  };
