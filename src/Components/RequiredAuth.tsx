import { Navigate, Outlet, useLocation } from "react-router-dom"
import useAuth from "../hooks/useAuth"
import { isAuthenticated } from "../Api/authenticate";


const RequireAuth = () => {
    const {auth} = useAuth()
    const location  = useLocation();

    return (
        auth || isAuthenticated() ? <Outlet /> : <Navigate to="/" state = {{from: location}} replace />
    )
}

export default RequireAuth;