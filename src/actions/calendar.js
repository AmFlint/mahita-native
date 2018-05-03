// Calendar
export const ADD_CALENDAR_ENTRY = 'add_calendar_entry';
export const GET_CALENDAR_ENTRIES = 'get_calendar_entries';
export const REMOVE_CALENDAR_ENTRY = 'remove_calendar_entry';

// Agenda

// TODO: Générer la couleur au hasard
/**
 * Add an entry into the Calendar / Agenda
 * @param date string Date format ('YYYY-MM-DD')
 * @param calendar string
 * @param agenda Object - Course format {id: int, name: string, classes: [int], categorie: int}
 * @returns {{type: string, payload: {date: string, calendarEntry: {key: string, color: string}, agendaEntry: Object}}}
 */
export const addCalendarEntry = (date, calendar, agenda) => ({
    type: ADD_CALENDAR_ENTRY,
    payload: {
        date,
        calendarEntry: {key: calendar, color: 'blue'},
        agendaEntry: agenda
    }
});
