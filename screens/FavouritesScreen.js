// import { useContext } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

// import { FavouritesContext } from "../store/context/favourites-context";
import MealsList from "../components/MealsList";

import { MEALS } from "../data/dummy-data";

export default function FavouritesScreen() {
  const navigation = useNavigation();
  //   const favouriteMealsCtx = useContext(FavouritesContext);
  const favouriteMealIds = useSelector((state) => state.favouriteMeals.ids);

  const favouritedMeals = MEALS.filter((meal) =>
    // favouriteMealsCtx.ids.includes(meal.id)
    favouriteMealIds.includes(meal.id)
  );

  function onPress() {
    navigation.navigate("Categories");
  }

  if (favouritedMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favourited meals.</Text>
        <TouchableOpacity style={styles.categoriesButton} onPress={onPress}>
          <Text style={styles.categoriesButtonText}>
            View recipe categories
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  return <MealsList mealItems={favouritedMeals} />;
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
  },
  categoriesButton: {
    margin: 20,
    borderBottomColor: "#B9A44C",
    borderBottomWidth: 2,
  },
  categoriesButtonText: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
