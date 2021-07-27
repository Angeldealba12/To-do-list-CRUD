
const CreateTodo = ( { handleSubmit, register, onCreateTask} ) => {

   
    return(
        <div>
            <form onSubmit={handleSubmit((onCreateTask))}>
                <div>
                   <input type="text" placeholder="Student Name" {...register("student")}/> 
                </div>
                <div>
                    <input type="text" placeholder="Task" {...register("task")}/> 
                </div>
                <button>New Task</button>
            </form>
        </div>
    )
}

export default CreateTodo;