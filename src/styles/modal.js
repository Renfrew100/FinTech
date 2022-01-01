import React from 'react';
import { StyleSheet } from "react-native"

export default StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      marginTop: "auto",
      marginBottom: "auto",
      backgroundColor: "#fff",
      borderRadius: 20,
      padding: 25,
      paddingTop: 50,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
      height: "40%"
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "#000",
      fontWeight: "bold",
      textAlign: "center",
      fontSize: 20
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    },
    result: {
      color: "#f00"
    }
  });
  