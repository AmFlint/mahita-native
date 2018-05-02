import React from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import Thunk from 'redux-thunk';
import rootReducer from './src/reducers';
import CourseList from './src/components/CourseList';
import CourseService from './src/services/CourseService';
import ClassesService from "./src/services/ClassesService";
import CategoryService from "./src/services/CategoryService";

const initialState = {};

const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(Thunk)
);

export default class App extends React.Component {
  componentWillMount() {
      const svc = new CourseService();
      const classSvc = new ClassesService();
      const categorySvc = new CategoryService();
      svc.preloadCourses();
      classSvc.preloadClasses();
      categorySvc.preloadCategories();
  }

  render() {
    return (
        <Provider store={store}>
          <SafeAreaView style={styles.container}>
            <CourseList />
          </SafeAreaView>
        </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
