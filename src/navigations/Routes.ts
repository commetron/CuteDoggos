import { NavigationProp, RouteProp } from "@react-navigation/native";
import { Route } from "react-native";

enum Routes{
    TEST_SCREEN = 'Test',
    BREED_DETAIL_SCREEN = 'Breed',
}

export type ComponentNavigationProps = {
    navigation: NavigationProp<Route>;
    route:RouteProp<Route>;
  }
  
export default Routes