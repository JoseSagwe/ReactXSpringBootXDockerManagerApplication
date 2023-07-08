
export default function TodoApp(){
    return(
        <div className="TodoApp">
            To Management Application
            <LoginComponent></LoginComponent>
            {/* <WelcomeComponent></WelcomeComponent> */}
        </div>
    )
}


function LoginComponent(){
    return(
        <div className="LoginForm">
        <div>
            <label>User Name: </label>
            <input type="text" name="username" />
        </div>
        <div>
            <label>Password: </label>
            <input type="password" name="password"/>
        </div>
        <div>
            <button type="button" name="login">login</button>
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