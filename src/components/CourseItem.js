import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default ({ course, classe, category, handleDelete }) => {
      return (
          <View style={styles.container}>
              <Text style={styles.courseName}>
                  { course.name }
              </Text>
              <View style={styles.categoriesContainer}>
                <View style={[styles.tag, { marginRight: 20 }]}>
                    <Text>{ classe }</Text>
                </View>
                <View style={[styles.tag, styles.categoryTag]}>
                    <Text>{ category }</Text>
                </View>
              </View>
              <View style={styles.deleteContainer}>
                  <Button
                      color="#FF7E7E"
                      title="Supprimer"
                      onPress={handleDelete}
                  />
              </View>
          </View>
      );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: '#FFF'
    },
    courseName: {
        fontSize: 18
    },
    categoriesContainer: {
        marginTop: 10,
        flex: 1,
        flexDirection: 'row'
    },
    categoriesText: {
        fontSize: 16,
        fontWeight: '300'
    },
    deleteContainer: {
        position: 'absolute',
        top: 0,
        right: 50
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
