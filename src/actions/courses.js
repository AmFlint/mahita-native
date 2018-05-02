import CourseService from '../services/CourseService';
import { FETCH_COURSES } from './index';

const service = new CourseService();

export const fetchCourses = () => {
  return async (dispatch) => {
    const courses = await service.getCourses();
    dispatch({
        type: FETCH_COURSES,
        payload: courses
    });
  };
};
