import {Image, Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Container from './Container';
import CustomInput from './CustomInput';
import CustomButton from './CustomButton';
import colors from '../../assets/themes/colors';
import {LOGIN} from '../../constants/routeName';
import {useNavigation} from '@react-navigation/native';
import Message from './Message';

const SignupComponents = ({
  onSubmit,
  onChange,
  form,
  error,
  loading,
  errors,
}) => {
  const navigation = useNavigation();
  return (
    <Container>
      <Image
        source={require('../../assets/images/logo.png')}
        style={styles.logoImg}
      />
      <View>
        <Text style={styles.title}>Welcome to Conatacts</Text>
        <Text style={styles.subtitle}>Create a account</Text>
      </View>
      <View style={styles.form}>
        {error?.error && (
          <Message
            danger
            retry
            retryFn={() => {
              console.log(1);
            }}
            message={error?.error}
          />
        )}
        <CustomInput
          label="User Name"
          iconPostion="right"
          placeHolder="Enter user name"
          error={errors.user || error?.username?.[0]}
          onChangeText={value => {
            onChange({name: 'user', value});
          }}
        />
        <CustomInput
          label="First Name"
          iconPostion="right"
          placeHolder="Enter first name"
          onChangeText={value => {
            onChange({name: 'first', value});
          }}
          error={errors.first || error?.first_name?.[0]}
        />
        <CustomInput
          label="Last Name"
          iconPostion="right"
          placeHolder="Enter last name"
          error={errors.last || error?.last_name?.[0]}
          onChangeText={value => {
            onChange({name: 'last', value});
          }}
        />
        <CustomInput
          label="Email"
          iconPostion="right"
          placeHolder="Enter email "
          error={errors.email || error?.email?.[0]}
          onChangeText={value => {
            onChange({name: 'email', value});
          }}
        />
        <CustomInput
          label="Pasword"
          placeHolder="Enter pasword"
          secureTextEntry={true}
          icon={<Text>show</Text>}
          iconPostion="right"
          error={errors.password || error?.password?.[0]}
          onChangeText={value => {
            onChange({name: 'password', value});
          }}
        />
        <CustomButton
          loading={loading}
          onPress={onSubmit}
          disabled={loading}
          primary
          title="Submit"
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.infoTxt}>Already have account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate(LOGIN)}>
          <Text style={styles.linkBtn}>Login</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default SignupComponents;

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
