import axios from 'axios'


export const create = async (body) => {
    const promise = axios({
        method: 'POST',
        baseURL: 'https://todos-go.herokuapp.com/api/',
        url: '/todos',
        data: body
    })

    return promise
}

export const read = async () => {

    const res = await axios({
        method: 'GET',
        url: '/todos',
        baseURL: 'https://todos-go.herokuapp.com/api/'
    })
    return res.data
}

export const deleteTask = async (id) => {
    const promise = axios({
        method: 'DELETE',
        baseURL: 'https://todos-go.herokuapp.com/api/',
        url: `/todos/${id}`
    })
    return promise
}

export const completeTask = async (id , data) => {
    const promise = axios({
        method: "PUT",
        baseURL: "https://todos-go.herokuapp.com/api",
        url: `/todos/${id}`,
        data: data
    })
    return promise
}

