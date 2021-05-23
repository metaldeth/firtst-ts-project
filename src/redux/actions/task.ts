import { ADD_TASK, EDIT_TASK, REMOVE_TASK } from "../constants/task";

export type AddTask = {
    type: typeof ADD_TASK,
    title: string,
    desc: string,
}

export type EditTask = {
    type: typeof EDIT_TASK,
    title: string,
    desc: string,
    indexTask: number
}

export type RemoveTask = {
    type: typeof REMOVE_TASK,
    indexTask: number
}

export type TaskActions = AddTask | EditTask | RemoveTask;

export const addTask = (title: string, desc: string): AddTask => ({
    type: ADD_TASK,
    title,
    desc
})

export const editTask = (title: string, desc: string, indexTask: number): EditTask => ({
    type: EDIT_TASK,
    title,
    desc,
    indexTask
})

export const removeTask = (indexTask: number): RemoveTask => ({
    type: REMOVE_TASK,
    indexTask
})