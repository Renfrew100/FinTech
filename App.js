import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from './src/pages/login';
import SignUp from './src/pages/SignUp';
import HomePage from './src/pages/home-page';
import AuthenticatedHomePage from './src/pages/authenticated-home-page';
import BudgetPlanner from './src/pages/bugdet-planner';
import IncomeExpenses from './src/pages/IncomeExpenses';
import FinanceLineChart from '../components/FinanceLineChart';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Authenticated"
          component={AuthenticatedHomePage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="BudgetPlanner"
          component={BudgetPlanner}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="IncomeExpenses"
          component={IncomeExpenses}
          options={{headerShown: false}}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
