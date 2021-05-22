import { combineReducers } from 'redux';
import { countReducer, CountState } from './counter'
import { todoReducer, TodoState } from './todo'
import { taskReducer, TaskState } from "./task";

export interface ApplicationState {
    counter: CountState,
    todo: TodoState,
    task: TaskState
}

export const rootReducer = combineReducers({
    counter: countReducer,
    todo: todoReducer,
    task: taskReducer
});