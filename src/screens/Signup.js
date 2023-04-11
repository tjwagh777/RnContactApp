import React, {useState, useCallback, useEffect, useContext} from 'react';
import SignupComponents from '../components/common/SignupComponents';
import register, {clearAuthState} from '../context/actions/auth/register';
import {GlobalContext} from '../context/Provider';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {LOGIN} from '../constants/routeName';

const Signup = () => {
  const navigation = useNavigation();
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const {
    authDispatch,
    authState: {error, loading, data},
  } = useContext(GlobalContext);

  useEffect(() => {
    if (data) {
      navigation.navigate(LOGIN);
    }
  }, [data]);

  useFocusEffect(
    useCallback(() => {
      if (data || error) {
        clearAuthState()(authDispatch);
      }
    }, [data, error]),
  );

  const onChange = ({name, value}) => {
    setForm({...form, [name]: value});
    if (value !== '') {
      if (name === 'password') {
        if (value.length < 6) {
          setErrors(prev => {
            return {
              ...prev,
              [name]: 'This field need min 6 characters required',
            };
          });
        } else {
          setErrors(prev => {
            return {...prev, [name]: null};
          });
        }
      } else {
        setErrors(prev => {
          return {...prev, [name]: null};
        });
      }
    } else {
      setErrors(prev => {
        return {...prev, [name]: 'This field is required'};
      });
    }
  };

  const onSubmit = () => {
    if (!form.user) {
      setErrors(prev => {
        return {...prev, user: 'Please add a UserName'};
      });
    }
    if (!form.first) {
      setErrors(prev => {
        return {...prev, first: 'Please add a first'};
      });
    }
    if (!form.last) {
      setErrors(prev => {
        return {...prev, last: 'Please add a last'};
      });
    }
    if (!form.email) {
      setErrors(prev => {
        return {...prev, email: 'Please add a email'};
      });
    }
    if (!form.password) {
      setErrors(prev => {
        return {...prev, password: 'Please add a password'};
      });
    }

    if (
      Object.values(form).length === 5 &&
      Object.values(form).every(item => item.trim().length > 0) &&
      Object.values(errors).every(item => !item)
    ) {
      register(form)(authDispatch);
    }
  };

  return (
    <SignupComponents
      onSubmit={onSubmit}
      onChange={onChange}
      form={form}
      errors={errors}
      error={error}
      loading={loading}
    />
  );
};

export default Signup;
