import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, Dimensions } from 'react-native';

const maxWidth = Dimensions.get('window').width;

export default class ViewCoursePage extends Component {

    static navigationOptions = {
        header: null,
        title: 'Documents'
    }

    render() {
        const { navigation } = this.props;
        const { course } = navigation.state.params;

        return (
            <View style={{ paddingTop: 40, flex: 1, alignItems: 'center'}}>
                <View style={{ width: maxWidth * .8 }}>
                    {/* Header, Return, Title */}
                    <View style={{ marginBottom: 25, alignItems: 'flex-start', flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Button
                            title="Retour"
                            onPress={() => navigation.goBack()}
                        />
                        <Text style={{ fontSize:18, fontWeight: '600' }}> { course.name } </Text>
                        <Button 
                            color="#FF780B"
                            title="Exercices"
                            onPress={() => console.log('clicked')}
                        />
                    </View>
                    {/* Tags */}
                    <View style={{ marginBottom: 25, flexDirection: 'row' }}>
                        <View style={[styles.tag, { marginRight: 20 }]}>
                            <Text>{ course.classe.name }</Text>
                        </View>
                        <View style={[styles.tag, styles.categoryTag]}>
                            <Text>{ course.categorie.name }</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={{ fontSize: 15 }}>{ course.description }</Text>
                    </View>
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {

    },
    tag: {
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 5,
        paddingTop: 5,
        borderRadius: 10,
        backgroundColor: '#89D7F0'
    },
    categoryTag: {
        backgroundColor: '#7ED6A2'
    }
});
