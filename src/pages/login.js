/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {View} from 'react-native';

import Form from '../components/form';
import FormTextInput from '../components/form-text-input';
import CustomButton from '../components/custom-button';
import AppHeader from '../components/app-header';
import BackgroundImage from '../components/background-image';

const Login = () => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');

  const buttonHandler = () => {
    alert(`email is ${enteredEmail} and password is ${enteredPassword}`);
    setEnteredEmail('');
    setEnteredPassword('');
  };

  return (
    <View>
      <BackgroundImage>
        <AppHeader />

        <Form headerText="Login">
          <FormTextInput
            placeholder="Enter Email"
            onChangeText={setEnteredEmail}
            value={enteredEmail}
          />
          <FormTextInput
            secureTextEntry={true}
            placeholder="Enter Password"
            onChangeText={setEnteredPassword}
            value={enteredPassword}
          />
          <CustomButton buttonText="LOGIN" buttonHandler={buttonHandler} />
        </Form>
      </BackgroundImage>
    </View>
  );
};

export default Login;
