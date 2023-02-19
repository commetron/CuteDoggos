import { StyleSheet, View, Text } from "react-native";
import React from "react";

export default function AccueilScreen(){
    return(
      <View style={styles.container}>
        <Text>Mon accueil</Text>
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