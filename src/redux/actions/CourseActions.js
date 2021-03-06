import * as types from './actionType';
import * as courseApi from '../../api/courseApi';

export function createCourse(course) {
        return { type: types.CREATE_COURSE, course: course }
}

function loadCoursesSuccess(courses) {
        return { type: types.LOAD_COURSES_SUCCESS, courses: courses }
}

export function loadCourses() {
        return function (dispatch) {
                return courseApi.getCourses().then(courses => {
                        dispatch(loadCoursesSuccess(courses));

                }).catch(error => {
                        throw error;
                })
        }
}