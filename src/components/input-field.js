import React from 'react';
import {Text, View, TextInput} from 'react-native';
import form from '../styles/form';

const InputField = () => {
  return (
    <View style={form.container}>
      <Text style={form.formLabel}>Login</Text>
      <View>
        <TextInput placeholder="Enter Email" style={form.inputStyle} />
        <TextInput
          secureTextEntry={true}
          placeholder="Enter Password"
          style={form.inputStyle}
        />
      </View>
    </View>
  );
};

export default InputField;
