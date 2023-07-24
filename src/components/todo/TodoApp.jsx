import { BrowserRouter,Routes, Route, Navigate} from 'react-router-dom'
import './TodoApp.css'
import LogoutComponent from './LogoutComponent'
import ListTodosComponent from './ListTodosComonent'
import ErrorComponent from './ErrorComponent'
import WelcomeComponent from './WelcomeComponent'
import LoginComponent from './LoginComponent'
import TodoComponent from './TodoComponent'
import HeaderComponent from './HearderComponent'
import AuthProvider, {useAuth} from './security/AuthContext'

export default function TodoApp(){

    function AuthenticatedRoute({children}) {
        const authContext = useAuth()
        
        if(authContext.isAuthenticated)
            return children
    
        return <Navigate to="/" />
    }

    return(
        <div className="TodoApp">
            <AuthProvider>
            <BrowserRouter>
                    <HeaderComponent />
                    <Routes>
                        <Route path='/' element={ <LoginComponent /> } />
                        <Route path='/login' element={ <LoginComponent /> } />
                        
                        <Route path='/welcome/:username' element={
                            <AuthenticatedRoute>
                                <WelcomeComponent />
                            </AuthenticatedRoute> 
                        } />
                        
                        <Route path='/todos' element={
                            <AuthenticatedRoute>
                                <ListTodosComponent /> 
                            </AuthenticatedRoute>
                        } />

                        <Route path='/todo/:id' element={
                            <AuthenticatedRoute>
                                <TodoComponent /> 
                            </AuthenticatedRoute>
                        } />
                        
                        <Route path='/logout' element={
                            <AuthenticatedRoute>
                                <LogoutComponent /> 
                            </AuthenticatedRoute>
                        } />
                        
                        <Route path='*' element={<ErrorComponent /> } />

                    </Routes>
                </BrowserRouter>
            </AuthProvider>
        </div>
    )
}
