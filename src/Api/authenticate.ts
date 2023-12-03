// import jwt from 'jsonwebtoken'
import { jwtDecode } from 'jwt-decode';

export type user = {
  token:string,
  student:{
    first_name: string,
    last_name: string,
    email:string
  },
  message:string,
  error:string
}

export const authenticate = (token: string, userData: user["student"]) => {
    localStorage.setItem('token', token);
    localStorage.setItem('userData', JSON.stringify(userData));
  };
  
  export const isAuthenticated = () => {
    const token = localStorage.getItem('token');
    console.log(typeof(token))
    console.log("token", token, !!token)
    return !!token;
  };
  
  export const getUserData = () => {
    const userData = localStorage.getItem('userData');
    return userData ? JSON.parse(userData) : null;
  };
  
  export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userData');
    window.location.href =("/")
  };


export const returnTokenData = () => {
    const token = localStorage.getItem('token');
    
    const decodeData:{userId:number, iat:number} = jwtDecode(String(token));
    
    return decodeData.userId
}