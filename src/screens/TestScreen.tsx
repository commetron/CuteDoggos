import { StyleSheet, View, Text } from "react-native";
import React from "react";


 export default function TestScreen(){
    return(
      <View style={styles.container}>
        <Text>Test</Text>
      </View>
    );    
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });