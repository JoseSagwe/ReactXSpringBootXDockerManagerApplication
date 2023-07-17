import axios from 'axios'

// export default function retrieveHelloBean(){
//     return(
//     axios.get('http://localhost:8080/helloB')
//     )
// }

const apiClient = axios.create(
    {
        baseURL: 'http://localhost:8080'
    }
)

export  const retrieveHelloBean = () =>apiClient.get('/helloB')

// to configure a common base Url using Axios

// ///        OR              //////////
export  const retrieveHelloBeanParam = (username) => apiClient.get(`/hello-bean/${username}`)


