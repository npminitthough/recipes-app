import { View, Text, StyleSheet, FlatList } from "react-native";
import { useLayoutEffect } from "react";

import MealItem from "../components/MealItem";

import { CATEGORIES, MEALS } from "../data/dummy-data";

// you get route & navigation props if the screen is registered as a screen with react-navigation
export default function MealsOverviewScreen({ route, navigation }) {
  const categoryId = route.params.categoryId; // data comes from categories screen when tile pressed

  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) > -1
  );

  useLayoutEffect(() => {
    /**
     * Dynamic title
     * useLayoutEffect - load simultaneously with component, useEffect runs after DOM painted because it's async
     */

    const categoryTitle = CATEGORIES.find(({ id }) => categoryId === id).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [categoryId, navigation]);

  function onMealPressHandler(mealId) {
    console.log(mealId);
    navigation.navigate("MealDetails", { mealId });
  }

  function renderMealItem({ item }) {
    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      duration: item.duration,
      affordability: item.affordability,
      complexity: item.complexity,
      onPress: onMealPressHandler,
    };
    return <MealItem {...mealItemProps} />;
  }

  return (
    <View style={styles.container}>
      <Text>Meals Overview Screen - {categoryId}</Text>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
