import React from 'react';
import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native';

export default ({ label, id, handlePress, color }) => {
    return (
        <TouchableWithoutFeedback onPress={handlePress}>
            <View style={[styles.container, {backgroundColor: color}]}>
                <Text 
                    style={styles.content}>
                    {label}
                </Text>
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        marginRight: 10,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 10
    },
    content: {
        fontSize: 15
    }
});