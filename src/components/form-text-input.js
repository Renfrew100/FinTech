import React from 'react';
import {TextInput} from 'react-native';

import form from '../styles/form';

const FormTextInput = ({placeholder, secureTextEntry, onChangeText, value}) => {
  return (
    <TextInput
      placeholder={placeholder}
      placeholderTextColor="#888"
      style={form.inputStyle}
      secureTextEntry={secureTextEntry}
      onChangeText={onChangeText}
      value={value}
    />
  );
};

export default FormTextInput;
