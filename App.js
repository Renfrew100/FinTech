/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Text, View} from 'react-native';

import CustomImage from './src/components/custom-image';
import InputField from './src/components/input-field';

const bankImage = {
  uri: 'https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/686015/cover-0521_FintechRefresh_Luke-Cover-3818fbe9eab767c8302f9280f71467de-17adbeff8ab6e2a0ccb23f3c469cdd2e.png',
};

const fintechImage = {
  uri: 'https://santanderglobaltech.com/wp-content/uploads/2019/03/fintechdescription.jpg',
};

import image from './src/styles/image';
import text from './src/styles/text';
import global from './src/styles/global';

const App = () => {
  return (
    <View>
      <CustomImage
        source={bankImage}
        resizeMode="cover"
        style={image.full_background}
        backgroundImage>
        <Text
          style={{
            ...text.extraLargeTextSize,
            ...text.centerText,
            ...text.redText,
          }}>
          FINTECH
        </Text>
        <InputField />
      </CustomImage>
    </View>
  );
};

export default App;
