import React from 'react';
import {Button, View} from 'react-native';

import button from '../styles/button';

const CustomButton = ({buttonText, buttonHandler}) => {
  return (
    <View style={button.submitButton} >
      <Button title={buttonText} color="#f00" onPress={buttonHandler}/>
    </View>
  );
};

export default CustomButton;
