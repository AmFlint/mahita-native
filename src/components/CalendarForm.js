import React, { Component } from 'react';
import { View, Text, Keyboard, Button, TextInput, Picker, StyleSheet, TouchableOpacity } from 'react-native';
import Autocomplete from 'react-native-autocomplete-input';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addCalendarEntry  } from '../actions';

class CalendarForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            course: {}
        };
    }

    _onItemPress = (item) => {
        this.setState({
            query: item.name,
            course: item
        });
        Keyboard.dismiss();
    };

    _onFormSubmit = () => {
        // Do not add empty course to calendar
        if (!Object.keys(this.state.course).length) {
            return;
        }

        // date, calendar -> this.state.course.name, agenda -> this.state.course
        const { id } = this.state.course;
        this.props.addCalendarEntry(
            this.props.currentDate,
            id
        );
        // Reset state
        this.setState({
            query: '',
            course: {}
        });
    };

    queryCourses = (query) => {
        query = query.toLowerCase();
        const courseIsSet = Object.keys(this.state.course).length > 0;
        return query && !courseIsSet
            ? this.props.courses.filter(c => c.name.toLowerCase().includes(query))
            : [];
    };

    render() {
        const { query } = this.state;
        const data = this.queryCourses(query);
        return (
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{paddingTop: 18}}>Nom du Cours</Text>
                <View style={styles.autocompleteContainer}>
                    <Autocomplete
                        data={data}
                        defaultValue={query}
                        onChangeText={text => this.setState({ query: text })}
                        renderItem={item => (
                            <TouchableOpacity onPress={() => this._onItemPress(item)}>
                                <Text>{item.name}</Text>
                            </TouchableOpacity>
                        )}
                    />
                </View>
                <View style={{marginLeft: 200}}>
                    <Button
                        onPress={() => this._onFormSubmit()}
                        title="Ajouter à l'Agenda" />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    autocompleteContainer: {
        flex: 1,
        width: 150,
        left: 120,
        position: 'absolute',
        top: 0,
        zIndex: 1
    }
});

const mapStateToProps = ({ courses }) => {
    return { courses };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        addCalendarEntry
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(CalendarForm);