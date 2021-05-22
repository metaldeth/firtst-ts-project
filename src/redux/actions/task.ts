import { ADD, EDIT, REMOVE } from "../constants/task";

export type AddTask = {
    type: typeof ADD,
    title: string,
    desc: string,
}

export type EditTask = {
    type: typeof EDIT,
    title: string,
    desc: string,
    index: number
}

export type RemoveTask = {
    type: typeof REMOVE,
    index: number
}

export type TaskActions = AddTask | EditTask | RemoveTask;

export const add = (title: string, desc: string): AddTask => ({
    type: ADD,
    title,
    desc
})

export const edit = (title: string, desc: string, index: number): EditTask => ({
    type: EDIT,
    title,
    desc,
    index
})

export const remove = (index: number): RemoveTask => ({
    type: REMOVE,
    index
})