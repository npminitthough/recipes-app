import { useLayoutEffect, useContext } from "react";
import {
  Image,
  View,
  Text,
  StyleSheet,
  ScrollView,
  Button,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { MEALS } from "../data/dummy-data";

import DietaryRequirementLabel from "../components/DietaryRequirementLabel";
import IconButton from "../components/IconButton";

// import { FavouritesContext } from "../store/context/favourites-context";
import { addFavourite, removeFavourite } from "../store/redux/favourites";

export default function MealDetailsScreen({ navigation, route }) {
  //   const favouriteMealsCtx = useContext(FavouritesContext);
  const favouriteMealIds = useSelector((state) => state.favouriteMeals.ids);
  const dispatch = useDispatch();

  const mealId = route.params.mealId;

  //   const isFavourited = favouriteMealsCtx.ids.includes(mealId);
  const isFavourited = favouriteMealIds.includes(mealId);

  const mealData = MEALS.find((meal) => {
    return meal.id === mealId;
  });

  function changeFavouriteStatusHandler() {
    if (isFavourited) {
      //   favouriteMealsCtx.removeFavourite(mealId);
      dispatch(removeFavourite({ id: mealId }));
    } else {
      //   favouriteMealsCtx.addFavourite(mealId);
      dispatch(addFavourite({ id: mealId }));
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      title: mealData.title,
      headerRight: () => {
        return (
          <IconButton
            icon={isFavourited ? "star" : "star-outline"}
            color="white"
            onPress={changeFavouriteStatusHandler}
          />
        );
      },
    });
  }, [navigation, route, MEALS, changeFavouriteStatusHandler]);

  const {
    isVegan,
    isVegetarian,
    isLactoseFree,
    isGlutenFree,
    imageUrl,
    ingredients,
    steps,
  } = mealData;
  return (
    <ScrollView style={styles.rootContainer}>
      <Image source={{ uri: imageUrl, width: "100%", height: 200 }} />
      <View style={styles.detailsContainer}>
        <View style={styles.dietaryRequirementsContainer}>
          {isVegan ? (
            <DietaryRequirementLabel variant="Vegan" />
          ) : isVegetarian ? (
            <DietaryRequirementLabel variant="Vegetarian" />
          ) : null}

          {isLactoseFree ? (
            <DietaryRequirementLabel variant="Lactose-free" />
          ) : null}
          {isGlutenFree ? (
            <DietaryRequirementLabel variant="Gluten-free" />
          ) : null}
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.title}>Ingredients</Text>
          {ingredients.map((thing, i) => {
            return <Text key={i}>{thing}</Text>;
          })}
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.title}>Method</Text>
          {steps.map((step, i) => {
            return (
              <Text style={styles.step} key={i}>
                {i + 1}. {step}
              </Text>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 30,
  },
  detailsContainer: {
    margin: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    marginBottom: 10,
  },
  sectionContainer: {
    marginBottom: 20,
  },
  step: {
    marginBottom: 5,
  },
  dietaryRequirementsContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  requirement: {
    padding: 20,
  },
});
