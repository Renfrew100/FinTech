import React from 'react';
import {ImageBackground, Image} from 'react-native';

import image from '../styles/image';
const CustomImage = ({
  children,
  source,
  style,
  backgroundImage
}) => {
  if (backgroundImage) {
    return (
      <ImageBackground source={source} resizeMode="cover" style={image.full_background}>
        {children}
      </ImageBackground>
    );
  }

  return (
    <Image
      style={style}
      source={source}
    />
  );
};

export default CustomImage;
