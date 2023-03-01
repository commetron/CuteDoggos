import { StyleSheet, View, Text } from "react-native";
import React from "react";


export default function AccueilScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome on CuteDoggos !</Text>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 50,
  }
});