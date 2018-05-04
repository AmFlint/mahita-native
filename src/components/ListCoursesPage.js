import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import CourseList from "./CourseList";
import CourseFilter from "./CourseFilter";
import ActionButton from "react-native-action-button";

export default class ListCoursesPage extends React.Component {
  static navigationOptions = {
    title: "Documents",
    header: null
  };

  render() {
    return (
      <View style={styles.container}>
        <CourseFilter />
        <CourseList />
        <ActionButton
          buttonColor="#FF780B"
          onPress={() => this.props.navigation.navigate("AddCoursePage")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center"
  }
});
