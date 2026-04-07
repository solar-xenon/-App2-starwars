import React from "react";
import { Modal, View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function SearchModal({ visible, text, onClose }) {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.modalBox}>
          <Text style={styles.title}>You Searched For:</Text>
          <Text style={styles.searchText}>{text}</Text>

          <TouchableOpacity onPress={onClose}>
            <Text style={styles.closeButton}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  modalBox: {
    backgroundColor: "white",
    padding: 25,
    borderRadius: 8,
    alignItems: "center",
    width: "80%",
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: "bold",
  },
  searchText: {
    fontSize: 16,
    marginBottom: 20,
  },
  closeButton: {
    fontSize: 16,
    color: "#007AFF",
    fontWeight: "bold",
  },
});
