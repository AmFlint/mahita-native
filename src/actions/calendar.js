import CalendarService from '../services/CalendarService';

// Calendar
export const ADD_CALENDAR_ENTRY = 'add_calendar_entry';
export const GET_CALENDAR_ENTRIES = 'get_calendar_entries';
export const REMOVE_CALENDAR_ENTRY = 'remove_calendar_entry';

// Agenda
const colors = [
    'red',
    'blue',
    'pink',
    'green',
    'orange',
    'indianred',
    'aqua',
    'yellow'
];

const service = new CalendarService();

/**
 *
 * @returns {function(*): {type: string, payload: *}}
 */
export const fetchCalendar = () => {
    return async (dispatch) => {
        const payload = await service.getCalendar();
        dispatch({
            type: GET_CALENDAR_ENTRIES,
            payload
        });
    };
};

/**
 * Add an entry into the Calendar / Agenda
 * @param date string Date format ('YYYY-MM-DD')
 * @param courseId integer - course id for calendar Key (dot) + agenda course referencing
 * @returns {{type: string, payload: {date: string, calendarEntry: {key: string, color: string}, agendaEntry: Object}}}
 */
export const addCalendarEntry = (date, courseId) => {
    const color = colors[Math.floor(Math.random() * colors.length)];
    return async (dispatch) => {
        const payload = await service.addCalendarEntry(date, courseId, color);
        dispatch({
            type: ADD_CALENDAR_ENTRY,
            payload
        });
    };
};

/**
 * Remove an entry from the Calendar / Agenda
 * @param date string - Date string formatted 'YYYY-MM-DD'
 * @param entryId integer - ID of the entry to remove from calendar/agenda
 * @returns {Function} - async function calling calendar service and returning action
 */
export const removeCalendarEntry = (date, entryId) => {
    return async (dispatch) => {
        const payload = await service.removeCalendarEntry(date, entryId);
        dispatch({
            type: REMOVE_CALENDAR_ENTRY,
            payload
        });
    }
};
