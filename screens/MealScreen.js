/* eslint-disable prettier/prettier */
import { MEALS } from "../data/data";
import { View, FlatList, Text, StyleSheet } from "react-native";
import React from "react";
// import {useRoute} from '@react-navigation/native';
import MealItem from "../components/MealItem";

const renderMealItem = (itemData) => {
  return <MealItem title={itemData.item.title} />;
};
function MealScreen({ route }) {
  // const route = useRoute();
  const catID = route.params.categoryId;
  const mealsInCat = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catID) >= 0
  );
  // navigation.setOptions({ title: selectedCategory.title });

  return (
    <FlatList
      data={mealsInCat}
      renderItem={renderMealItem}
      keyExtractor={(item) => item.id}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    color: "black",
  },
});

export default MealScreen;
