import { useState, useEffect } from 'react'
import { read } from './crud'
import TodoItem from './TodoItem';
import { useForm } from 'react-hook-form'
import CreateTodo from './CreateTodo';
import { create } from './crud'

const TodoContainer = () => {

    const [tasks, setTasks] = useState([]);
    const { handleSubmit, register } = useForm();

    const onCreateTask = values => {
        const miFunc = async () => {
            const res = await create(values)

            setTasks(prevState => [...prevState, res.data])

        }

        miFunc();
    }


    useEffect(() => {
        const myFunc = async () => {
            const data = await read()

            setTasks(data.todos)
        }

        myFunc();
    }, [])

    const list = tasks.map((value) => <TodoItem task={value.task} student={value.student} key={value.id} />)



    return (
        <div className="child-app">
        <CreateTodo handleSubmit={handleSubmit} register={register} onCreateTask={onCreateTask}/>
        {list}
        </div>
    )
}

export default TodoContainer;