import { categories } from '../../db';
import { AsyncStorage } from 'react-native';

const storageKey = 'testing_categories';

export const getCategories = async () => {
    let categories = [];
    const storageCategories = await AsyncStorage.getItem(storageKey);
    try {
        categories = JSON.parse(storageCategories);
    } catch (e) {
        console.log('Error at parsing categories : ', e);
    }

    return categories ? categories : [];
};

export const preloadDefaultCategories = async () => {
    await AsyncStorage.setItem(storageKey, categories);
}