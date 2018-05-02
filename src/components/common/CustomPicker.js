import React, { Component } from 'react';
import { Picker, View, StyleSheet } from 'react-native';

export default class CustomPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            picker: ''
        };
    }

    handleChange = (id) => {
        if (id === 0) {
            return;
        }
        // this.setState({picker: id});
        this.props.handleChange(id);
    };

    renderPickerItems() {
        const items = [].concat(this.props.items);
        items.unshift({id: 0, name: this.props.label});
        return items.map(item => (
            <Picker.Item key={item.id} label={item.name} value={item.id} />
        ));
    }

    render() {
        return (
            <View>
                <Picker
                    selectedValue={this.state.picker}
                    mode={'dropdown'}
                    style={{ height: 50, width: 200 }}
                    onValueChange={(itemValue, itemIndex) => this.handleChange(itemValue)}
                >
                    {this.renderPickerItems()}
                </Picker>
            </View>
        );
    }
}