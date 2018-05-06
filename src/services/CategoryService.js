import { AsyncStorage } from 'react-native';
import { getCategories, preloadDefaultCategories } from '../backend';

const storageKey = 'testing_categories';

export default class CategoryService {
    getCategories = async () => {
       return await getCategories();
    };

    preloadCategories = async () => {
        await preloadDefaultCategories();
    };
}
