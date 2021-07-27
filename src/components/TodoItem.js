import '../css/todoItem.css';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';


    const TodoItem = ( { task, student, id, deleted} ) => {

    
    return (
        <div className="item" >
            <div>
            <p>Task: {task}</p>
            <p>Student: {student}</p> 
            </div>
            <div>
                <button className="deleteIcon" onClick={() => { deleted(id) } }><DeleteIcon/></button>
                <button className="isCompleted" ><CheckCircleIcon/></button>
            </div>
        </div>
    )
}

export default TodoItem;