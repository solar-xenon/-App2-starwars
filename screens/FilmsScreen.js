import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

export default function FilmsScreen() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://www.swapi.tech/api/films")
      .then((resp) => resp.json())
      .then(({ result }) => {
        const mapped = result.map((film, index) => ({
          key: index.toString(),
          value: film.properties.title,
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
