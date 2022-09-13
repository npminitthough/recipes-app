import { StyleSheet, View, Text } from "react-native";

export default function DietaryRequirementLabel({ variant }) {
  const variants = [
    { name: "Gluten-free", colour: "#368dff" },
    { name: "Vegan", colour: "#b9ffb0" },
    { name: "Vegetarian", colour: "#f5a442" },
    { name: "Lactose-free", colour: "#f5d142" },
  ];

  let labelColour;
  const variantColor = variants.find((variantData) => {
    console.log(variantData.name === variant);
    return variantData.name === variant;
  })?.colour;

  console.log(variantColor);
  console.log(variant);

  return (
    <View style={[styles.labelContainer, { backgroundColor: variantColor }]}>
      <Text>{variant}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  labelContainer: {
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    borderRadius: 50,
    marginHorizontal: 10,
    marginTop: 0,
    marginBottom: 20,
  },
});
