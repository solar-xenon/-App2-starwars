import React, { useEffect, useState } from "react";
import { ScrollView, TextInput } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import SwipeableItem from "../components/SwipeableItem";
import LazyImage from "../components/LazyImage";

export default function PlanetsScreen({ navigation }) {
  const [planets, setPlanets] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://swapi.py4e.com/api/planets/")
      .then((res) => res.json())
      .then((data) => setPlanets(data.results))
      .catch((err) => console.log("API error:", err));
  }, []);

  const filtered = planets.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  function handleSwipe(planet) {
    navigation.navigate("PlanetDetail", { url: planet.url });
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ScrollView
        style={{ padding: 20 }}
        horizontal={false}
        nestedScrollEnabled={true}
      >
        <TextInput
          placeholder="Search planets..."
          value={search}
          onChangeText={setSearch}
          style={{
            padding: 10,
            borderWidth: 1,
            borderRadius: 8,
            marginBottom: 20
          }}
        />

        <LazyImage
          style={{ width: "100%", height: 180, marginBottom: 20 }}
          resizeMode="cover"
          source={{ uri: "https://picsum.photos/600/300" }}
        />

        {filtered.map((p, index) => (
          <SwipeableItem
            key={index}
            name={p.name}
            onSwipe={() => handleSwipe(p)}
          />
        ))}
      </ScrollView>
    </GestureHandlerRootView>
  );
}


