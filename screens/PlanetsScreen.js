import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import Animated, { SlideInLeft } from "react-native-reanimated";
import SwipeableItem from "../components/SwipeableItem";
import LazyImage from "../components/LazyImage";
import ModalDialog from "../components/ModalDialog";

export default function PlanetsScreen() {
  const [planets, setPlanets] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedName, setSelectedName] = useState("");

  // HARD‑CODED DATA (fixes blank screen)
  useEffect(() => {
    setPlanets([
      { name: "Tatooine" },
      { name: "Alderaan" },
      { name: "Hoth" },
      { name: "Dagobah" },
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
          uri: "https://picsum.photos/600/300"
,
        }}
      />

      {planets.map((p, index) => (
        <Animated.View key={index} entering={SlideInLeft}>
          <SwipeableItem name={p.name} onSwipe={() => handleSwipe(p.name)} />
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
