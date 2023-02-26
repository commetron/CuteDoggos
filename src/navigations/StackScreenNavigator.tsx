import { createStackNavigator } from '@react-navigation/stack';
import * as React from "react";
import ListeDoggoScreen from '../screens/ListeDoggoScreen';
import Routes from './Routes';
import BreedScreen from '../screens/BreedScreen';

const Stack = createStackNavigator();
function StackScreenNavigator(){
      return(
          <Stack.Navigator>
            <Stack.Group>
                <Stack.Screen name="Breeds" component={ListeDoggoScreen} />
                <Stack.Screen name={Routes.BREED_DETAIL_SCREEN} component={BreedScreen}/>
            </Stack.Group>
          </Stack.Navigator>
      );
  }

  
export default StackScreenNavigator