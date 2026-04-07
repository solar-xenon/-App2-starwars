import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

export default function PlanetsScreen() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://www.swapi.tech/api/planets")
      .then((resp) => resp.json())
      .then(({ results }) => {
        const mapped = results.map((item, index) => ({
          key: index.toString(),
          value: item.name,
        }));
        setData(mapped);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item.value}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 40 },
  item: {
    margin: 5,
    padding: 10,
    backgroundColor: "ghostwhite",
    textAlign: "center",
  },
});
