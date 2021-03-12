import {combineReducers} from 'redux';
import courses from './CourseReducers';
import authors from './authorsReducers';


const rootReducer = combineReducers ({
    courses:courses,
    authors:authors
});

export default rootReducer;

