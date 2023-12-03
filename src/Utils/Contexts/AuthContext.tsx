// import { ReactNode, useContext, useState } from "react";
// import { createContext } from "vm";
// import { isAuthenticated, logout } from "../../Api/authenticate";

// type AuthContextProps = {
//     isAuthenticate: boolean,
//     login: () => void;
//     logoutUser: () => void;
// }

// const AuthContext = createContext({
//     isAuthenticate: false,
//     login:() => {},
//     logoutUser:() => {}
// });


// export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
//     const [isAuthenticate, setIsAuthenticate] = useState<boolean>(false);

//     const login = () => {

//         if(isAuthenticated()){

//             setIsAuthenticate(true);

//         }
//     }
   
//     const logoutUser = () => {
//         logout()

//         setIsAuthenticate(false)
//     }


//     return (
//         <AuthContext.Provider value={{ isAuthenticate, login, logoutUser}}>
//             {children}
//         </AuthContext.Provider>
//     )
// };

// export const UseAuth:Promise<AuthContextProps> = () => {
//    const data = useContext(AuthContext)
//    return data  
// };