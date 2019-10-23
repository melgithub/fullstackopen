import axios from 'axios'

const baseURL = 'http://localhost:3001/persons'

const getAll = () => {
    return axios.get(baseURL)
}

const create = newObject => {
    return axios.post(baseURL, newObject)
}

const update = (id, newObject) => {
    // FYI - backticks used for when you want to interpolate an expression within your string.
    return axios.put(`${baseURL}/${id}`, newObject)
}

const handleDelete = (id) => {
    return axios.delete(`${baseURL}/${id}`, { params: {id}} )
}

export default {getAll, create, update, handleDelete}