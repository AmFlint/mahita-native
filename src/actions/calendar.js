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

/**
 * Add an entry into the Calendar / Agenda
 * @param date string Date format ('YYYY-MM-DD')
 * @param courseId integer - course id for calendar Key (dot) + agenda course referencing
 * @returns {{type: string, payload: {date: string, calendarEntry: {key: string, color: string}, agendaEntry: Object}}}
 */
export const addCalendarEntry = (date, courseId) => {
    const color = colors[Math.floor(Math.random() * colors.length)];
    return {
        type: ADD_CALENDAR_ENTRY,
        payload: {
            date,
            calendarEntry: {key: courseId, color},
            agendaEntry: courseId
        }
    };
};
