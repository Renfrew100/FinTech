import React, {useState} from 'react';
import {Text, View} from 'react-native';

import BackgroundImage from '../components/background-image';
import AppHeader from '../components/app-header';
import Form from '../components/form';
import FormTextInput from '../components/form-text-input';
import CustomButton from '../components/custom-button';
import CustomModal from '../components/custom-modal';
import modal from '../styles/modal';

const BugdetPlanner = ({navigation}) => {
  const [payRateSavings, setPayRateSavings] = useState('');
  const [necessity, setNecessity] = useState(0);
  const [wants, setWants] = useState(0);
  const [savingAndDebtRepayment, setSavingAndDebtRepayment] = useState(0);

  const [modalVisible, setModalVisible] = useState(false);

  const calculateHandler = () => {
    budgetCalculation(payRateSavings);
    setModalVisible(true);
    setPayRateSavings("")
  };

  const backHome = () => {
    navigation.navigate("Home")
  };


  const budgetCalculation = income => {
    setNecessity(income * 0.5);
    setWants(income * 0.3);
    setSavingAndDebtRepayment(income * 0.2);
  };

  return (
    <View>
      <BackgroundImage>
        <AppHeader />
        {modalVisible && (
          <CustomModal
            setModalVisible={setModalVisible}
            modalChildren={
              <View>
                <Text style={modal.textStyle}>
                  Available nescessity spendings{' '}
                  <Text style={modal.result}>${necessity}</Text>
                </Text>
                <Text style={modal.textStyle}>
                  Available wants spendings{' '}
                  <Text style={modal.result}>${wants}</Text>
                </Text>
                <Text style={modal.textStyle}>
                  Available savings spendings{' '}
                  <Text style={modal.result}>${savingAndDebtRepayment}</Text>
                </Text>
              </View>
            }
          />
        )}
        <Form headerText="Budget Planner Calculator">
          <FormTextInput
            placeholder="Enter Annual Pay Rate / Savings"
            onChangeText={setPayRateSavings}
            value={payRateSavings}
          />
          <CustomButton
            buttonText="CALCULATE"
            buttonHandler={calculateHandler}
          />
          <CustomButton
            buttonText="Back to Home"
            buttonHandler={backHome}
          />
        </Form>
      </BackgroundImage>
    </View>
  );
};

export default BugdetPlanner;
