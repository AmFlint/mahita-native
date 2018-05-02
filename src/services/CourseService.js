import { AsyncStorage } from 'react-native';
import { courses } from '../../db';

const storageKey = 'testing_courses';

export default class CourseService {
    getCourses = async () => {
        let courses = [];
        try {
            const storageCourses = await AsyncStorage.getItem(storageKey);
            courses = JSON.parse(storageCourses);
        } catch (e) {
            console.log('could not fetch courses, got error: ' + e);
            courses = [];
        }
        return courses;
    };

    preloadCourses = async () => {
        let storageCourses = await AsyncStorage.getItem(storageKey);
        if (!storageCourses) {
            await AsyncStorage.setItem(storageKey, JSON.stringify(courses));
        }
    };
};