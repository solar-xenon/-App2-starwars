import React from "react";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";

export default function SwipeableItem({ name, onSwipe }) {
  function onScroll(e) {
    if (e.nativeEvent.contentOffset.x >= 200) {
      onSwipe();
    }
  }

  const scrollProps = {
    horizontal: true,
    pagingEnabled: true,
    showsHorizontalScrollIndicator: false,
    scrollEventThrottle: 10,
    onScroll,
  };

  return (
    <View style={{ width: 200, height: 40, marginVertical: 8 }}>
      <ScrollView {...scrollProps}>
        <TouchableOpacity>
          <View
            style={{
              width: 200,
              height: 40,
              backgroundColor: "azure",
              justifyContent: "center",
              borderWidth: 1,
              borderRadius: 4,
              borderColor: "slategrey",
            }}
          >
            <Text style={{ textAlign: "center", color: "slategrey" }}>
              {name}
            </Text>
          </View>
        </TouchableOpacity>

        {/* Blank page for swipe */}
        <View style={{ width: 200, height: 40 }} />
      </ScrollView>
    </View>
  );
}
