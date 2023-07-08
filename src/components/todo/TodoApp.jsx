
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
        <div className="Login" >
            <div className="LoginForm"></div>
            
        </div>
    )
}



function WelcomeComponent(){
    return(
        <div className="Welcome" >
            Welcome Component
        </div>
    )
}