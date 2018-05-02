import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchCourses } from '../actions';


class CourseList extends Component {
    componentWillMount() {
        this.props.fetchCourses();
    }

    getVisibleCourses() {
        const { classe, category } = this.props.filters;
        console.log(classe, category);
        // If not filter is set, return all courses
        if (!classe.length && !category.length) {
            return this.props.courses;
        }

        // Return filtered courses according to chosen classes and categories
        return this.props.courses.filter(course => {
            let visible = true;

            // One or more category chosen
            visible = visible && category.includes(course.category);

            // One or more classes chosen
            visible = visible && classe.reduce( (acc, clas) => {
                return course.classe.includes(clas) || acc;
            }, false);

            return visible;
        });
    }

    render() {
        return (
            <View>
                <FlatList
                    data={this.getVisibleCourses()}
                    renderItem={({item}) => <Text>{item.name}</Text>}
                    keyExtractor={(item) => `${item.id}`}
                />
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