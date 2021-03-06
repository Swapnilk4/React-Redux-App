import * as types from '../actions/actionType';
import initialState from './initialState'

export default function authorsReducer(state = initialState.authors, action) {
    switch (action.type) {
       
        case types.LOAD_AUTHORS_SUCCESS:
            return action.authors;
        default:
            return state;
    }
}