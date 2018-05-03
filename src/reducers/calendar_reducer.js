import {
    ADD_CALENDAR_ENTRY, GET_CALENDAR_ENTRIES,
    REMOVE_CALENDAR_ENTRY
} from '../actions';
import { addEntry, removeEntry } from '../helpers/calendar_helper';

const initialState = {
    calendar: {},
    agenda: {}
};

/*
ADD_CALENDAR_ENTY -> Add both calendar and agenda entry
-- dot: const vacation = {key:'vacation', color: 'red', selectedDotColor: 'blue'};
-- calendar: e.g. '2018-05-03': {dots: [vacation, massage, workout], selected: true, selectedColor: 'red'}
--------------------
agenda : list of course IDS
-- agenda: e.g. '2018-05-03': [
        2,
        3
   ]

 */

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_CALENDAR_ENTRIES:
            return {
                ...action.payload
            };
        case ADD_CALENDAR_ENTRY:
            return addEntry(state, action.payload);
        // ---- REMOVE ---- //
        case REMOVE_CALENDAR_ENTRY:
            return removeEntry(state, action.payload);
        default:
            return state;
    }
};
