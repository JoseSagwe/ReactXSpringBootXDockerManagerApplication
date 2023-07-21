import { createContext, useContext, useState } from "react";
import { apiClient } from "../api/ApiClient";
import { executeBasicAuthenticationService } from "../api/HelloWorldApiService";

//1: Create a Context
export const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

//2: Share the created context with other components
export default function AuthProvider({ children }) {

    //Put some state in the context
    

    const [isAuthenticated, setAuthenticated] = useState(false)

    const [username, setUsername] = useState(null)

    const [token, setToken] = useState(null)

    //setInterval( () => setNumber(number+1), 10000)

    //const valueToBeShared = {number, isAuthenticated, setAuthenticated}

//HARDCODED AUTHENTICATION

    // function login(username, password){
    //         if(username==='Developer Joseph' && password==='1234'){
    //             setAuthenticated(true)
    //             setUsername(username)
    //             return true
                
    //         } else {
    //             setAuthenticated(false)
    //             setUsername(null)
    //             return false
    //         }
    //     }


    ///BASIC AUTHENTICATION
        async function login(username, password){

            const baToken = 'Basic ' + window.btoa(username + ":" + password)
 
            try {

                const response = await executeBasicAuthenticationService(baToken)

                if(response.status==200){
                    setAuthenticated(true)
                    setUsername(username)
                    setToken(baToken)

                    //Setting token to be used in all the API calls
                apiClient.interceptors.request.use(
                    (config) => {
                        console.log('intercepting and adding a token')
                        config.headers.Authorization = baToken
                        return config
                    }
                )

                    return true
                    
                } else {
                    logout()
                    return false
                }
        } catch(error){
                    logout()
                    return false
        }
        }


    function logout() {
        setAuthenticated(false)
        setToken(null)
        setUsername(null)
     }
    return (
        <AuthContext.Provider value={ { isAuthenticated, setAuthenticated, login, logout, username, token}  }>
            {children}
        </AuthContext.Provider>
    )
} 
