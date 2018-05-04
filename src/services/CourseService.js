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
        await AsyncStorage.setItem(storageKey, JSON.stringify(courses));
    };

    setCourse = async (courses) => {
        let storageCourses = '';
        try {
            storageCourses = JSON.stringify(courses);
        } catch (e) {
            console.log('Error saving courses ', e);
            storageCourses = '';
        }
        if (storageCourses) {
            await AsyncStorage.setItem(storageKey, storageCourses);
            return true;
        }
        return false;
    }

    saveCourse = async (name, content, classeId, categoryId) => {
        const course = {
            name,
            content,
            classes: [classeId],
            categorie: categoryId
        }
        const courses = await this.getCourses();

        // Get ID
        let nextId = courses.reduce((aggr , course) => {
            return course.id > aggr ? course.id : aggr;
        }, 0);
        nextId++;

        console.log(nextId);
        course.id = nextId;

        courses.push(course);
        const saved = await this.setCourse(courses);

        // Handle not saved
        return courses;
    }
};