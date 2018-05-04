import { FETCH_COURSES, ADD_COURSE } from '../actions';
import { courses } from '../../db';

// TODO: remove courses as they will be fetched on application start-up
export default (state = courses, action) => {
    switch (action.type) {
        case FETCH_COURSES:
            return [].concat(action.payload);
        case ADD_COURSE: 
            return [
                ...state,
                action.payload
            ];
        default:
            return state;
    }
}