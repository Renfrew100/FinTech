import React from 'react';
import {View} from 'react-native';

import CustomButton from '../components/custom-button';
import BackgroundImage from '../components/background-image';
import AppHeader from '../components/app-header';

import homePage from '../styles/homePage';

const HomePage = ({navigation}) => {
  // navigation is passed to every screen component
  const buttonHandler = () => navigation.navigate('Login');
  return (
    <View>
      <BackgroundImage>
        <AppHeader />
        <View style={homePage.centerButtons}>
          <CustomButton buttonText="LOGIN" buttonHandler={buttonHandler} />
          <CustomButton buttonText="SIGN UP" buttonHandler={buttonHandler} />
        </View>
      </BackgroundImage>
    </View>
  );
};

export default HomePage;
