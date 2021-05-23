import { connect } from "react-redux";
import { Dispatch } from "redux";
import { ApplicationState } from "../../redux/store";
import * as taskActions from "../../redux/actions/task";
import { TaskState } from "../../redux/reducers/task";
import { TaskItem } from "./TaskItem";
import { Link } from "react-router-dom";

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
    remove: (index: number) => dispatch(taskActions.removeTask(index))
})

const TaskInner = (props: TaskProps) => {
    return(
        <>
            <Link className='nav_item' to='/task/create'>create task</Link>
            {props.task.map((taskItem:any, index: number) => 
                <TaskItem 
                    key= {index}
                    title= {taskItem.title}
                    desc= {taskItem.desc}
                    index= {index}
                    remove={() => props.remove(index)}
                /> 
            )}
        </>
    )
}

export const Task = connect(mapStateToProps, mapDispatchToProps)(TaskInner);