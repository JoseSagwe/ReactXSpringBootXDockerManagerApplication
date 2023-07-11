import { useState } from 'react'
import {useNavigate } from 'react-router-dom'
export default function LoginComponent(){

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