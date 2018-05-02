import { CHANGE_FILTER_CLASS, RESET_FILTER } from '../actions';

const initialState = 'SHOW_ALL';

export const classFilter = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_FILTER_CLASS:
            return action.payload;
        case RESET_FILTER:
            return initialState;
        default:
            return state;
    }
};

export const categoryFilter = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};