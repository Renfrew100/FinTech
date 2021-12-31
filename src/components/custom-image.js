import React from 'react';
import {ImageBackground, Image} from 'react-native';
const CustomImage = ({
  children,
  source,
  style,
  backgroundImage
}) => {
  if (backgroundImage) {
    return (
      <ImageBackground source={source} resizeMode="cover" style={style}>
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
