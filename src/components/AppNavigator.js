import React from 'react';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';
import {
    createReduxBoundAddListener,
    createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';
import { createStore, combineReducers } from 'redux';
import { connect } from 'react-redux';
import ListCoursesPage from './ListCoursesPage';
import AgendaPage from './AgendaPage';

const middleware = createReactNavigationReduxMiddleware(
    "root",
    state => state.nav,
);
const addListener = createReduxBoundAddListener("root");

export const AppNavigator = StackNavigator({
    Main: { screen: AgendaPage }
}, {
    initialRouteName: 'Main'
});

const AppWithNavigationState = ({ dispatch, nav }) => (
    <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav, addListener })} />
);

const mapStateToProps = state => ({
    nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);