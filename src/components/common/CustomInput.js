import {View, Text, TextInput, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import colors from '../../assets/themes/colors';

const CustomInput = ({
  onChangeText,
  iconPostion,
  icon,
  style,
  value,
  label,
  error,
  ...props
}) => {
  const [focused, setFocused] = useState(false);
  const getFlexDriection = () => {
    if (icon && iconPostion) {
      if (iconPostion === 'left') {
        return 'row';
      } else if (iconPostion === 'right') {
        return 'row-reverse';
      }
    }
  };
  const getBorderColor = () => {
    if (error) {
      return colors.danger;
    }
    if (focused) {
      return colors.primary;
    } else {
      return colors.gray;
    }
  };

  return (
    <View style={styles.inputContainer}>
      {label && <Text>{label}</Text>}
      <View
        style={[
          styles.wrapper,
          {
            alignItems: icon ? 'center' : 'baseline',
            borderColor: getBorderColor(),
            flexDirection: getFlexDriection(),
          },
        ]}>
        <View>{icon && icon}</View>
        <TextInput
          style={[styles.TextInput, style]}
          onChangeText={onChangeText}
          value={value}
          onFocus={() => {
            setFocused(true);
          }}
          onBlur={() => {
            setFocused(false);
          }}
          {...props}
        />
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  inputContainer: {
    paddingVertical: 12,
  },
  wrapper: {
    height: 42,
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 5,
    marginTop: 5,
  },
  TextInput: {flex: 1, width: '100%'},
  error: {
    color: colors.danger,
    paddingTop: 3,
    fontSize: 12,
  },
});
