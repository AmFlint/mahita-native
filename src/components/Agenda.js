import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import {LocaleConfig, CalendarList} from 'react-native-calendars';

LocaleConfig.locales['fr'] = {
    monthNames: ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'],
    monthNamesShort: ['Janv.','Févr.','Mars','Avril','Mai','Juin','Juil.','Août','Sept.','Oct.','Nov.','Déc.'],
    dayNames: ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'],
    dayNamesShort: ['Dim.','Lun.','Mar.','Mer.','Jeu.','Ven.','Sam.']
};

LocaleConfig.defaultLocale = 'fr';

const Agenda = ({ handleChangeMonth, handleChangeDay, calendar }) => {
    return (
        <View style={{flex: 1, alignItems: 'center'}}>
            <CalendarList
                markedDates={calendar.calendar}
                markingType={'multi-dot'}
                onDayPress={handleChangeDay}
                onVisibleMonthsChange={handleChangeMonth}
                style={{width: 600, height: 200, backgroundColor: '#000'}}
                // Enable horizontal scrolling, default = false
                horizontal={true}
                // Enable paging on horizontal, default = false
                pagingEnabled={true}
                // Set custom calendarWidth.
                calendarWidth={600}
            />
        </View>
    );
};

const mapStateToProps = ({ calendar }) => {
    return { calendar };
};

export default connect(mapStateToProps)(Agenda);