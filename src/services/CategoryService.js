import { AsyncStorage } from 'react-native';
import { categories } from '../../db';

const storageKey = 'testing_categories';

export default class CategoryService {
    getCategories = async () => {
        let categories = [];
        try {
            const storageClasses = AsyncStorage.getItem(storageKey);
            categories = JSON.parse(storageClasses);
        } catch (e) {
            console.log(e);
            categories = [];
        }
        return categories;
    };

    preloadCategories = async () => {
        AsyncStorage.setItem(storageKey, JSON.stringify(categories));
    };
}
