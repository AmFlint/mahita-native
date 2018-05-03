import { AsyncStorage } from 'react-native';
import {addEntry, removeEntry} from '../helpers/calendar_helper';

const storageKey = 'testing_calendar';

const initialState = {
    calendar: {},
    agenda: {}
};

export default class CalendarService {
    getCalendar = async () => {
        let calendar = Object.assign({}, initialState);
        try {
            const storageCourses = await AsyncStorage.getItem(storageKey);
            calendar = JSON.parse(storageCourses);
            if (!calendar) {
                calendar = Object.assign({}, initialState);
            }
        } catch (e) {
            console.log('could not fetch courses, got error: ' + e);
            calendar = Object.assign({}, initialState);
        }
        return calendar;
    };

    saveCalendar = async (calendar) => {
        let storageCalendar = '';
        try {
            storageCalendar = JSON.stringify(calendar);
        } catch (e) {
            console.log('Save Calendar', e);
            return false;
        }
        await AsyncStorage.setItem(storageKey, storageCalendar);
        return true;
    };

    addCalendarEntry = async (date, entryId, color) => {
        const calendar = await this.getCalendar();
        // Entries formatted for calendar and agenda
        const calendarEntry = {key: entryId, color};
        const agendaEntry =  entryId;

        const payload = {
            date,
            calendarEntry,
            agendaEntry
        };
        const storageCalendar = addEntry(calendar, payload);

        await this.saveCalendar(storageCalendar);
        return payload;
    };

    removeCalendarEntry = async (date, entryId) => {
        const calendar = await this.getCalendar();
        const payload = {
            date,
            entryId
        };
        const storageCalendar = removeEntry(calendar, payload)
        await this.saveCalendar(storageCalendar);
        return payload;
    };
};