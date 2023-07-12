import { useParams, Link } from 'react-router-dom'
export default function WelcomeComponent(){

    const {username} = useParams()

    function callHelloRestApi(){
        console.log("called")
    }

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
