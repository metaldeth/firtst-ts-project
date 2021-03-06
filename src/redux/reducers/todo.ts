import * as types from "../constants/todo";
import * as actions from "../actions/todo";

export type TodoState = {
    list: string[]
}

const initState: TodoState = {
    list: []
}

export const todoReducer = (
    state: TodoState = initState,
    action: actions.TodoActions
    ): TodoState => {
        switch (action.type) {
            case types.ADD: {
                const text = action.content
                return {
                    ...state,
                    list: [ ...state.list, text ]
                }
            };
            case types.EDIT:{
                const { index, content } = action;

                const updateList = state.list.map((currentValue, itemIndex) => {
                    if (itemIndex === index) {
                        return content
                    }
                    return currentValue
                });
                return {
                    ...state,
                    list: updateList
                }
            };
            case types.REMOVE:{
                const { index } = action;
                const updateList = state.list.filter((_, itemIndex) => {
                    return index !== itemIndex;
                })
                return {
                    ...state,
                    list: updateList
                }
            };
        
            default: return state
        }
    }
