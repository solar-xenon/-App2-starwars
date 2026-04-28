import React from "react";
import { View, Text } from "react-native";
import NetInfo from "@react-native-community/netinfo";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import PlanetsScreen from "./screens/PlanetsScreen";
import FilmsScreen from "./screens/FilmsScreen";
import SpaceshipsScreen from "./screens/SpaceshipsScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  const [isConnected, setIsConnected] = React.useState(true);

  React.useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsConnected(state.isConnected);
    });

    return () => unsubscribe();
  }, []);

  if (!isConnected) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          padding: 20,
        }}
      >
        <Text style={{ fontSize: 22, fontWeight: "bold", marginBottom: 10 }}>
          No Internet Connection
        </Text>
        <Text style={{ fontSize: 16, textAlign: "center" }}>
          Please check your network and try again.
        </Text>
      </View>
    );
  }

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
