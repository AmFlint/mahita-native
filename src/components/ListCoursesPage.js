import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import CourseList from "./CourseList";
import CourseFilter from "./CourseFilter";

export default class ListCoursesPage extends React.Component {
  static navigationOptions = {
    title: "Vos cours"
  };

  render() {
    return (
      <View style={styles.container}>
        <CourseFilter />
        <CourseList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DEDEDE",
    alignItems: "center"
    // justifyContent: "center"
  }
});
