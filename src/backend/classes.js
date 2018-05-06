import { AsyncStorage } from 'react-native';
import { classes } from '../../db';

const storageKey = 'testing_classes';

export const getClasses = async () => {
    let classes = [];
    const storageClasses = await AsyncStorage.getItem(storageKey);
    try {
        classes = JSON.parse(storageClasses);
    } catch (e) {
        console.log('Could not parse json in getClasses, error: ', e);
    }

    return classes ? classes : [];
};

export const setClasses = async () => {
    await AsyncStorage.setItem(storageKey, JSON.stringify(classes));
};