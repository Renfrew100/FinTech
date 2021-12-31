import React from 'react';
import {Text, ScrollView} from 'react-native';
import form from '../styles/form';

const Form = ({children, headerText}) => {
  return (
    <ScrollView contentContainerStyle={form.container} keyboardShouldPersistTaps="never">
      <Text style={form.formLabel}>{headerText}</Text>
      {children}
    </ScrollView>
  );
};

export default Form;
