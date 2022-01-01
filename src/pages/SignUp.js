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


  const buttonHandler = () => {
    navigation.navigate("Login")
  };

  return (
    <View>
      <BackgroundImage>
        <AppHeader />

        <Form headerText="SignUp">
          <FormTextInput
            placeholder="First Name"
            onChangeText={setEnteredFirstName}
            value={enteredFirstName}
          />
           <FormTextInput
            placeholder="Last Name"
            onChangeText={setEnteredLastName}
            value={enteredLastName}
          />
          <FormTextInput
            secureTextEntry={true}
            placeholder="Email"
            onChangeText={setEnteredEmail}
            value={enteredEmail}
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
            onChangeText={setEnteredConfirmPassword}
            value={enteredConfirmPassword}
          />
          <CustomButton buttonText="SignUp" buttonHandler={buttonHandler} />
        </Form>
      </BackgroundImage>
    </View>
  );
};

export default SignUp;
