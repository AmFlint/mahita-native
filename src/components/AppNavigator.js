import React from "react";
import {
  addNavigationHelpers,
  StackNavigator,
  TabNavigator,
  TabBarTop,
  TabBarBottom
} from "react-navigation";
import {
  createReduxBoundAddListener,
  createReactNavigationReduxMiddleware
} from "react-navigation-redux-helpers";
import { createStore, combineReducers } from "redux";
import { connect } from "react-redux";
import ListCoursesPage from "./ListCoursesPage";
import AgendaPage from "./AgendaPage";
import { StatusBar } from "react-native";
import AddCoursePage from "./AddCoursePage";
import NotificationsPage from "./NotificationsPage";
import ViewCoursePage from './ViewCoursePage';
const middleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav
);
const addListener = createReduxBoundAddListener("root");

const StackedListeCoursesPage = StackNavigator({
  ListCoursesPage: { screen: ListCoursesPage },
  AddCoursePage: { screen: AddCoursePage },
  ViewCoursePage: { screen: ViewCoursePage }
});

export const AppNavigator = TabNavigator(
  {
    Main: { screen: AgendaPage },
    ListCourses: { screen: StackedListeCoursesPage },
    Notifications: { screen: NotificationsPage }
  },
  {
    tabBarOptions: {
      style: {
        marginTop: StatusBar.currentHeight,
        backgroundColor: "#8BBFFC"
      },
      activeTintColor: "#FFF",
      indicatorStyle: {
        backgroundColor: "white"
      }
    }
  }
);

const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator
    navigation={addNavigationHelpers({ dispatch, state: nav, addListener })}
  />
);

const mapStateToProps = state => ({
  nav: state.nav
});

export default connect(mapStateToProps)(AppWithNavigationState);
