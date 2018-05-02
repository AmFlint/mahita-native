
import React from 'react';
import { StyleSheet, View} from 'react-native';
import CourseList from './CourseList';


export default class ListCoursesPage extends React.Component {
    static navigationOptions = {
        title: 'Vos cours',
    };
    render() {
        return (
            <View style={styles.container}>
                <CourseList />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#DEDEDE",
        alignItems: "center",
        justifyContent: "center"
    }
});
