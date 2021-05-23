import React, {useState} from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { ApplicationState } from "../../redux/store";
import * as taskActions from "../../redux/actions/task";
import { TaskState } from "../../redux/reducers/task";
import { type } from "os";
import { TaskItem } from "./TaskItem";

interface Props {}

interface StateProps {
    task: TaskState['tasks']
}

type AddFn = (title: string, desc:string) => void

interface DispatchProps {
    add: AddFn
}

type TaskProps = DispatchProps & StateProps & Props

const mapStateToProps = (state: ApplicationState, props: Props): StateProps => ({
    task: state.task.tasks
})

const mapDispatchToProps = (dispatch: Dispatch, props: Props): DispatchProps => ({
    add: (title: string, desc:string) => dispatch(taskActions.add(title, desc))
})


const AddInner = (props: any) => {
    const [title, setTitle] = useState('');

    const [desc, setDesc] = useState('');

    const addTask = () => {
        if (!title.length || !desc.length) return;
        setTitle('');
        setDesc('')
        props.add(title, desc)
    }

    return (
        <>
            <input
                value = {title}
                onChange = {(event) => setTitle(event.target.value)}
            />
            <input
                value = {desc}
                onChange = {(event) => setDesc(event.target.value)}
            />
            <button onClick = {addTask}>add task</button>
        </>
    )
}

export const AddTask = connect(mapStateToProps, mapDispatchToProps)(AddInner);