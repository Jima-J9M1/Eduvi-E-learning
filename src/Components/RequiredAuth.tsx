import { Navigate, Outlet, useLocation } from "react-router-dom"
import useAuth from "../hooks/useAuth"
import { isAuthenticated } from "../Api/authenticate";
import { useModal } from "../Utils/Contexts/ModalContext";


const RequireAuth = () => {
    const {auth, setAuth} = useAuth()
    const location  = useLocation();
    const {setIsSignin} = useModal()

    if(isAuthenticated()){
        const token = localStorage.getItem('token');

        setAuth(token)
        // setTimeout(() => {
        // localStorage.removeItem('token')
            
        // }, 10000);
    }

    return (
        auth || isAuthenticated() 
        ? <Outlet /> : 
        <>
            {setIsSignin(true)}
            <Navigate to="/" state = {{from: location}} replace />  
        </>
    )
}

export default RequireAuth;