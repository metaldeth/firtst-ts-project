import { useParams } from "react-router";
import { AddTask } from "./add";

type Params = {
    id?: string,
}

export const EditTask = () => {
    const params = useParams<Params>()
    
    const convertedId = Number(params.id)

    if (convertedId !== 0 && !convertedId) {return <div>404</div>}

    return (<AddTask index={convertedId}/>)
}
