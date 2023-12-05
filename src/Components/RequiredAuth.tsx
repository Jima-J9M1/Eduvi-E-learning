import { Navigate, Outlet, useLocation } from "react-router-dom"
import useAuth from "../hooks/useAuth"
import { isAuthenticated, returnTokenData } from "../Api/authenticate";


const RequireAuth = () => {
    const {auth, setAuth} = useAuth()
    const location  = useLocation();
    

    if(isAuthenticated()){
        const token = String(returnTokenData());

        setAuth(token)
        setTimeout(() => {
        localStorage.removeItem('token')
            
        }, 10000);
    }

    return (
        auth || isAuthenticated() ? <Outlet /> : <Navigate to="/" state = {{from: location}} replace />
    )
}

export default RequireAuth;