<<<<<<< HEAD

import React from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import Thunk from 'redux-thunk';
import rootReducer from './src/reducers';
import CourseService from './src/services/CourseService';
import ClassesService from "./src/services/ClassesService";
import CategoryService from "./src/services/CategoryService";

import AppWithNavigationState from './src/components/AppNavigator';

=======
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import Thunk from "redux-thunk";
import rootReducer from "./src/reducers";
import CourseList from "./src/components/CourseList";
import CourseService from "./src/services/CourseService";
import Card from "./src/components/Card";
>>>>>>> Create styled Card component
const initialState = {};

const store = createStore(rootReducer, initialState, applyMiddleware(Thunk));

export default class App extends React.Component {
  componentWillMount() {
<<<<<<< HEAD
      const svc = new CourseService();
      const classSvc = new ClassesService();
      const categorySvc = new CategoryService();
      svc.preloadCourses();
      classSvc.preloadClasses();
      categorySvc.preloadCategories();
=======
    const svc = new CourseService();
    svc.preloadCourses();
>>>>>>> Create styled Card component
  }

  render() {
    return (
<<<<<<< HEAD
        <Provider store={store}>
            <AppWithNavigationState />
        </Provider>
=======
      <Provider store={store}>
        <View style={styles.container}>
          <Card />
        </View>
      </Provider>
>>>>>>> Create styled Card component
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DEDEDE",
    alignItems: "center",
    justifyContent: "center"
  }
});
