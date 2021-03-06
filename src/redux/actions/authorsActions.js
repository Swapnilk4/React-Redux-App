import * as types from './actionType';
import * as authorApi from '../../api/authorApi';


function loadAuthorsSuccess(authors) {
        return { type: types.LOAD_AUTHORS_SUCCESS, authors: authors }
}

export function loadAuthors() {
        return function (dispatch) {
                return authorApi.getAuthors().then(authors => {
                        dispatch(loadAuthorsSuccess(authors));

                }).catch(error => {
                        throw error;
                })
        }
}