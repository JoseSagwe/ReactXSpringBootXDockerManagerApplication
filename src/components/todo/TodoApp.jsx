import { BrowserRouter,Routes, Route} from 'react-router-dom'
import './TodoApp.css'
import LogoutComponent from './LogoutComponent'
import ListTodosComponent from './ListTodosComonent'
import ErrorComponent from './ErrorComponent'
import WelcomeComponent from './WelcomeComponent'
import LoginComponent from './LoginComponent'
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
