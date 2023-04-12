import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  LOGIN_FAIL,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
} from '../../../constants/actionTypes';
import axiosIntance from '../../../helpers/axiosInterceptor';

let test = 'test@gmail.com';

export default ({password, username}) =>
  dispatch => {
    dispatch({type: LOGIN_LOADING});
    axiosIntance
      .post('auth/login', {
        password,
        username,
      })
      .then(res => {
        AsyncStorage.setItem('token', res.data.tekon);
        AsyncStorage.setItem('user', test);

        dispatch({
          type: LOGIN_SUCCESS,
          payload: res.data,
        });
      })
      .catch(err => {
        dispatch({
          type: LOGIN_FAIL,
          payload: err.response
            ? err.response.data
            : {error: 'LoginAxiosCatch'},
        });
      });
  };
