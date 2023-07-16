import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
// import retrieveHelloBean from './api/HelloWorldApiService'
import {retrieveHelloBean, retrieveHelloBeanParam}  from './api/HelloWorldApiService'

export default function WelcomeComponent(){

    const {username} = useParams()

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
        

         retrieveHelloBeanParam('Developer Joseph')
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
            <h2>Jsphere Sofware is working hard to produce most impactful sofwares</h2>
            <Link to="/todos">Manage To Do</Link>
        </div>
        <div className='text-info'>{message}</div>
        <div>
            <button className='btn btn-success m-5' onClick={callHelloRestApi}>Call Hello API</button>
        </div>
        </div>
    )

  }