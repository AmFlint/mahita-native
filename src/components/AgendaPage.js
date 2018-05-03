import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    fetchClasses,
    fetchCategories,
    fetchCourses,
    fetchCalendar
} from '../actions';
import { Dimensions, View, Text, StyleSheet, ScrollView, KeyboardAvoidingView } from 'react-native';
import Agenda from './Agenda';
import CalendarForm from './CalendarForm';
import AgendaList from './AgendaList';

const months = [
    'Janvier',
    'Février',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juillet',
    'Aout',
    'Septembre',
    'Octobre',
    'Novembre',
    'Décembre'
];

function formatDate(date) {
    let d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}

const maxWidth = Dimensions.get('window').width;

class AgendaPage extends Component {
    static navigationOptions = {
        title: 'Votre Agenda de cours',
    };

    constructor(props) {
        super(props);

        const today = new Date();
        this.state = {
            currentMonth: {},
            currentDay: {
                day: today.getDay() - 1,
                month: today.getMonth() + 1,
                dateString: formatDate(today)
            }
        };
    }

    componentWillMount() {
        this.props.fetchCourses();
        this.props.fetchCategories();
        this.props.fetchClasses();
        this.props.fetchCalendar();
    }

    render() {
        // TODO: Calculate calendar width based on Dimensions
        const { currentDay } = this.state;
        const selectedMonth = months[currentDay.month -1];
        return (
            <KeyboardAvoidingView behavior="position" style={styles.container}>
                {/* Calendar list */}
                <View style={{flex: 3.2}}>
                    <Agenda
                        handleChangeDay={(day) => this.setState({currentDay: day})}
                        handleChangeMonth={(months) => this.setState({currentMonth: months[0]})} />
                </View>
                {/* Agenda based on click day */}
                <View style={styles.formContainer}>
                    <Text style={styles.formTitle}>Ajouter un cours pour le { currentDay.day } { selectedMonth }</Text>
                    <CalendarForm currentDate={currentDay.dateString} />
                </View>
                {/* Already assigned tasks */}
                <View style={{flex: 2}}>
                    <AgendaList currentDate={currentDay.dateString} />
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: maxWidth,
        justifyContent: 'center',
        alignItems: 'center'
    },
    calendarHeader: {
        textAlign: 'left'
    },
    formContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginTop: 20,
        marginBottom: 20
    },
    formTitle: {
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 10,
        paddingBottom: 10,
        borderBottomWidth: 1,
    },
    titleContainer: {
        borderBottomWidth: 1
    }
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        fetchCourses,
        fetchCategories,
        fetchClasses,
        fetchCalendar
    }, dispatch);
};

export default connect(null, mapDispatchToProps)(AgendaPage);