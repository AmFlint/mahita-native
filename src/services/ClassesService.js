import { AsyncStorage } from 'react-native';
import { classes } from '../../db';

const storageKey = 'testing_classes';

export default class ClassesService {
    getClasses = async () => {
        let classes = [];
        try {
            const storageClasses = AsyncStorage.getItem(storageKey);
            classes = JSON.parse(storageClasses);
        } catch (e) {
            console.log(e);
            classes = [];
        }
        return classes;
    };

    preloadClasses = async () => {
        AsyncStorage.setItem(storageKey, JSON.stringify(classes));
    };
}