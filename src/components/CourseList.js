import React, { Component } from 'react';
import { ScrollView, View, FlatList, Dimensions, StyleSheet } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchCourses, fetchClasses, fetchCategories } from '../actions';
import ListHeader from './common/ListHeader';
import CourseItem from './Card';

const maxWidth = Dimensions.get('window').width;
// TODO: Watch Dimensions change (event listener) to readapt state.dimensions
class CourseList extends Component {
    constructor(props) {
        super(props);
        this.state = {dimensions: undefined};
    }

    // Retrieve parent dimensions to properly set list items width
    onLayout = event => {
        if (this.state.dimensions) return; // layout was already called
        let {width, height} = event.nativeEvent.layout;
        this.setState({dimensions: {width, height}});
    };

    componentWillMount() {
        this.props.fetchCourses();
        this.props.fetchCategories();
        this.props.fetchClasses();
    }

    getVisibleCourses() {
        const { classe, category } = this.props.filters;
        // If not filter is set, return all courses
        if (!classe.length && !category.length) {
            return this.props.courses;
        }

        // Return filtered courses according to chosen classes and categories
        return this.props.courses.filter(course => {
            let visible = true;

            // One or more category chosen
            visible = visible && (category.includes(course.categorie) || !category.length);

            // One or more classes chosen
            visible = visible && (!classe.length || classe.reduce((acc, clas) => {
                return course.classes.includes(clas) || acc;
            }, false));

            return visible;
        });
    }

    render() {
        // TODO: CHANGE WRAPPER STYLE if number of results > 4 (space-between is breaking)
        // If dimensions were not set, render empty view and activate onLayout to retrieve parent dimensions
        if (!this.state.dimensions) {
            return (<View
                style={{flex: 1, width: maxWidth * .8, alignSelf: 'stretch'}}
                onLayout={this.onLayout}
            >
            </View>);
        }
        const listData = this.getVisibleCourses();
        // Get Parent width (in pixels)
        const { width } = this.state.dimensions;
        // calculate itemWidth with margins
        const itemWidth = width / 4.25;
        return (
            <ScrollView style={styles.container}>
                <FlatList
                    columnWrapperStyle={listData.length < 4 ? [styles.listWrapper, {justifyContent: 'flex-start'}] : [styles.listWrapper, {justifyContent: 'space-between'}]}
                    data={listData}
                    renderItem={({item}) =>
                        <CourseItem
                            handlePress={() => this.props.navigation.navigate('ViewCoursePage', { course: item })}
                            itemStyle={ listData.length < 4 ? {marginRight: 20} : {}}
                            itemWidth={itemWidth}
                            course={item}
                        />}
                    keyExtractor={(item) => `${item.id}`}
                    numColumns={4}
                    ListHeaderComponent={<ListHeader numResults={listData.length} />}
                />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
       width: maxWidth * .85
    },
    listWrapper: {
        marginBottom: 20
    }
});

const mapStateToProps = (state) => {
  return {
      courses: state.courses,
      filters: state.filters
  };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        fetchCourses,
        fetchCategories,
        fetchClasses
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseList);