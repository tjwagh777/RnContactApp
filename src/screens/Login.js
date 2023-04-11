import React, {useContext, useState} from 'react';
import LoginComponents from '../components/common/LoginComponents';
import {useNavigation} from '@react-navigation/native';
import {GlobalContext} from '../context/Provider';

const Login = () => {
  const navigation = useNavigation();
  const [form, setForm] = useState({});
  const {
    authDispatch,
    authState: {error, loading},
  } = useContext(GlobalContext);

  const onSubmit = () => {
    if (form.usename && form.password) {
      loginUser(form)(authDispatch);
    }
  };

  const onChange = ({name, value}) => {
    setForm({...form, [name]: value});
  };
  return (
    <LoginComponents
      onSubmit={onSubmit}
      onChange={onChange}
      form={form}
      error={error}
      loading={loading}
    />
  );
};

export default Login;
