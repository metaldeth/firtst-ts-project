import { combineReducers } from 'redux';
import { countReducer, CountState } from './counter'

export interface ApplicationState {
    counter: CountState,
}

export const rootReducer = combineReducers({
    counter: countReducer,
});