import React from 'react';
import { ScrollView, Text, FlatList, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CourseItem from './CourseItem';
import { removeCalendarEntry } from '../actions';


const AgendaList = ({ courses, calendar, currentDate, classes, categories, removeCalendarEntry }) => {
    const getCourseFromAgenda = () => {
        const agendaEntries = calendar.agenda[currentDate] ? calendar.agenda[currentDate] : [];
        return courses.filter(c => agendaEntries.includes(c.id));
    };

    return (
        <ScrollView>
            <FlatList
                data={getCourseFromAgenda()}
                keyExtractor={(item) => `${item.id}`}
                renderItem={({item}) => (
                    <CourseItem
                        handleDelete={() => removeCalendarEntry(currentDate, item.id)}
                        classe={classes.find(c => c.id === item.classes[0]).name}
                        category={categories.find(c => c.id === item.categorie).name}
                        course={item} />
                )}
            />
        </ScrollView>
    );
};

const styles = StyleSheet.create({

});

const mapStateToProps = ({ courses, classes, categories, calendar }) => {
    return {
        courses,
        classes,
        categories,
        calendar
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        removeCalendarEntry
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(AgendaList);
