import { ADDNAME, ADDAGE } from './actionType';
import { combineReducers } from 'redux';

const initalState = {
    name: '',
    age: 0
}
function addName(state,action) {
    switch(action.type) {
        case ADDNAME:
            return Object.assign({}, state,{
                name: action.name
            });
        default:
            return initalState
    }
}
function addAge(state,action) {
    switch(action.type) {
        case ADDAGE:
            return {
                ...state,
                name: action.age
            }
        default:
            return initalState
        };
}
export const finalReducer = combineReducers({
    addName,addAge
})