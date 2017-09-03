import { createAction, handleActions } from 'redux-actions'
import { Map } from 'immutable'

const CHANG_SEARCH = 'base/CHANG_SEARCH'
const SET_VIEW = 'base/SET_VIEW'

export const changeSearch = createAction(CHANG_SEARCH);  //keyword
export const setView = createAction(SET_VIEW); //view

const initialState = Map({
    keyword: '',
    view: 'favorite' //favorite, list
});

export default handleActions({
    [CHANG_SEARCH]: (state, action) => state.set('keyword', action.payload),
    [SET_VIEW]: (state, action) => state.set('view', action.payload)

}, initialState)

