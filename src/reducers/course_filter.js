import {CHANGE_FILTER_CATEGORY, CHANGE_FILTER_CLASSE, RESET_FILTERS} from '../actions';

const initialFilterState = {
  classe: [],
  category: []
};

// Filter Reducer, change the filter for course based on Classe (CP/CE1...) and Category(Maths,Français...)
export default (state = initialFilterState, action) => {
    switch (action.type) {
        case CHANGE_FILTER_CLASSE:
            return {
                ...state,
                classe: action.payload
            };
        case CHANGE_FILTER_CATEGORY:
            return {
                ...state,
                category: action.payload
            };
        case RESET_FILTERS:
            return initialFilterState;
        default:
            return state;
    }
}