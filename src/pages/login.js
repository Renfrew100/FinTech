/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {Text, View} from 'react-native';

import CustomImage from '../components/custom-image';
import Form from '../components/form';
import FormTextInput from '../components/form-text-input';
import CustomButton from '../components/custom-button';

const bankImage = {
  uri: 'https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/686015/cover-0521_FintechRefresh_Luke-Cover-3818fbe9eab767c8302f9280f71467de-17adbeff8ab6e2a0ccb23f3c469cdd2e.png',
};

import text from '../styles/text';
import login from '../styles/login';

const Login = () => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');

  const buttonHandler = () => {
    alert(`email is ${enteredEmail} and password is ${enteredPassword}`);
    setEnteredEmail("")
    setEnteredPassword("")
  };

  return (
    <View>
      <CustomImage source={bankImage} backgroundImage>
        <Text
          style={{
            ...text.extraLargeTextSize,
            ...text.centerText,
            ...text.redText,
          }}>
          FINTECH
        </Text>
        <View style={login.bottomBorder} />

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
      </CustomImage>
    </View>
  );
};

export default Login;
