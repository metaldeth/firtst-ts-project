export type TaskItemProps = {
    title: string,
    desc: string,
    index: number,
    remove: VoidFunction
}

export const TaskItem = ({title, desc, index, remove}: TaskItemProps) => {
    return(
        <div>
            <h1>{title}</h1>
            <h3>{desc}</h3>
            <button onClick={remove}>delete</button>
        </div>
    )
} 