import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import colors from '../../assets/themes/colors';

const Message = ({
  message,
  info,
  primary,
  success,
  danger,
  onDismiss,
  retry,
  retryFn,
}) => {
  const [userDismissed, setUserDismissed] = useState(false);
  const getbgColor = () => {
    if (primary) {
      return colors.primary;
    }
    if (danger) {
      return colors.danger;
    }
    if (success) {
      return colors.success;
    }
    if (info) {
      return colors.secondary;
    }
  };
  return (
    <>
      {userDismissed ? null : (
        <TouchableOpacity
          style={[styles.wrapper, {backgroundColor: getbgColor()}]}>
          <View style={styles.loader}>
            <Text
              style={{
                color: colors.white,
              }}>
              {message}
            </Text>
            {retry && !typeof onDismiss === 'function' && (
              <TouchableOpacity onPress={retryFn}>
                <Text
                  style={{
                    color: colors.white,
                  }}>
                  Retry
                </Text>
              </TouchableOpacity>
            )}

            {typeof onDismiss === 'function' && (
              <TouchableOpacity
                onPress={() => {
                  setUserDismissed(true);
                  onDismiss();
                }}>
                <Text
                  style={{
                    color: colors.white,
                  }}>
                  X
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </TouchableOpacity>
      )}
    </>
  );
};

export default Message;

const styles = StyleSheet.create({
  wrapper: {
    height: 42,
    paddingHorizontal: 5,
    marginVertical: 5,
    borderRadius: 4,
    paddingVertical: 10,
  },
  loader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
