import React, {useState} from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { TodoState } from "../../redux/reducers/todo";
import { ApplicationState } from "../../redux/store";
import * as todoActions from "../../redux/actions/todo";

interface Props  {
    content: string;
    index: number;
}

interface StateProps {
    todo: TodoState['todo']
}

type AddFn = () => void

type EditFn = () => void

type RemoveFn = () => void

interface DispatchProps {
    add:  AddFn
    edit: EditFn
    remove: RemoveFn
}

type TodoProps = StateProps & DispatchProps & Props

const mapStateToProps = (state: ApplicationState, props: StateProps) => ({
    count: state.counter.count,
    todo: state.todo
});

const mapDispatchToProps = (dispatch: Dispatch, props: Props): DispatchProps => ({
    add: () => dispatch(todoActions.add(props.content)),
    edit: () => dispatch(todoActions.edit(props.index, props.content)),
    remove: () => dispatch(todoActions.remove(props.index)),
  })

const TodoInner = (props: TodoProps) => {
    const [text, setText] = useState('');

    const addTodo = () => {
        props.add(text)
    }

    return (
        <>
            <input
                value = {text}
                onChange = {(event) => setText(event.target.value)}
            />
            <button onClick = {addTodo}>add todo</button>
            {}
        </>
    )
}

export const Todo = connect(mapStateToProps, mapDispatchToProps)(TodoInner);