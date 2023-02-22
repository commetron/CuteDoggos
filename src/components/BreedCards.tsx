import * as React from "react";
import { Dimensions, StyleSheet,  Text, TouchableOpacity } from "react-native";
import { useNavigation} from '@react-navigation/native';
import { Card } from "react-native-paper";
import Routes from "../navigations/Routes";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type routeParams = {
  Test: undefined;
}


export function BreedCards  ({content}: any)  {
  const navigation = useNavigation<NativeStackNavigationProp<routeParams>>();
  return(
    <TouchableOpacity onPress={() => navigation.navigate(Routes.TEST_SCREEN)} >
      <Card style={styles.card}>
        <Card.Content>
          <Text>{content}</Text>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );
};

 
  
  const largeurMaximale = Dimensions.get('screen').width;
  const styles = StyleSheet.create({
    
    card:{
        flex:1,
        width: largeurMaximale,
        marginTop: 5
        
      }
    });

