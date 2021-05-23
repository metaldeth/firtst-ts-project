import { ADDTASK, EDITTASK, REMOVETASK } from "../constants/task";

export type AddTask = {
    type: typeof ADDTASK,
    title: string,
    desc: string,
}

export type EditTask = {
    type: typeof EDITTASK,
    title: string,
    desc: string,
    indexTask: number
}

export type RemoveTask = {
    type: typeof REMOVETASK,
    indexTask: number
}

export type TaskActions = AddTask | EditTask | RemoveTask;

export const addTask = (title: string, desc: string): AddTask => ({
    type: ADDTASK,
    title,
    desc
})

export const editTask = (title: string, desc: string, indexTask: number): EditTask => ({
    type: EDITTASK,
    title,
    desc,
    indexTask
})

export const removeTask = (indexTask: number): RemoveTask => ({
    type: REMOVETASK,
    indexTask
})