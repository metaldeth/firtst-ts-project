import { useEffect, useState } from "react"

type Props = {
    index: number,
    text: string,
    edit: (content: string) => void,
    remove: () => void
}

export const ToDoItem = ({ index, text, remove, edit }: Props) => {
    const [content, setContent] = useState(text);
    const update = () => edit(content);
    console.log(index);
    console.log(text);
    
    console.log(content);
    

    useEffect(() => {
        setContent(content);
    }, [text])

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
            >Update</button>
            <button onClick={remove}>Remove</button>
        </div>
    )
}