import ClasseService from '../services/ClassesService';

export const GET_CLASSES = 'get_classes';

const service = new ClasseService();

export const fetchClasses = () => {
  return async (dispatch) => {
      const classes = await service.getClasses();
      dispatch({
         type: GET_CLASSES,
         payload: classes
      });
  };
};

