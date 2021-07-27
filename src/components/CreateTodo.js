import '../css/createTodo.css';

const CreateTodo = ( { handleSubmit, register, onCreateTask} ) => {

   
    return(
        <div className="create-todo">
            <form onSubmit={handleSubmit((onCreateTask))}>
                <div className="img"></div>
                <div>
                   <input type="text" placeholder="Student Name" {...register("student", {
                       required: true
                   })}/> 
                </div>
                <div>
                    <input type="text" placeholder="Task" {...register("task", {
                        required: true
                    })}/> 
                </div>
                <button>New Task</button>
            </form>
        </div>
    )
}

export default CreateTodo;