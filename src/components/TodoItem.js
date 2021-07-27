import '../css/todoItem.css';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { useState, useEffect } from 'react'


    const TodoItem = ( { task, student, id, deleted, handleUpdate, isCompleted } ) => {

    const [colorlol, setColor] = useState('')    

    useEffect(() =>{
        if(!isCompleted){
            setColor('white')
        }else{
            setColor('green')
        }
    }, [isCompleted])

    return (
        <div className="item" >
            <div style={{color: colorlol}}>
            <p>Task: {task}</p>
            <p>Student: {student}</p> 
            </div>
            <div>
                <button className="deleteIcon" onClick={() => { deleted(id) } }><DeleteIcon/></button>
                <button className="isCompleted" onClick={() => { handleUpdate(id, {task, student, isCompleted}) }}><CheckCircleIcon/></button>
            </div>
        </div>
    )
}

export default TodoItem;

