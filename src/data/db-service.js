import React from 'react';
import {Text, View} from 'react-native';

import text from '../styles/text';
import login from '../styles/login';

import {
  enablePromise,
  openDatabase,
} from 'react-native-sqlite-storage';

enablePromise(true);

export const getDBConnection = async () => {
  return openDatabase({name: 'finance-data.db', location: 'default'});
};

export const createTransactionsTable = async db => {
  const query = `CREATE TABLE IF NOT EXISTS transactions (transactionDate INTEGER, summary TEXT, category_id INTEGER NOT NULL, transactionType TEXT, amount FLOAT)`;
  await db.executeSql(query);
};

const AppHeader = () => {
  return (
    <View>
      <Text
        style={{
          ...text.extraLargeTextSize,
          ...text.centerText,
          ...text.redText,
        }}>
        FINTECH
      </Text>
      <View style={login.bottomBorder} />
    </View>
  );
};

export default AppHeader;
