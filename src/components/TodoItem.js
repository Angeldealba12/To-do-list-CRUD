import '../css/todoItem.css';

const TodoItem = ( { task, student} ) => {
    return (
        <div className="item">
            <div>
            <p>Task: {task}</p>
            <p>Student: {student}</p> 
            </div>
            <div>
                
            </div>
        </div>
    )
}

export default TodoItem;