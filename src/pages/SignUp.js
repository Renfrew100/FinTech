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

const SignUp = ({navigation}) => {
  const [enteredFirstName, setEnteredFirstName] = useState('');

  const [enteredLastName, setEnteredLastName] = useState('');

  const [enteredEmail, setEnteredEmail] = useState('');

  const [enteredPassword, setEnteredPassword] = useState('');

  const [enteredConfirmPassword, setEnteredConfirmPassword] = useState('');

  const toLogin = () => {
    navigation.navigate("Login")
  };

  const backHome = () => {
    navigation.navigate("Home")
  };


  return (
    <View>
      <BackgroundImage>
        <AppHeader />

        <Form headerText="SignUp">

          <FormTextInput
            placeholder="First Name, Last Name"
            onChangeText={setEnteredFirstName}
            value={enteredFirstName}
          />
          <FormTextInput
            secureTextEntry={true}
            placeholder="Password"
            onChangeText={setEnteredPassword}
            value={enteredPassword}
          />
          <FormTextInput
            secureTextEntry={true}
            placeholder="Confirm Password"
            onChangeText={setEnteredPassword}
            value={enteredPassword}
          />
        <CustomButton buttonText="SignUp" buttonHandler={toLogin} />
        <CustomButton buttonText="Back to Home" buttonHandler={backHome} />
        </Form>
      </BackgroundImage>
    </View>
  );
};

export default SignUp;
