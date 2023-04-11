import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'; //
import {LOGIN, SIGNUP} from '../constants/routeName';
import Login from '../screens/Login';
import Signup from '../screens/Signup';

const AuthNavigator = () => {
  const Auth = createStackNavigator();
  return (
    <Auth.Navigator screenOptions={{headerShown: false}}>
      <Auth.Screen name={LOGIN} component={Login} />
      <Auth.Screen name={SIGNUP} component={Signup} />
    </Auth.Navigator>
  );
};

export default AuthNavigator;
