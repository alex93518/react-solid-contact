import { Map, List } from 'immutable'
import { createAction, handleActions } from 'redux-actions'

const CREATE = 'contacts/CREATE'
const MODIFY = 'contacts/MODIFY'
const REMOVE = 'contacts/REMOVE'
const TOGGLE_FAVORITE = 'contact/TOGGLE_FAVORITE'

export const create = createAction(CREATE); // {id, name, phone, color}
export const modify = createAction(MODIFY); //{id, contact:{name, phone}}
export const remove = createAction(REMOVE); // id
export const toggleFavorite = createAction(TOGGLE_FAVORITE);

const initialState = List([
    Map({
        "id": "SyKw5cyAl",
        "name": "Alex",
        "phone": "010-0000-0000",
        "color": "#40c057",
        "favorite": true
    }),
    Map({
        "id": "r1s_9c10l",
        "name": "Kitty",
        "phone": "010-0000-0001",
        "color": "#12b886",
        "favorite": true
    }),
    Map({
        "id": "BJcFqc10l",
        "name": "Jay",
        "phone": "010-0000-0002",
        "color": "#fd7e14",
        "favorite": false
    }),
    Map({
        "id": "BJUcqqk0l",
        "name": "Brown",
        "phone": "010-0000-0003",
        "color": "#15aabf",
        "favorite": false
    }),
    Map({
        "id": "rJHoq91Cl",
        "name": "David",
        "phone": "010-0000-0004",
        "color": "#e64980",
        "favorite": false
    })
]);

export default handleActions({
    [CREATE]: (state, action) => {
        return state.push(Map(action.payload));
    },
    [REMOVE]: (state, action) => {
        const index = state.findIndex( contact => contact.get('id')===action.payload);
        return state.delete(index);
    },
    [MODIFY]: (state, action) => {
        const index = state.findIndex(contact => contact.get('id') === action.payload.id);
        return state.mergeIn([index], action.payload.contact);
    },
    [TOGGLE_FAVORITE]: (state, action) => {
        const index = state.findIndex(contact => contact.get('id') === action.payload);
        return state.update(index, contact => contact.set('favorite', !contact.get('favorite')));
    }

}, initialState)


