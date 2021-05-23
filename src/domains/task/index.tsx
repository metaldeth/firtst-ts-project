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

type RemoveFn = (index: number) => void

interface DispatchProps {
    remove: RemoveFn
}

type TaskProps = DispatchProps & StateProps & Props

const mapStateToProps = (state: ApplicationState, props: Props): StateProps => ({
    task: state.task.tasks
})

const mapDispatchToProps = (dispatch: Dispatch, props: Props): DispatchProps => ({
    remove: (index: number) => dispatch(taskActions.remove(index))
})

const TaskInner = (props: TaskProps) => {
    return(
        <>
            {props.task.map((taskItem:any, index: number) => 
            <TaskItem 
                key= {index}
                title= {taskItem.title}
                desc= {taskItem.desc}
                index= {index}
                remove={() => props.remove(index)}
            /> )}
        </>
    )
}

export const Task = connect(mapStateToProps, mapDispatchToProps)(TaskInner);