import React, { createContext, useState, ReactNode, Dispatch, SetStateAction } from "react";
// import { isAuthenticated, returnTokenData } from "../../Api/authenticate";

interface AuthContextProps {
  auth:string // Replace 'any' with the type of your auth object
  setAuth: Dispatch<SetStateAction<string>>; // Replace 'any' with the type of your auth object
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  
  const [auth, setAuth] = useState(''); // Replace '{}' with the initial state type
  
//   if(isAuthenticated()){
//     const token = String(returnTokenData())
//     setAuth(token)
//   }
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;