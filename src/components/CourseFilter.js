import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput, Button, Picker } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    removeCategoriesfilter,
    removeClassFilter,
    addCategoriesFilter,
    addClassesFilter
} from '../actions';
import CustomPicker from './common/CustomPicker';
import Chip from './common/Chip';

class Coursefilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ''
        };
    }

    renderSelected() {
        const {
            filters,
            classes,
            categories,
            removeClassFilter,
            removeCategoriesfilter
        } = this.props;
        const filteredCategories = categories
            .filter(c => filters.category.includes(c.id))
            .map(c => <Chip
                        key={c.name}
                        handlePress={() => removeCategoriesfilter(c.id)}
                        id={c.id}
                        label={c.name} />);

        const filteredClasses = classes
            .filter(c => filters.classe.includes(c.id))
            .map(c => <Chip
                        key={c.name}
                        handlePress={() => removeClassFilter(c.id)}
                        id={c.id}
                        label={c.name} />);

        return filteredCategories.concat(filteredClasses);
    }

    render() {
        return (
            <View>
                <View style={styles.searchContainer}>
                    <TextInput
                        placeholder={'Entrez un mot clé'}
                        onChangeText={(text) => this.setState({search: text})}
                        value={this.state.search}
                    />
                    <Button
                        title={'Rechercher'}
                        onPress={() => console.log('recherche')}
                    />
                </View>
                {/*Pickers/Select for Classe and Categories*/}
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <CustomPicker
                        label={'Classe'}
                        handleChange={this.props.addClassesFilter.bind(this)}
                        items={this.props.classes} />
                    <CustomPicker
                        label={'Matière'}
                        handleChange={this.props.addCategoriesFilter.bind(this)}
                        items={this.props.categories} />
                </View>
                {/*Selected Tags*/}
                <View style={{flexDirection: 'row'}}>
                    {this.renderSelected()}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});

const mapStateToProps = ({ filters, categories, classes }) => {
    return {
        filters,
        categories,
        classes
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        removeCategoriesfilter,
        removeClassFilter,
        addCategoriesFilter,
        addClassesFilter
    }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(Coursefilter);