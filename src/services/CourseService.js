import { AsyncStorage } from 'react-native';
import { courses } from '../../db';
import { getCourses, saveCourse, preloadDefaultCourses } from '../backend';

const storageKey = 'testing_courses';

export default class CourseService {
    getCourses = async () => {
        return await getCourses();
    };

    preloadCourses = async () => {
        await preloadDefaultCourses();
    };

    saveCourse = async (name, content, classeId, categoryId) => {
        const course = {
            name,
            description: content,
            classes: [classeId],
            categorie: categoryId
        }

        // Call to backend (here, AsyncStorage manipulation)
        const storageCourse = await saveCourse(course);
        return storageCourse;
    }
};