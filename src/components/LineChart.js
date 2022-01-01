import React from 'react';
import {TextInput} from 'react-native';

import form from '../styles/form';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";

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

    const data = {
      labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      datasets: [
        {
          data: ["-100000", "-90000", "-80000", "-70000", "-60000", "-50000","-40000","-30000","-20000","-10000", "10000", "20000", "30000", "40000", "50000", "60000", "70000", "80000", "90000", "100000"],
          color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
          strokeWidth: 2 // optional
        }
      ],
      legend: ["Income/Expenses"] // optional
    };

    <LineChart
      data={data}
      width={screenWidth}
      height={220}
      chartConfig={chartConfig}
    />
  );
};

export default FormTextInput;