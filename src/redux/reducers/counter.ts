import * as types from "../constants/counter";
import * as actions from "../actions/counter";

export type CountState = {
    count: number;
}

const initState: CountState = {
    count: 0
}

export const countReducer = (
    state: CountState = initState,
    action: actions.CountActions
): CountState => {
    switch (action.type) {
        case types.INCREMENT: {
            return { ...state, count: state.count + action.count}
        }
        case types.DECREMENT: {
            return { ...state, count: state.count + action.count}
        }
        case types.CLEAR: {
            return initState
        }
        default:
            return state;
    }
}