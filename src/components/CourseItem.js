import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default ({ course, classe, category }) => {
      return (
          <View style={styles.container}>
              <Text style={styles.courseName}>
                  { course.name }
              </Text>
              <View style={styles.categoriesContainer}>
                  <Text>{ classe }</Text>
                  <Text>{ category }</Text>
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
        flex: 1
    },
    categoriesText: {
        fontSize: 16,
        fontWeight: '300'
    }
});
