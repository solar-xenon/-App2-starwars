import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import PlanetsScreen from './screens/PlanetsScreen';
import FilmsScreen from './screens/FilmsScreen';
import SpaceshipsScreen from './screens/SpaceshipsScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Planets" component={PlanetsScreen} />
        <Tab.Screen name="Films" component={FilmsScreen} />
        <Tab.Screen name="Spaceships" component={SpaceshipsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
