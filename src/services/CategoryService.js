import { AsyncStorage } from 'react-native';
import { categories } from '../../db';

const storageKey = 'testing_categories';

export default class CategoryService {
    getCategories = async () => {
        let categories = [];
        try {
            const storageClasses = await AsyncStorage.getItem(storageKey);
            categories = JSON.parse(storageClasses);
        } catch (e) {
            categories = [];
        }
        return categories;
    };

    preloadCategories = async () => {
        await AsyncStorage.setItem(storageKey, JSON.stringify(categories));
    };
}
