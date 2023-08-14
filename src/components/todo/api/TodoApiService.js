
import { apiClient } from "./ApiClient"
//Getting all todos
            // http://localhost:8080/users/joseph/todos
export  const retrieveAllTodosForUsernameApi = (username) => apiClient.get(`/users/${username}/todos`)
//Deleting todo
            // http://localhost:8080/users/joseph/todos/2
export  const deleteTodoApi = (username, id) => apiClient.delete(`/users/${username}/todos/${id}`)
//  Getting todo by ID
export  const retrieveTodoApi = (username, id) => apiClient.get(`/users/${username}/todos/${id}`)
//Updating todo
export  const udpdateTodoApi = (username, id, todo) => apiClient.put(`/users/${username}/todos/${id}` , todo)
//Post 
export  const createTodoApi = (username, todo) => apiClient.post(`/users/${username}/todos` , todo)

