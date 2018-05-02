import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import Thunk from 'redux-thunk';
import rootReducer from './src/reducers';
import CourseList from './src/components/CourseList';
import CourseService from './src/services/CourseService';

const initialState = {};

const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(Thunk)
);

export default class App extends React.Component {
  componentWillMount() {
      const svc = new CourseService();
      svc.preloadCourses();
  }

  render() {
    return (
        <Provider store={store}>
          <View style={styles.container}>
            <CourseList />
          </View>
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
