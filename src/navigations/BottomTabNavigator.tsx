import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import AccueilScreen from "../screens/AccueilScreen";
import ListeDoggo from "../screens/ListeDoggo";
import RandomDoggo from "../screens/RandomDoggo";
import Ionicons from "react-native-vector-icons/Ionicons";


const tab = createMaterialBottomTabNavigator();
function BottomTabNavigator(){
    return(
    <NavigationContainer>
        <tab.Navigator
        screenOptions={({route}) => ({
        tabBarIcon: ({focused, color}) => {
            let iconName;

            if (route.name == "accueil" ){
            iconName = "home";
            } else if (route.name == "randomDoggo"){
            iconName = "shuffle-outline"
            } else if (route.name == "Liste"){
            iconName = "list-outline"
            }
            return <Ionicons name={iconName} size={20}/>
        }
        })}>
        <tab.Screen name='accueil' component={AccueilScreen}/>
        <tab.Screen name='Liste' component={ListeDoggo} />
        <tab.Screen name='randomDoggo' component={RandomDoggo} />
        </tab.Navigator>
    </NavigationContainer>
    );
}
export default BottomTabNavigator