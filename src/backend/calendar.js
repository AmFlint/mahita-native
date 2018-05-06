import { AsyncStorage } from 'react-native';

const storageKey = 'testing_calendar';
const initialState = {
    calendar: {},
    agenda: {}
}

export const getCalendar = async () => {
    let calendar = {};
    const storageCalendar = await AsyncStorage.getItem(storageKey);
    try {
        calendar = JSON.parse(storageCalendar);
    } catch (e) {
        console.log('Could not parse json in getCalendar with error: ', e);
    }
    return calendar ? calendar : {...initialState};
};

export const deleteCalendar = async (payload) => {

};
