import { combineReducers } from 'redux';
import { countReducer, CountState } from './counter'
import { todoReducer, TodoState } from './todo'

export interface ApplicationState {
    counter: CountState,
    todo: TodoState,
}

export const rootReducer = combineReducers({
    counter: countReducer,
    todo: todoReducer
});