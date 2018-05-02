import CategoriesService from '../services/CategoryService';

const service = new CategoriesService();

export const GET_CATEGORIES = 'get_categories';

export const fetchCategories = () => {
    return async (dispatch) => {
        const categories = await service.getCategories();
        dispatch({
            type: GET_CATEGORIES,
            payload: categories
        });
    }
};
