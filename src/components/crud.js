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

