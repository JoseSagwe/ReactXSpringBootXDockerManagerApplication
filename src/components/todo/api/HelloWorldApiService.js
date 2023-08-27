import { apiClient } from './ApiClient'
// export default function retrieveHelloBean(){
//     return(
//     axios.get('http://localhost:8080/helloB')
//     )
// }









export  const retrieveHelloBean = () =>apiClient.get('/helloB')
// to configure a common base Url using Axios
// ///        OR  use functional programming            //////////
export  const retrieveHelloBeanParam = (username, token) => apiClient.get(`/hello-bean/${username}` 
                        // ,{
                //     headers: {
                //         Authorization: token
                //     }
                // }
                )

export  const  executeBasicAuthenticationService 
                    = (token) => apiClient.get(`/basicauth`, {
                        
                        headers: {
                        Authorization: token
                    }
                })




