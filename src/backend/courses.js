import { AsyncStorage } from 'react-native';
import { getClasses } from './classes';
import { getCategories } from './categories';
import { courses } from '../../db';

const storageKey = 'testing_courses';

/**
 * Get displayable course format - join course's classe/categorie IDs to resources
 * @param {Object} course - course object
 * @param {[Object]} classes 
 * @param {[Objet]} categories 
 */
const getExportableCourse = (course, classes, categories) => {
    const classe = classes.find(c => c.id === course.classe);
    // Get categorie
    const categorie = categories.find(c => c.id === course.categorie);
    return {
        ...course,
        classe: classe,
        categorie
    };
};

/**
 * 
 * @param {[Object]} courses 
 */
const getExportableCourses = async (courses) => {
    // Get Classes and Categories from storage
    const classes = await getClasses();
    const categories = await getCategories();

    // Join resources -> replace classes/categorie ids by objects
    return courses.map(course => getExportableCourse(course, classes, categories));
};

const fetchResourcesAndFormatCourse = async (course) => {
    const classes = await getClasses();
    const categories = await getCategories();
    return getExportableCourse(course, classes, categories);
}


// TODO: Replace categorie/classe id with object id/name
export const getCourses = async () => {
    let courses = [];
    const storageCourses = await AsyncStorage.getItem(storageKey);
    try {
        courses = JSON.parse(storageCourses);
    } catch (e) {
        console.log('Could not parse json in getCourses, error: ', e);
    }

    if (!courses) {
        return [];
    }

    return await getExportableCourses(courses);
};


// Calculate ID + save
/**
 * 
 * @param {Object} course - Course Object { name: str, description: str, classe: int, categorie: int }
 */
export const saveCourse = async (course) => {
    const courses = await getCourses();

     // Get maximum ID and increment to create new maximum ID
     let nextId = storagCourses.reduce((aggr , course) => {
        return course.id > aggr ? course.id : aggr;
    }, 0);
    nextId++;

    course.id = nextId;

    courses.push(course);
    let storageCourses = '';
    try {
        storageCourses = JSON.stringify(courses);
    } catch (e) {
        console.log('error stringifying courses ', e);
        return {};
    }

    await AsyncStorage.setItem(storageKey, storageCourses);
    // Get Exportable course attributes - (classe/categorie)
    return fetchResourcesAndFormatCourse(course);
};

export const preloadDefaultCourses = async () => {
    await AsyncStorage.setItem(storageKey, JSON.stringify(courses));
};