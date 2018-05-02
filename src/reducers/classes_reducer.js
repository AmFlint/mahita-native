import {GET_CLASSES} from "../actions/classes";

export default (state = [], action) => {
    switch (action.type) {
        case GET_CLASSES:
            return [].concat(action.payload);
        default:
            return state;
    }
}