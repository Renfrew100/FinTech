import React from 'react';
import {View} from 'react-native';

import CustomButton from '../components/custom-button';
import BackgroundImage from '../components/background-image';
import AppHeader from '../components/app-header';

import homePage from '../styles/homePage';

const HomePage = ({navigation}) => {
  // navigation is passed to every screen component
  const loginHandler = () => navigation.navigate('Login');
  const signUpHandler = () => navigation.navigate('SignUp');

  // const submitHandler = () => navigation.navigate("Submit");
  return (
    <View>
      <BackgroundImage>
        <AppHeader />
        <View style={homePage.centerButtons}>
          <CustomButton buttonText="LOGIN" buttonHandler={loginHandler} />
          <CustomButton buttonText="SIGN UP" buttonHandler={signUpHandler} />
        </View>
      </BackgroundImage>
    </View>
  );
};

export default HomePage;
