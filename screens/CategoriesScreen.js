import { View, Text, FlatList, StyleSheet } from "react-native";

import CategoryGridTile from "../components/CategoryGridTile";

import { CATEGORIES } from "../data/dummy-data";

// navigation prop is provided by react-navigation
function CategoriesScreen({ navigation }) {
  function pressHandler(item) {
    navigation.navigate("MealsOverview", { categoryId: item.id });
  }
  // note that FlatList is not necessary here are we have a static list of data that isn't large
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      key={2}
      numColumns={2}
      renderItem={({ item }) => {
        return (
          <CategoryGridTile
            title={item.title}
            color={item.color}
            onPress={pressHandler.bind(this, item)}
          />
        );
      }}
    />
  );
}

const styles = StyleSheet.create({});

export default CategoriesScreen;
