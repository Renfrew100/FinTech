/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {View} from 'react-native';

import Form from '../components/form';
import FormTextInput from '../components/form-text-input';
import CustomButton from '../components/custom-button';
import AppHeader from '../components/app-header';
import BackgroundImage from '../components/background-image';

const IncomeExpenses = ({navigation}) => {

  const [payCreditCardSavings, setCreditCardSavings] = useState('');
  const [investments, setInvestments] = useState(0);
  const [property, setProperty] = useState(0);
  const [Loans, setLoans] = useState(0);

  const generateLineChart = () => {
    navigation.navigate("LineChart")
  };

  const backHome = () => {
    navigation.navigate("Home")
  };

/*
  const budgetCalculation = income => {
      setProperty(income * 0.5);
    };
*/

  return (
    <View>
      <BackgroundImage>
        <AppHeader />

        <Form headerText="Income/Expenses">
          <FormTextInput
            placeholder="Enter Credit Card Amount"
            onChangeText={setCreditCardSavings}
            value={payCreditCardSavings}
           />
           <FormTextInput
             placeholder="Enter Investments"
             onChangeText={setInvestments}
             value={investments}
           />
          <FormTextInput
             placeholder="Enter Property Amount"
             onChangeText={setProperty}
             value={property}
          />
          <FormTextInput
             placeholder="Enter Loans"
             onChangeText={setLoans}
             value={Loans}
          />
          <CustomButton buttonText="Generate" buttonHandler={generateLineChart} />
          <CustomButton buttonText="Back to Home" buttonHandler={backHome} />
        </Form>
      </BackgroundImage>
    </View>
  );
};

export default IncomeExpenses;
