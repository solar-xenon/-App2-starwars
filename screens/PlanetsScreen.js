import React, { useState, useEffect } from "react";
import { View, FlatList, Text } from "react-native";
import SearchBar from "../components/SearchBar";
import SearchModal from "../components/SearchModal";

export default function PlanetsScreen() {
  const [planets, setPlanets] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetch("https://swapi.dev/api/planets/")
      .then((res) => res.json())
      .then((data) => setPlanets(data.results));
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <SearchBar
        onSubmit={(text) => {
          setSearchText(text);
          setModalVisible(true);
        }}
      />

      <SearchModal
        visible={modalVisible}
        text={searchText}
        onClose={() => setModalVisible(false)}
      />

      <FlatList
        data={planets}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => <Text style={{ padding: 10 }}>{item.name}</Text>}
      />
    </View>
  );
}
