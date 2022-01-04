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
<<<<<<< HEAD
import auth from '@react-native-firebase/auth'
//import { auth } from 'firebase/app';
=======
import auth from '@react-native-firebase/auth';
>>>>>>> db307a67f710dd7f6a390e9279e1032a1e4523cb

const SignUp = ({navigation}) => {
  const [enteredFirstName, setEnteredFirstName] = useState('');

  const [enteredLastName, setEnteredLastName] = useState('');

  const [enteredEmail, setEnteredEmail] = useState('');

  const [enteredPassword, setEnteredPassword] = useState('');

  const [enteredConfirmPassword, setEnteredConfirmPassword] = useState('');

<<<<<<< HEAD
  const toLogin = () => {
          auth().createUserWithEmailAndPassword(enteredEmail, enteredPassword)
           .then(userCredentials => {
               const user = userCredentials.user;
               console.log(user.email);
           })
           .catch(error => alert(error.message))
=======
  const toLogin = async () => {
    try {
      await auth().createUserWithEmailAndPassword(enteredEmail, enteredPassword);
    } catch( e) {
      console.log(e)
    }
  
>>>>>>> db307a67f710dd7f6a390e9279e1032a1e4523cb

    navigation.navigate('Login');
  };

  const backHome = () => {
    navigation.navigate('Home');
  };

  /*const handleSignUp = () => {
    auth
        .createUserWithEmailAndPassword(email, password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log(user.email);
        })
        .catch(error => alert(error.message))
  }*/

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

          <CustomButton buttonText="SignUp" buttonHandler={toLogin} />
          <CustomButton buttonText="Back to Home" buttonHandler={backHome} />
        </Form>
      </BackgroundImage>
    </View>
  );
};

export default SignUp;
