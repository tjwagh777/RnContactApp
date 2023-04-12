import React, {useContext, useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';
import DrawerNavigator from './DrawerNavigator';
import {GlobalContext} from '../context/Provider';
import {ActivityIndicator} from 'react-native';

const AppNavigator = () => {
  const {
    authState: {isLoggedIn},
  } = useContext(GlobalContext);

  const [isAuth, setIsAuth] = useState(false);
  const [authLoaded, setAuthLoaded] = useState(true); //set it false to work loader

  const getUser = async () => {
    try {
      //const user = await AsyncStorage.getItem('user');
      let user = 'test';
      if (user) {
        setAuthLoaded(true);
        setIsAuth(true);
      } else {
        setAuthLoaded(true);
        setIsAuth(false);
      }
    } catch (error) {}
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      {authLoaded ? (
        <NavigationContainer>
          {isLoggedIn || isAuth ? <DrawerNavigator /> : <AuthNavigator />}
        </NavigationContainer>
      ) : (
        <ActivityIndicator />
      )}
    </>
  );
};

export default AppNavigator;
