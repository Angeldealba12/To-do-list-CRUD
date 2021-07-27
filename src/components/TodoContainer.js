import { useState, useEffect } from 'react'
import { read } from './crud'
import TodoItem from './TodoItem';
import { useForm } from 'react-hook-form'
import CreateTodo from './CreateTodo';
import { create } from './crud'
import { deleteTask } from './crud'
import { completeTask } from './crud';


const TodoContainer = () => {

    const [tasks, setTasks] = useState([]);
    const { handleSubmit, register, reset } = useForm();
    const [updateStatus, setUpdateStatus] = useState(false);
   
    

    const onCreateTask = values => {
        const miFunc = async () => {
            const res = await create(values)
            setTasks(prevState => [...prevState, res.data])
            reset()
        }
        miFunc();
    }


    useEffect(() => {
        const myFunc = async () => {
            const data = await read()

            setTasks(data.todos)
            console.log(data.todos)     
        }
        myFunc();
        
    }, [])



    const onDeleteTask = id => {
        const miFunc = async () => {
            const res = await deleteTask(id)
            setTasks(prevState => prevState.filter((value) => value.id !== id))
            return res 
        }
        miFunc()
    }

    const onCompleteTask = (id, data) => {
            data.isCompleted = !data.isCompleted
            const miFunc = async () => {
                const res = await completeTask(id, data)
                setUpdateStatus(true)
                return res
            }
            miFunc()
            setUpdateStatus(false)
    }


    const list = tasks.map((value) => 
    <TodoItem 
    task={value.task} 
    student={value.student} 
    key={value.id} 
    id={value.id} 
    deleted={onDeleteTask}
    isCompleted={value.isCompleted}
    handleUpdate={onCompleteTask} 
    />)


    return (
        <div className="child-app">
        <CreateTodo 
        handleSubmit={handleSubmit} 
        register={register} 
        onCreateTask={onCreateTask}
        />
        <div className="todoItem">{list}</div>
        {updateStatus}
        </div>
    )
}

export default TodoContainer;
