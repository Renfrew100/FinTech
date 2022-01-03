import React from 'react';
import {TextInput, View} from 'react-native';

import form from '../styles/form';


import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;

import {
  LineChart,
} from "react-native-chart-kit";

    const chartConfig = {
      backgroundGradientFrom: "#1E2923",
      backgroundGradientFromOpacity: 0,
      backgroundGradientTo: "#08130D",
      backgroundGradientToOpacity: 0.5,
      color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
      strokeWidth: 2, // optional, default 3
      barPercentage: 0.5,
      useShadowColorFromDataset: false // optional
    };

    const data = {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"],
      datasets: [
        {
          data: ["-100000", "-90000", "-80000", "-70000", "-60000", "-50000","-40000","-30000","-20000","-10000", "10000", "20000", "30000", "40000", "50000", "60000", "70000", "80000", "90000", "100000"],
          color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
          strokeWidth: 2 // optional
        }
      ],
      legend: ["Income/Expenses"] // optional
    };

const FormTextInput = ({placeholder, secureTextEntry, onChangeText, value}) => {
  return (
  <View>
    <TextInput
      placeholder={placeholder}
      placeholderTextColor="#888"
      style={form.inputStyle}
      secureTextEntry={secureTextEntry}
      onChangeText={onChangeText}
      value={value}
    />

     <LineChart
       data={data}
       width={screenWidth}
       height={220}
       chartConfig={chartConfig}
     />
   </View>
  );
};

export default FormTextInput;