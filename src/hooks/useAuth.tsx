import { useContext } from "react";
import AuthContext from "../Utils/Contexts/AuthProvider";


const useAuth = ()=>{
    return useContext(AuthContext)
}

export default useAuth