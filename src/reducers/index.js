import { combineReducers } from 'redux';
import { classFilter, categoryFilter } from './course_filter';
import coursesReducer from './courses_reducer';

export default combineReducers({
    courses: coursesReducer,
    filters: {
        classe: classFilter,
        category: categoryFilter
    }
});
