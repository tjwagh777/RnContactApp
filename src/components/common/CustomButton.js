import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import colors from '../../assets/themes/colors';

const CustomButton = ({
  title,
  loading,
  disabled,
  primary,
  secondary,
  danger,
  onPress,
}) => {
  const getbgColor = () => {
    if (disabled) {
      return colors.gray;
    }
    if (primary) {
      return colors.primary;
    }
    if (danger) {
      return colors.danger;
    } else {
      if (secondary) {
        return colors.secondary;
      }
    }
  };
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[styles.wrapper, {backgroundColor: getbgColor()}]}>
      <View style={styles.loader}>
        {loading && (
          <ActivityIndicator
            color={primary ? colors.secondary : colors.primary}
          />
        )}
        {title && (
          <Text
            style={{
              color: disabled ? 'black' : colors.white,
              paddingLeft: loading ? 5 : 0,
            }}>
            {title}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  wrapper: {
    height: 42,
    paddingHorizontal: 5,
    marginVertical: 5,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  loader: {
    flexDirection: 'row',
  },
});
