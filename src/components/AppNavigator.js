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

const middleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav
);
const addListener = createReduxBoundAddListener("root");


const StackedAgendaPage = StackNavigator(
  {
    AgendaPage: { screen: AgendaPage }
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: "lightblue"
      }
    }
  }
);

const StackedListeCoursesPage = StackNavigator(
  {
    ListCoursesPage: { screen: ListCoursesPage }
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: "lightblue"
      }
    }
  }
);

export const AppNavigator = TabNavigator(
  {
    Main: { screen: AgendaPage },
    Agenda: { screen:  StackedListeCoursesPage}
  },
  {
    tabBarOptions: {
      style: {
        marginTop: StatusBar.currentHeight,
        backgroundColor: "#8BBFFC"
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
