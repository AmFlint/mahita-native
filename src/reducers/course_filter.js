import {
    ADD_CATEGORIES_FILTER,
    ADD_CLASSES_FILTER,
    REMOVE_CATEGORIES_FILTER,
    REMOVE_CLASSES_FILTER,
    RESET_FILTERS
} from '../actions';

const initialFilterState = {
  classe: [],
  category: []
};

// Filter Reducer, change the filter for course based on Classe (CP/CE1...) and Category(Maths,Français...)
export default (state = initialFilterState, action) => {
    switch (action.type) {
        case ADD_CLASSES_FILTER:
            return {
                ...state,
                classe: [
                    ...state.classe,
                    action.payload
                ]
            };
        case REMOVE_CLASSES_FILTER:
            return {
                ...state,
                classe: state.classe.filter(c => c !== action.payload)
            };
        case REMOVE_CATEGORIES_FILTER:
            return {
                ...state,
                category: state.category.filter(category => category !== action.payload)
            };
        case ADD_CATEGORIES_FILTER:
            return {
                ...state,
                category: [
                    ...state.category,
                    action.payload
                ]
            };
        case RESET_FILTERS:
            return initialFilterState;
        default:
            return state;
    }
}