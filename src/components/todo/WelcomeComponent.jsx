import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
export default function WelcomeComponent(){

    const {username} = useParams()

    function callHelloRestApi(){
        console.log("called")
        axios.get('http://localhost:8080/hello')
    }




    // function callHelloWorldRestApi(){
    //     console.log('called')
              
    //     retrieveHelloWorldPathVariable('Ranga', authContext.token)
    //         .then( (response) => successfulResponse(response) )
    //         .catch ( (error) => errorResponse(error) )
    //         .finally ( () => console.log('cleanup') )

    // }

    // function successfulResponse(response) {
    //     console.log(response)
    //     //setMessage(response.data)
    //     setMessage(response.data.message)
    // }

    // function errorResponse(error) {
    //     console.log(error)
    // }



    return(
        <div className="Welcome">
        <div>
            <h1>Welcome {username}</h1>
            <h2>Jsphere Sofware is working hard to produce most impactful sofwares</h2>
            <Link to="/todos">Manage To Do</Link>
        </div>
        <div>
            <button className='btn btn-success m-5' onClick={callHelloRestApi}>Call Hello API</button>
        </div>
        </div>
    )
}
