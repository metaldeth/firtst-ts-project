import * as types from "../constants/todo";
import * as actions from "../actions/todo";
import { store } from "../store";

export type TodoState = {
    todo: string[]
}

const initState: TodoState = {
    todo: []
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
                    todo: [ ...state.todo, text ]
                }
            };
            case types.EDIT:{
                const { index, content } = action;
                // const index = action.index;
                // const content = action.content;

                const updateTodo = state.todo.map((currentValue, itemIndex) => {
                    if (itemIndex == index) {
                        return content
                    }
                    return currentValue
                });
                return {
                    ...state,
                    todo: updateTodo
                }
            };
            case types.REMOVE:{
                const { index } = action;
                const updateTodo = state.todo.filter((currentValue, itemIndex) => {
                    return index != itemIndex;
                })
                return {
                    ...state,
                    todo: updateTodo
                }
            };
        
            default: return state
        }
    }
