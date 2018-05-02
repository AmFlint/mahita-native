import { combineReducers } from 'redux';
import filter from './course_filter';
import coursesReducer from './courses_reducer';
import nav from './navigation_reducer';

export default combineReducers({
    courses: coursesReducer,
    filters: filter,
    nav
});
