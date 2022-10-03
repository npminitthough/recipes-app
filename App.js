import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import { Provider } from "react-redux";

import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailsScreen from "./screens/MealDetailsScreen";
import FavouritesScreen from "./screens/FavouritesScreen";

// import FavouritesContextProvider from "./store/context/favourites-context";
import { store } from "./store/redux/store";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#B9A44C" },
        headerTintColor: "white", // color of title and back button
        sceneContainerStyle: { backgroundColor: "#FFFFFF" },
        drawerContentStyle: { backgroundColor: "#B9A44C" },
        drawerActiveTintColor: "white",
        drawerInactiveTintColor: "white",
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => {
            return <Ionicons color={color} size={size} name="list" />;
          },
        }}
      />
      <Drawer.Screen
        name="Favourites"
        component={FavouritesScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons color={color} size={size} name="star" />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  /* the first child of Stack.Navigator is the default screen by default */
  return (
    <>
      <StatusBar style="dark" />
      {/* <FavouritesContextProvider> */}
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "#B9A44C" },
              headerTintColor: "white", // color of title and back button
              contentStyle: { backgroundColor: "#FFFFFF" },
            }}
          >
            <Stack.Screen
              name="Drawer"
              component={DrawerNavigator}
              options={{
                // these settings would override screenOptions settings
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="MealsOverview"
              component={MealsOverviewScreen}
              // One way to have a dynamic title:
              // options={({ route, navigation }) => {
              //   const categoryId = route.params.categoryId;
              //   return { title: categoryId };
              // }}
            />
            <Stack.Screen
              name="MealDetails"
              component={MealDetailsScreen}
              // Can use this if you don't need to interact with the MealDetails screen component
              // options={{
              //   headerRight: () => {
              //     return <Button title="Tap me!" />;
              //   },
              // }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
      {/* </FavouritesContextProvider> */}
    </>
  );
}

const styles = StyleSheet.create({});
