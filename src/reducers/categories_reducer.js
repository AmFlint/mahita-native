import {GET_CATEGORIES} from "../actions/categories";

export default (state = [], action) => {
    switch (action.type) {
        case GET_CATEGORIES:
            return [].concat(action.payload);
        default:
            return state;
    }
}