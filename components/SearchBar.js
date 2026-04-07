import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from "react-native";

export default function SearchBar({ onSubmit }) {
  const [text, setText] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search..."
        value={text}
        onChangeText={setText}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          if (text.trim().length > 0) {
            onSubmit(text);
            setText("");
          }
        }}
      >
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
  },
  input: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  button: {
    marginLeft: 10,
    backgroundColor: "#007AFF",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 6,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});
