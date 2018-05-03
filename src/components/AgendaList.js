import React from 'react';
import { ScrollView, Text, FlatList, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import CourseItem from './CourseItem';


const AgendaList = ({ courses, calendar, currentDate, classes, categories }) => {
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

export default connect(mapStateToProps)(AgendaList);
