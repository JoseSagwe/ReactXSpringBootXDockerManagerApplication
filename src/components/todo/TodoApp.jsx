import { useState } from 'react'
import './TodoApp.css'
export default function TodoApp(){
    return(
        <div className="TodoApp">
            Task Management Application
            <LoginComponent></LoginComponent>
            {/* <WelcomeComponent></WelcomeComponent> */}
        </div>
    )
}


function LoginComponent(){

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    
    const [showSuccessMessage, setShowSuccessMessage] = useState(false)
    const [showErrorMessage, setShowErrorMessage] = useState(false)

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



// function WelcomeComponent(){
//     return(
//         <div className="Welcome" >
//             Welcome Component
//         </div>
//     )
// }