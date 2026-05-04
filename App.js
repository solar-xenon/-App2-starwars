import 'react-native-gesture-handler';
import React from "react";
import { View, Text } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import NetInfo from "@react-native-community/netinfo";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import PlanetsScreen from "./screens/PlanetsScreen";
import PlanetDetailScreen from "./screens/PlanetDetailScreen";
import FilmsScreen from "./screens/FilmsScreen";
import SpaceshipsScreen from "./screens/SpaceshipsScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Planets" component={PlanetsScreen} />
      <Tab.Screen name="Films" component={FilmsScreen} />
      <Tab.Screen name="Spaceships" component={SpaceshipsScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  const [isConnected, setIsConnected] = React.useState(true);

  React.useEffect(() => {
    const unsub = NetInfo.addEventListener((state) => {
      setIsConnected(state.isConnected);
    });
    return () => unsub();
  }, []);

  if (!isConnected) {
    return (
      <GestureHandlerRootView style={{ flex: 1 }}>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Text style={{ fontSize: 22, fontWeight: "bold" }}>
            No Internet Connection
          </Text>
          <Text>Please check your network and try again.</Text>
        </View>
      </GestureHandlerRootView>
    );
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Tabs"
            component={Tabs}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PlanetDetail"
            component={PlanetDetailScreen}
            options={{ title: "Planet Details" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
