import * as types from "../constants/task";
import * as actions from "../actions/task";
import { store } from "../store";

type Task = {
    title: string,
    desc: string,
}

export type TaskState = {
    tasks: Task[]
}

const initState = {
    tasks: []
}

export const taskReducer = (
    state: TaskState = initState,
    action: actions.TaskActions
): TaskState => {
    switch (action.type) {
        case types.ADD: {
            const title = action.title;
            const desc = action.desc
            const task = {
                title,
                desc
            }
            return{
                ...state,
                tasks:[...state.tasks, task]
            }
        };
        case types.EDIT: {
            const title = action.title;
            const desc = action.desc;
            const index = action.index;
            const task = {
                title,
                desc
            }
            const updateList = state.tasks.map((currentValue, itemIndex) => {
                if (itemIndex == index) {
                    return task
                }
                return currentValue
            });
            return{
                ...state,
                tasks: updateList
            }
        }
        case types.REMOVE: {
            const index = action.index;
            const updateList = state.tasks.filter((currentValue, itemIndex) => {
                return index != itemIndex;
            })
            return {
                ...state,
                tasks: updateList
            }
        }
        default: return state;
    }
}