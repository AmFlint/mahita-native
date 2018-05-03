import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default ({ numResults }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.results}>{numResults} { numResults > 1 ? 'résultats' : 'résultat' }</Text>
            <Text style={styles.sync}>Dernière mise à jour: 27/04/2018</Text>
        </View>
    );
};

const styles = StyleSheet.create({
   container: {
       flexDirection: 'row',
       justifyContent: 'space-between',
       marginBottom: 20,
       marginTop: 20
   },
    results: {
       fontSize: 22,
        fontWeight: '600'
    },
    sync: {
       fontSize: 18
    }
});
