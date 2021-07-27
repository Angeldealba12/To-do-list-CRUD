import '../css/todoItem.css';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { useState, useEffect } from 'react'


    const TodoItem = ( { task, student, id, deleted, handleUpdate, isCompleted } ) => {

    const [color, setColor] = useState('')  
    const [background_color, setBackgroundColor] = useState('') 
    const [lineThrough, setLineThrough] = useState('')
    const [fcolor, setFColor] = useState('')

    useEffect(() =>{
        if(!isCompleted){
            setColor('white')
            
        }else{
            setColor('black')
            setBackgroundColor('#71EFA3')
            setLineThrough('line-through')
            setFColor('green')
        }
    }, [isCompleted])

    return (
        <div className="item" style={{color: color,
            backgroundColor: background_color,
            textDecoration: lineThrough
            }}>
            <div >
            <p>Task: {task}</p>
            <p>Student: {student}</p> 
            </div>
            <div>
                <button className="deleteIcon" onClick={() => { deleted(id) } }><DeleteIcon/></button>
                <button style={{color: fcolor}} className="isCompleted" onClick={() => { handleUpdate(id, {task, student, isCompleted}) }}><CheckCircleIcon/></button>
            </div>
        </div>
    )
}

export default TodoItem;

