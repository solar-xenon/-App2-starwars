// LazyImage.js
import React, { useState } from "react";
import { View, Image } from "react-native";

const placeholder = {
  uri: "https://starwars-visualguide.com/assets/img/placeholder.jpg",
};

export default function LazyImage({ style, source, resizeMode }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <View style={style}>
      {!loaded && (
        <Image
          style={[style, { position: "absolute" }]}
          source={placeholder}
          resizeMode={resizeMode}
        />
      )}

      <Image
        style={style}
        source={source}
        resizeMode={resizeMode}
        onLoad={() => setLoaded(true)}
      />
    </View>
  );
}
