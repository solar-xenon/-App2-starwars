import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import Animated, { SlideInLeft } from "react-native-reanimated";
import SwipeableItem from "../components/SwipeableItem";
import LazyImage from "../components/LazyImage";
import ModalDialog from "../components/ModalDialog";

export default function SpaceshipsScreen() {
  const [ships, setShips] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedName, setSelectedName] = useState("");

  // HARD‑CODED DATA
  useEffect(() => {
    setShips([
      { name: "Millennium Falcon" },
      { name: "X-Wing" },
      { name: "TIE Fighter" },
    ]);
  }, []);

  function handleSwipe(name) {
    setSelectedName(name);
    setModalVisible(true);
  }

  return (
    <ScrollView style={{ padding: 20 }}>
      <LazyImage
        style={{ width: "100%", height: 180, marginBottom: 20 }}
        resizeMode="cover"
        source={{
          uri: "https://picsum.photos/600/300" ,
        }}
      />

      {ships.map((s, index) => (
        <Animated.View key={index} entering={SlideInLeft}>
          <SwipeableItem name={s.name} onSwipe={() => handleSwipe(s.name)} />
        </Animated.View>
      ))}

      <ModalDialog
        visible={modalVisible}
        text={selectedName}
        onClose={() => setModalVisible(false)}
      />
    </ScrollView>
  );
}

