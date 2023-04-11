import {Image, Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Container from './Container';
import CustomInput from './CustomInput';
import CustomButton from './CustomButton';
import colors from '../../assets/themes/colors';
import {SIGNUP} from '../../constants/routeName';
import {useNavigation} from '@react-navigation/native';
import Message from './Message';

const LoginComponents = ({error, onChange, onSubmit, loading}) => {
  const navigation = useNavigation();
  return (
    <Container>
      <Image
        source={require('../../assets/images/logo.png')}
        style={styles.logoImg}
      />
      <View>
        <Text style={styles.title}>Welcome to Conatacts</Text>
        <Text style={styles.subtitle}>Please login here</Text>
      </View>

      {error?.error && <Message danger onDismiss message={error?.error} />}

      <View style={styles.form}>
        <CustomInput
          label="UserName"
          iconPostion="right"
          placeHolder="Enter user name"
          error={error?.username?.[0]}
          onChangeText={value => {
            onChange({name: 'username', value});
          }}
        />
        <CustomInput
          label="Pasword"
          placeHolder="Enter password"
          secureTextEntry={true}
          icon={<Text>show</Text>}
          iconPostion="right"
          error={error?.password?.[0]}
          onChangeText={value => {
            onChange({name: 'password', value});
          }}
        />
        <CustomButton
          disabled={loading}
          onPress={onSubmit}
          loading={loading}
          primary
          title="Submit"
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.infoTxt}>Need a new account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate(SIGNUP)}>
          <Text style={styles.linkBtn}>Register</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default LoginComponents;

const styles = StyleSheet.create({
  logoImg: {
    height: 150,
    width: 150,
    alignSelf: 'center',
    marginTop: 50,
  },
  title: {
    fontSize: 21,
    textAlign: 'center',
    paddingTop: 20,
    fontWeight: '500',
  },
  subtitle: {
    fontSize: 17,
    textAlign: 'center',
    paddingVertical: 20,
    fontWeight: '500',
  },
  form: {
    paddingTop: 20,
  },
  section: {flexDirection: 'row'},
  infoTxt: {fontSize: 17},
  linkBtn: {paddingLeft: 10, color: colors.primary, fontSize: 16},
});
