import '../css/todoItem.css';

const TodoItem = ( { task, student} ) => {
    return (
        <div>
            {task} - {student}
        </div>
    )
}

export default TodoItem;