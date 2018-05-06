import { AsyncStorage } from 'react-native';
import { classes } from '../../db';
import { getClasses, setClasses } from '../backend';


export default class ClassesService {
    getClasses = async () => {
        return await getClasses();
    };

    preloadClasses = async () => {
        await setClasses();
    };
}