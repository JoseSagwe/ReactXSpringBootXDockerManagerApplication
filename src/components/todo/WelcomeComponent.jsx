import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
// import retrieveHelloBean from './api/HelloWorldApiService'
import {retrieveHelloBean, retrieveHelloBeanParam}  from './api/HelloWorldApiService'
import { useAuth } from './security/AuthContext'

export default function WelcomeComponent(){

    const {username} = useParams()

    const authContext = useAuth()

    const [message, setMessage] = useState(null)

    function callHelloRestApi(){
        console.log("called")
        
        // axios.get('http://localhost:8080/greet')
        // .then( (response) => successfulResponse(response) )
        //   .catch ( (error) => errorResponse(error) )
        //   .finally ( () => console.log('cleanup') )

        
        //   axios.get('http://localhost:8080/hello')
        //   .then( (response) => successfulResponse(response) )
        //     .catch ( (error) => errorResponse(error) )
        //     .finally ( () => console.log('cleanup') )


        // retrieveHelloBean()
        //   .then( (response) => successfulResponse(response) )
        //     .catch ( (error) => errorResponse(error) )
        //     .finally ( () => console.log('cleanup') )
        // }
        

         retrieveHelloBeanParam('Developer Joseph', authContext.token)
          .then( (response) => successfulResponse(response) )
            .catch ( (error) => errorResponse(error) )
            .finally ( () => console.log('cleanup') )
        }
        


  function successfulResponse(response) {
      console.log(response)
    //   setMessage(response.data)
     setMessage(response.data.message)
  }

  function errorResponse(error) {
      console.log(error)
  }

    return(
        <div className="Welcome">
        <div>
            <h1>Welcome {username}</h1>
            <h2>Jsphere Sofware is a sofware vending station.</h2>
            <Link to="/todos">Manage To Do</Link>
        </div>
        <div className='text-info'>{message}</div>
        <div>
            <button className='btn btn-success m-5' onClick={callHelloRestApi}>Call Hello API</button>
        </div>
        </div>
    )

  }