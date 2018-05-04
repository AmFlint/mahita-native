import CourseService from '../services/CourseService';
import { FETCH_COURSES } from './index';

export const ADD_COURSE = 'add_course';

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

export const addCourse = (name, content, classeId, categoryId) => {
  return async (dispatch) => {
      const payload = await service.saveCourse(name, content, classeId, categoryId);
      dispatch({
        type: FETCH_COURSES,
        payload
      });
  }
}