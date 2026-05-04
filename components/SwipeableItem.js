import React, { useRef } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Swipeable } from "react-native-gesture-handler";

export default function SwipeableItem({ name, onSwipe }) {
  const swipeRef = useRef(null);

  const handleSwipe = () => {
    if (onSwipe) {
      onSwipe();
    }
    swipeRef.current?.close();
  };

  const renderLeftActions = () => (
    <View style={styles.hiddenArea} />
  );

  return (
    <Swipeable
      ref={swipeRef}
      renderLeftActions={renderLeftActions}
      renderRightActions={() => null}
      onSwipeableLeftOpen={handleSwipe}
      onSwipeableRightOpen={() => {}}
      leftThreshold={30}
    >
      <View style={styles.item}>
        <Text style={styles.text}>{name}</Text>
      </View>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 15,
    backgroundColor: "#eee",
    borderRadius: 8,
    marginBottom: 10
  },
  text: {
    fontSize: 18
  },
  hiddenArea: {
    width: 200,
    backgroundColor: "#ccc",
    borderRadius: 8,
    marginBottom: 10
  }
});
