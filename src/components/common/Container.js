import {View, Text, ScrollView, StyleSheet} from 'react-native';
import React from 'react';

const Container = ({style, children}) => {
  return (
    <ScrollView>
      <View style={[styles.wrapper, style]}>{children}</View>
    </ScrollView>
  );
};

export default Container;

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
  },
});
