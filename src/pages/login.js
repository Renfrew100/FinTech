/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {View, Alert} from 'react-native';

import Form from '../components/form';
import FormTextInput from '../components/form-text-input';
import CustomButton from '../components/custom-button';
import AppHeader from '../components/app-header';
import BackgroundImage from '../components/background-image';
import auth from '@react-native-firebase/auth';

const Login = ({navigation}) => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');

  const buttonAuth = async () => {
    try {
      await auth().signInWithEmailAndPassword(enteredEmail, enteredPassword);
      navigation.navigate('Authenticated');
    } catch (error) {
      switch (error.code) {
        case 'auth/user-not-found':
          Alert.alert(
            'Email not found',
            `Email ${enteredEmail} is not an existing user`,
            [{text: 'OK'}],
          );
          break;
        case 'auth/invalid-email':
          Alert.alert('Invalid Email', `Email ${enteredEmail} does not exist`, [
            {text: 'OK'},
          ]);
          break;
        case 'auth/wrong-password':
          Alert.alert(
            'Invalid Password',
            `Password does not match email ${enteredEmail}`,
            [{text: 'OK'}],
          );
          break;

        default:
          break;
      }
      console.log(error);
    }
  };

  const backHome = () => {
    navigation.navigate('Home');
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
          <CustomButton buttonText="LOGIN" buttonHandler={buttonAuth} />
          <CustomButton buttonText="Back to Home" buttonHandler={backHome} />
        </Form>
      </BackgroundImage>
    </View>
  );
};

export default Login;
