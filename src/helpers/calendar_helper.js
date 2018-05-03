export const addEntry = (state, { date, agendaEntry, calendarEntry }) => {
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

    return {
        calendar: {
            ...state.calendar,
            [date]: calendar
        },
        agenda: a
    };
};


export const removeEntry = (state, { date, entryId }) => {
    // Return state if date is not present -> nothing to remove
    if (!state.calendar[date] || !state.agenda[date]) {
        return state;
    }
    const filteredAgenda = state.agenda[date].filter(d => d !== entryId);
    const filteredCalendar = state.calendar[date].dots.filter(d => d.key !== entryId);

    return {
        calendar: {
            ...state.calendar,
            [date]: {
                ...state.calendar[date],
                dots: filteredCalendar
            }
        },
        agenda: {
            ...state.agenda,
            [date]: filteredAgenda
        }
    };
};