import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchCourses } from '../actions';


class CourseList extends Component {
    componentWillMount() {
        console.log(this.props.courses);
        this.props.fetchCourses();
    }

    getVisibleCourses() {
        const { classe, category } = this.props.filters;
        // If not filter is set, return all courses
        if (typeof classe !== 'number' && typeof category !== 'number') {
            return this.props.courses;
        }

        // Return filtered
        return this.props.courses.filter(course => {
            let visible = true;
            if (typeof classe == 'number') {
                visible = visible && course.classes.includes(classe);
            }

            if (typeof category == 'number') {
                visible = visible && course.categories === category;
            }

            return visible;
        });
    }

    render() {
        return (
            <View>
                <Text>
                    Yo
                </Text>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
  return {
      courses: state.courses,
      filters: state.filters
  };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ fetchCourses }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseList);