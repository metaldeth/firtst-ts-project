import { ADD, EDIT, REMOVE } from "../constants/todo";

export type AddTodo = {
    type: typeof ADD;
    content: string;
}
export type EditTodo = {
    type: typeof EDIT;
    content: string;
    index: number;
}
export type RemoveTodo = {
    type: typeof REMOVE;
    index: number;
}

export type TodoActions = AddTodo | EditTodo | RemoveTodo;

export const addTodo = (content: string): AddTodo => ({
    type: ADD,
    content
})

export const editTodo = (index: number, content: string): EditTodo => ({
    type: EDIT,
    content,
    index
})

export const removeTodo = (index: number): RemoveTodo => ({
    type: REMOVE,
    index
})