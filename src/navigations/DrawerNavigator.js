import {View, Text} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import StackNavigator from './StackNavigator';
import {HOME_NAVIGATOR} from '../constants/routeName';

const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator>
      <Drawer.Screen name={HOME_NAVIGATOR} component={StackNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
