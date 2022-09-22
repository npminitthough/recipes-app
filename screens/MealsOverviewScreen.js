import { useLayoutEffect } from "react";

import MealsList from "../components/MealsList";

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

  return <MealsList mealItems={displayedMeals} />;
}
