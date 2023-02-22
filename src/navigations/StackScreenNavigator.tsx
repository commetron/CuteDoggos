import { createStackNavigator } from '@react-navigation/stack';
import * as React from "react";
import ListeDoggoScreen from '../screens/ListeDoggoScreen';
import TestScreen from '../screens/TestScreen';
import Routes from './Routes';

const Stack = createStackNavigator();
function StackScreenNavigator(){
      return(
          <Stack.Navigator>
            <Stack.Group>
                <Stack.Screen name="Breeds" component={ListeDoggoScreen} />
                <Stack.Screen name={Routes.TEST_SCREEN} component={TestScreen}/>
            </Stack.Group>
          </Stack.Navigator>
      );
  }

  
export default StackScreenNavigator