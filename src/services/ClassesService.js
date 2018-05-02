import { AsyncStorage } from 'react-native';
import { classes } from '../../db';

const storageKey = 'testing_classes';

export default class ClassesService {
    getClasses = async () => {
        let classes = [];
        try {
            const storageClasses = await AsyncStorage.getItem(storageKey);
            classes = JSON.parse(storageClasses);
        } catch (e) {
            classes = [];
        }
        return classes;
    };

    preloadClasses = async () => {
        await AsyncStorage.setItem(storageKey, JSON.stringify(classes));
    };
}