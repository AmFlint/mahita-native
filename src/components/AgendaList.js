import React from 'react';
import { ScrollView, Text, FlatList, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import CourseItem from './CourseItem';


const AgendaList = (props) => {
    return (
        <ScrollView>
            <FlatList
                data={props.courses}
                keyExtractor={(item) => `${item.id}`}
                renderItem={({item}) => (
                    <CourseItem
                        classe={"CP"}
                        category={"Maths"}
                        course={item} />
                )}
            />
        </ScrollView>
    );
};

const styles = StyleSheet.create({

});

const mapStateToProps = ({ courses, classes, categories }) => {
    return {
        courses,
        classes,
        categories
    };
};

export default connect(mapStateToProps)(AgendaList);
