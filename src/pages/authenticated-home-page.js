import React from 'react';
import {View} from 'react-native';

import BackgroundImage from '../components/background-image';
import AppHeader from '../components/app-header';
import CustomButton from '../components/custom-button';

import homePage from '../styles/homePage';

const AuthenticatedHomePage = ({navigation}) => {
  const budgetPlannerHandler = () => navigation.navigate('BudgetPlanner');
  const incomeExpensesHandler = () => navigation.navigate('IncomeExpenses')
  return (
    <View>
      <BackgroundImage>
        <AppHeader />
        <View style={homePage.centerButtons}>
          <CustomButton buttonText="BUDGET PLANNER" buttonHandler={budgetPlannerHandler} />
          <CustomButton buttonText="INCOME/EXPENSES" buttonHandler={incomeExpensesHandler} />
        </View>
      </BackgroundImage>
    </View>
  );
};

export default AuthenticatedHomePage;
