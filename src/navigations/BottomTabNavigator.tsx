import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import AccueilScreen from "../screens/AccueilScreen";
import ListeDoggo from "../screens/ListeDoggo";
import RandomDoggo from "../screens/RandomDoggo";
import Ionicons from "react-native-vector-icons/Ionicons";


const tab = createMaterialBottomTabNavigator();
function BottomTabNavigator() {
    return (
        <NavigationContainer>
            <tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color }) => {
                        let iconName;

                        if (route.name == "Home") {
                            iconName = "home";
                        } else if (route.name == "RandomDoggo") {
                            iconName = "shuffle-outline"
                        } else if (route.name == "List") {
                            iconName = "list-outline"
                        }
                        return <Ionicons name={iconName} size={20} />
                    }
                })}>
                <tab.Screen name='Home' component={AccueilScreen} />
                <tab.Screen name='List' component={ListeDoggo} />
                <tab.Screen name='RandomDoggo' component={RandomDoggo} />
            </tab.Navigator>
        </NavigationContainer>
    );
}
export default BottomTabNavigator