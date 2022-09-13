import { View, Pressable, StyleSheet, Text, Platform } from "react-native";

export default function CategoryGridTile({ title, color, onPress }) {
  return (
    <View style={[styles.tile, { backgroundColor: color }]}>
      <Pressable
        styles={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        android_ripple={{ color: "#ccc" }}
        onPress={onPress}
      >
        <View style={[styles.textContainer]}>
          <Text style={styles.categoryText}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  tile: {
    flex: 1,
    height: 150,
    alignItems: "center",
    justifyContent: "center",
    margin: 16,
    borderRadius: 10,
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    backgroundColor: "white", // for iOS shadow
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  textContainer: {
    flex: 1, // take all space availble in parent container
    padding: 16,
    alignSelf: "stretch",
    justifyContent: "center",
    borderRadius: 10,
  },
  categoryText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
});
