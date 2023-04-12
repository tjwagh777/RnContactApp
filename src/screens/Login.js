import React, {useContext, useState} from 'react';
import LoginComponents from '../components/common/LoginComponents';
import {GlobalContext} from '../context/Provider';
import loginUser from '../context/actions/auth/loginUser';

const Login = () => {
  const [form, setForm] = useState({});

  const {
    authDispatch,
    authState: {error, loading},
  } = useContext(GlobalContext);

  const onSubmit = () => {
    if (form.username && form.password) {
      console.log(form);
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
