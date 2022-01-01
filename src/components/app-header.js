import React from 'react';
import {Text, View} from 'react-native';

import text from '../styles/text';
import login from '../styles/login';

const AppHeader = () => {
  return (
    <View>
      <Text
        style={{
          ...text.extraLargeTextSize,
          ...text.centerText,
          ...text.redText,
        }}>
        FINTECH
      </Text>
      <View style={login.bottomBorder} />
    </View>
  );
};

export default AppHeader;
