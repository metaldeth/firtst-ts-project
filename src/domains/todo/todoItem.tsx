import { FC, useState } from "react"

export type ToDoItemProps = {
    index: number,
    text: string,
    edit: (content: string) => void,
    remove: () => void
}

export const ToDoItem: FC<ToDoItemProps> = ({ index, text, remove, edit, children }) => {
    const [content, setContent] = useState(text);
    const update = () => edit(content);
    console.log(children);
    
    return(
        <div className='todoItem'>
            <div>{ index }. { text }</div>
            <input
                value={content}
                onChange={e => setContent(e.target.value)}
            />
            <button
                onClick={update}
                disabled={content === text}
            >
                Update
            </button>
            <button onClick={remove}>Remove</button>
            {children}
        </div>
    )
}