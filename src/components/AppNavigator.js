import React from "react";
import { View } from "react-native";
import {
  addNavigationHelpers,
  TabNavigator,
  TabBarTop,
  StackNavigator
} from "react-navigation";
import {
  createReduxBoundAddListener,
  createReactNavigationReduxMiddleware
} from "react-navigation-redux-helpers";
import { createStore, combineReducers } from "redux";
import { connect } from "react-redux";
import ListCoursesPage from "./ListCoursesPage";
import Agenda from "./Agenda";
import Notifications from "./Notifications";
import { Layout } from "./Layout";
const middleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav
);
const addListener = createReduxBoundAddListener("root");

const AgendaStack = StackNavigator({
  Agenda: Agenda
});

const ListCoursesPageStack = StackNavigator({
  ListCoursesPage: ListCoursesPage
});

const NotificationsStack = StackNavigator({
  Notifications: Notifications
});

export const AppNavigator = TabNavigator(
  {
    Agenda: { screen: AgendaStack },
    Main: { screen: ListCoursesPageStack },
    Notifications: { screen: NotificationsStack }
  },
  {
    tabBarOptions: {
      activeTintColor: "white",
      inactiveTintColor: "lightgray"
    },
    tabBarPosition: "top"
  },
  {
    initialRouteName: "Main"
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
