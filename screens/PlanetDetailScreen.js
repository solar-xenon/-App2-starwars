import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, ActivityIndicator } from "react-native";

export default function PlanetDetailScreen({ route }) {
  const { url } = route.params; // URL from SWAPI
  const [planet, setPlanet] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPlanet(data));
  }, []);

  if (!planet) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
        <Text>Loading planet...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={{ padding: 20 }}>
      <Text style={{ fontSize: 28, fontWeight: "bold", marginBottom: 10 }}>
        {planet.name}
      </Text>

      <Text style={{ fontSize: 18, marginBottom: 5 }}>
        Climate: {planet.climate}
      </Text>
      <Text style={{ fontSize: 18, marginBottom: 5 }}>
        Terrain: {planet.terrain}
      </Text>
      <Text style={{ fontSize: 18, marginBottom: 5 }}>
        Population: {planet.population}
      </Text>
      <Text style={{ fontSize: 18, marginBottom: 5 }}>
        Gravity: {planet.gravity}
      </Text>
      <Text style={{ fontSize: 18, marginBottom: 5 }}>
        Diameter: {planet.diameter}
      </Text>
      <Text style={{ fontSize: 18, marginBottom: 5 }}>
        Rotation Period: {planet.rotation_period}
      </Text>
      <Text style={{ fontSize: 18, marginBottom: 5 }}>
        Orbital Period: {planet.orbital_period}
      </Text>
    </ScrollView>
  );
}
