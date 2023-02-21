import React, {useCallback, useEffect, useState} from 'react';
import { StyleSheet, View, Text} from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import Entypo from '@expo/vector-icons/Entypo';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import AccueilScreen from './src/screens/AccueilScreen';
import RandomDoggo from './src/screens/RandomDoggo';
import ListeDoggo from './src/screens/ListeDoggo';


const tab = createMaterialBottomTabNavigator();
SplashScreen.preventAutoHideAsync();

const App = () => {

  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync(Entypo.font);
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }
  onLayoutRootView();
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
