import axios from 'axios'

const apiClient = axios.create(
    {
        baseURL: 'http://localhost:8080'
    }
)


            // http://localhost:8080/users/joseph/todos
export  const retrieveAllTodosForUsernameApi = (username) => apiClient.get(`/users/${username}/todos`)

            // http://localhost:8080/users/joseph/todos/2
export  const deleteTodoApi = (username, id) => apiClient.delete(`/users/${username}/todos/${id}`)

export  const retrieveTodoApi = (username, id) => apiClient.get(`/users/${username}/todos/${id}`)


