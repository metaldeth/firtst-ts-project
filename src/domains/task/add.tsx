import {useState} from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { useHistory } from "react-router-dom";
import * as taskActions from "../../redux/actions/task";
import { ApplicationState } from "../../redux/store";
import { Task } from "../../redux/reducers/task";

interface Props {
    index?: number
}

type AddFn = (title: string, desc:string) => void
type EditFn = (title:string, desc: string, index: number) => void

interface DispatchProps {
    add: AddFn,
    edit: EditFn
}

interface StateProps {
    task: Task | null,
}

type TaskProps = DispatchProps & Props & StateProps

const mapStateToProps = (state: ApplicationState, props: Props): StateProps => {
    if (props.index === undefined) return {
        task: null
    };
    return {
        task: state.task.tasks[props.index]
    }
}

const mapDispatchToProps = (dispatch: Dispatch, props: Props): DispatchProps => ({
    add: (title: string, desc:string) => dispatch(taskActions.addTask(title, desc)),
    edit: (title: string, desc: string, index:number) => dispatch(taskActions.editTask(title, desc, index))
})


const AddInner = (props: TaskProps) => {
    const [title, setTitle] = useState(props.task?.title ?? '');
    const [desc, setDesc] = useState(props.task?.desc ?? '');

    const history = useHistory();

    let buttonName = props.index === undefined ? 'Add' : 'Edit'

    const addTask = () => {
        if (!title.length || !desc.length) return;
        setTitle('');
        setDesc('')
        if (props.index === undefined) {
            props.add(title, desc);
            buttonName = 'Add'            
        } else {
            props.edit(title, desc, props.index);
        }
        history.replace('/task')
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
            <button onClick = {addTask}>{buttonName}</button>
        </>
    )
}

export const AddTask = connect(mapStateToProps, mapDispatchToProps)(AddInner);