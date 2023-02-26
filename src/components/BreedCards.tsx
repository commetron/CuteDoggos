import * as React from "react";
import { Dimensions, Route, StyleSheet,  Text, TouchableOpacity } from "react-native";
import { NavigationProp, RouteProp, useNavigation} from '@react-navigation/native';
import { Card } from "react-native-paper";
import Routes from "../navigations/Routes";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
type Props = {
  content: any
  navigation:NavigationProp<Route>

}


export function BreedCards  (props: Props)  {
  

  return(
    <TouchableOpacity onPress={() => props.navigation.navigate(Routes.BREED_DETAIL_SCREEN, {content: props.content})} >
      <Card style={styles.card}>
        <Card.Content>
          <Text>{props.content}</Text>
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

