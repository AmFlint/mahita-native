export const REMOVE_CLASSES_FILTER = 'remove_class_filter';
export const REMOVE_CATEGORIES_FILTER = 'remove_categories_filter';
export const ADD_CLASSES_FILTER = 'add_classes_filter';
export const ADD_CATEGORIES_FILTER = 'add_categories_filter';
export const RESET_FILTERS = 'reset_filter';


export const removeCategoriesfilter = (id) => ({
    type: REMOVE_CATEGORIES_FILTER,
    payload: id
});

export const removeClassFilter = (id) => {
    return {
        type: REMOVE_CLASSES_FILTER,
        payload: id
    };
};

export const addClassesFilter = (id) => {
    return {
        type: ADD_CLASSES_FILTER,
        payload: id
    }
};

export const addCategoriesFilter = (id) => {
    return {
        type: ADD_CATEGORIES_FILTER,
        payload: id
    }
};
