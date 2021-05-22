import React, {useState} from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { TodoState } from "../../redux/reducers/todo";
import { ApplicationState } from "../../redux/store";
import * as todoActions from "../../redux/actions/todo";
import { ToDoItem } from "./todoItem";

interface Props {}

interface StateProps {
    todo: TodoState['list']
}

type AddFn = (content: string) => void

type EditFn = (index: number, content: string) => void

type RemoveFn = (index: number) => void

interface DispatchProps {
    add:  AddFn
    edit: EditFn
    remove: RemoveFn
}

type TodoProps = StateProps & DispatchProps & Props


const mapStateToProps = (state: ApplicationState, props: Props): StateProps => ({
    todo: state.todo.list
});

const mapDispatchToProps = (dispatch: Dispatch, props: Props): DispatchProps => ({
    add: (content) => dispatch(todoActions.add(content)),
    edit: (index, content) => dispatch(todoActions.edit(index, content)),
    remove: (index) => dispatch(todoActions.remove(index)),
})

const TodoInner = (props: TodoProps) => {
    const [text, setText] = useState('');

    const addTodo = () => {
        if (!text.length) return;
        setText('');
        props.add(text)
    }

    return (
        <>
            <input
                value = {text}
                onChange = {(event) => setText(event.target.value)}
            />
            <button onClick = {addTodo}>add todo</button>
            {props.todo.map((todoItem: string, index: number) => 
                <ToDoItem
                    key={index}
                    index={index}
                    text={todoItem}
                    remove={() => props.remove(index)}
                    edit={(content) => props.edit(index, content)}
                />
            )}
        </>
    )
}

export const Todo = connect(mapStateToProps, mapDispatchToProps)(TodoInner);
