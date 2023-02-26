import { StyleSheet, View, Text } from "react-native";
import React from "react";
import { ComponentNavigationProps } from "../navigations/Routes";
import { useQuery } from "react-query";

 export default function BreedScreen(props: ComponentNavigationProps){
  const content = props?.route?.params?.content;

  
    return(
      <View style={styles.container}>
        <Text>{content}</Text>
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