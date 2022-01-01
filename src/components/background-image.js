import React from 'react';
import {ImageBackground, StyleSheet} from 'react-native';

const BackgroundImage = ({children}) => {
  const bankImage = {
    uri: 'https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/686015/cover-0521_FintechRefresh_Luke-Cover-3818fbe9eab767c8302f9280f71467de-17adbeff8ab6e2a0ccb23f3c469cdd2e.png',
  };
  return (
    <ImageBackground
      source={bankImage}
      resizeMode="cover"
      style={styles.full_background}>
      {children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  full_background: {
    height: '100%',
  },
});

export default BackgroundImage;
