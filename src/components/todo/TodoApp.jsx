import { useState } from 'react'
import { BrowserRouter,Routes, Route, useNavigate, useParams, Link } from 'react-router-dom'
import './TodoApp.css'
import LogoutComponent from './LogoutComponent'
// import FooterComponent from './FooterComponent'
import HeaderComponent from './HearderComponent'
export default function TodoApp(){
    return(
        <div className="TodoApp">
            <BrowserRouter>
            <HeaderComponent></HeaderComponent>
                    <Routes>
                        <Route path='/' element={ <LoginComponent></LoginComponent>} ></Route>
                        <Route path='/login' element={ <LoginComponent></LoginComponent>} ></Route>
                        <Route path='/welcome/:username' element={ <WelcomeComponent></WelcomeComponent>} ></Route><Route path='/welcome' element={ <WelcomeComponent></WelcomeComponent>} ></Route>
                        <Route path='/todos' element={<ListTodosComponent /> } />
                        <Route path='*' element={ <ErrorComponent></ErrorComponent>} ></Route>
                        <Route path='/logout' element={<LogoutComponent></LogoutComponent>}></Route>
                    </Routes>
            {/* <FooterComponent></FooterComponent> */}
            </BrowserRouter>
           
        </div>
    )
}


function LoginComponent(){

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    
    const [showSuccessMessage, setShowSuccessMessage] = useState(false)
    const [showErrorMessage, setShowErrorMessage] = useState(false)
    const navigate = useNavigate();

    function handleUsernameChange(event){
        setUsername(event.target.value);
    }
    function handlePasswordChange(event){
        setPassword(event.target.value); 
    }

    function handleSubmit(){
        if(username==="Developer Joseph" && password==="1234"){
            console.log("success")
            setShowSuccessMessage(true)
            setShowErrorMessage(false)
            navigate(`/welcome/${username}`)
        } else{
            console.log("Failed")
            setShowSuccessMessage(false)
            setShowErrorMessage(true)
        }
    }

    
// function SuccessMessageComponent(){
//     if (showSuccessMessage){
//     return  <div className="successMessage">Authenticated Successfully</div>
//     } else{
//         return null
//     }
// }
    
// function ErrorMessageComponent(){
//     if (showErrorMessage){
//     return    <div className="errorMessage">Authentcation Failed. Please Check Your Credentials</div>
//     } else{
//         return null
//     }
// }



    return(
        <div className="LoginForm">
            <h1>Time To Log In To Your Favorite App!</h1>
            {showSuccessMessage && <div className="successMessage">Authenticated Successfully</div>}
            {showErrorMessage && <div className="errorMessage">Authentcation Failed. Please Check Your Credentials</div>}
            {/* <SuccessMessageComponent></SuccessMessageComponent>
            <ErrorMessageComponent></ErrorMessageComponent> */}
        <div>
            <label>User Name: </label>
            <input type="text" name="username" value={username} onChange={handleUsernameChange}/>
        </div>
        <div>
            <label>Password: </label>
            <input type="password" name="password" value={password} onChange={handlePasswordChange}/>
        </div>
        <div>
            <button type="button" name="login" onClick={handleSubmit}>login</button>
        </div>
    </div>
    )
}



function WelcomeComponent(){

    const {username} = useParams()

    console.log(username)

    return(
        <div className="Welcome">
        <div>
            <h1>Welcome {username}</h1>
            <h2>Jsphere Sofware is working hard to produce most impactful sofwares</h2>
            <Link to="/todos">Manage To Do</Link>
        </div>
        </div>
    )
}



function ErrorComponent(){
    return(
        <div className="errorPage" >
            <h1>Please Contact Our Team!</h1>
            <div>@jSagwe<h1>Jsphere Sofwares</h1> </div>
        </div>
    )
}


function ListTodosComponent() {

    const today = new Date()
    
    const targetDate = new Date(today.getFullYear()+12, today.getMonth(), today.getDay())
    
    const todos = [
                    {id: 1, description: 'Learn AWS', done: false, targetDate:targetDate},
                    {id: 2, description: 'Learn Full Stack Dev', done: false, targetDate:targetDate},
                    {id: 3, description: 'Learn DevOps', done: false, targetDate:targetDate},
                ]


    return (
        <div className="container">
            <h1>Things You Want To Do!</h1>
            <div>
                <table  className='table'>
                    <thead>
                            <tr>
                                <td>ID</td>
                                <td>Description</td>
                                <td>Is Done?</td>
                                <td>Target Date</td>
                            </tr>
                    </thead>
                    <tbody>
                    {
                        todos.map(
                            todo => (
                                <tr key={todo.id}>
                                    <td>{todo.id}</td>
                                    <td>{todo.description}</td>
                                    <td>{todo.done.toString()}</td>
                                    <td>{todo.targetDate.toDateString()}</td>
                                </tr>
                            )
                        )
                    }
                    </tbody>

                </table>
            </div>
        </div>
    )
}
