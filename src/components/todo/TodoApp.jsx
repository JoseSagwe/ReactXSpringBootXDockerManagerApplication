import { useState } from 'react'
import { BrowserRouter,Routes, Route, useNavigate } from 'react-router-dom'
import './TodoApp.css'
export default function TodoApp(){
    return(
        <div className="TodoApp">
            Task Management Application
            <BrowserRouter>
                    <Routes>
                        <Route path='/' element={ <LoginComponent></LoginComponent>} ></Route>
                        <Route path='/login' element={ <LoginComponent></LoginComponent>} ></Route>
                        <Route path='/welcome' element={ <WelcomeComponent></WelcomeComponent>} ></Route>
                    </Routes>
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
        if(username==="Developer" && password==="1234"){
            console.log("success")
            setShowSuccessMessage(true)
            setShowErrorMessage(false)
            navigate('/welcome')
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
    return(
        <div className="Welcome" >
            Welcome Page
        </div>
    )
}



function ErrorComponent(){
    return(
        <div className="Welcome" >
            <h1>We are working really hard!!</h1>
            <div>Apologies please comtact our team Jsphere Sofwares</div>
        </div>
    )
}