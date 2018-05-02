import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';

export default ({ label, id, handlePress }) => {
    return (
        <TouchableWithoutFeedback>
            <View>
                <Text onPress={handlePress}>{label}</Text>
            </View>
        </TouchableWithoutFeedback>
    );
};