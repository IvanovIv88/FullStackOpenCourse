import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    return axios.get(baseUrl)
}

const createPerson = newObject => {
    return axios.post(baseUrl, newObject)
}

const deletePerson = id => {
    const deleteUrl = `http://localhost:3001/persons/${id}`
    return axios.delete(deleteUrl)
}

export default {
    getAll,
    createPerson,
    deletePerson
}