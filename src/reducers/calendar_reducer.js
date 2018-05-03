import {
    ADD_CALENDAR_ENTRY,
    REMOVE_CALENDAR_ENTRY
} from '../actions';

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
        case ADD_CALENDAR_ENTRY:
            const { agendaEntry, calendarEntry, date } = action.payload;
            // If entry for this course already exists, do not add it again.
            if (state.calendar[date] && state.calendar[date].dots.find(d => d.key === calendarEntry.key)) {
                return state;
            }

            let calendar = {};
            if (state.calendar[date]) {
                calendar = {
                    ...state.calendar[date],
                    dots: [
                        ...state.calendar[date].dots,
                        calendarEntry
                    ]
                }
            } else {
                calendar = {
                    dots: [calendarEntry],
                    selectedColor: 'blue'
                }
            }

            let a = {};
            if (state.agenda[date]) {
                a = {
                    ...state.agenda,
                    [date]: [
                        ...state.agenda[date],
                        agendaEntry
                    ]
                };
            } else {
                a = {
                    ...state.agenda,
                    [date]: [
                        agendaEntry
                    ]
                }
            }
            // agenda

            return {
                calendar: {
                    ...state.calendar,
                    [date]: calendar
                },
                agenda: a
            };
        default:
            return state;
    }
};
