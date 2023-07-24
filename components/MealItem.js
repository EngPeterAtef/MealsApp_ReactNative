import {View, Text, StyleSheet} from "react-native";
function MealItem({title}) {
  return (
    <View styles={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
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
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
});

export default MealItem;
