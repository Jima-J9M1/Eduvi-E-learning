// import jwt from 'jsonwebtoken'
import { jwtDecode } from 'jwt-decode';
import { CourseCardDetailProps } from '../types';
import useAuth from '../hooks/useAuth';

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

export const authenticate = (token: string) => {
    localStorage.setItem('token', token);
  };
  
  export const isAuthenticated = () => {
    const token = localStorage.getItem('token');
    return !!token;
  };
  
  export const getUserData = () => {
    const userData = localStorage.getItem('userData');
    return userData ? JSON.parse(userData) : null;
  };
  
  export const logout = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { setAuth } = useAuth()
    localStorage.removeItem('token');
    localStorage.removeItem('userData');
    
    setAuth('')

  };


export const returnTokenData = () => {
    
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {auth} = useAuth()
    const decodeData:{userId:number, iat:number} = jwtDecode(String(auth));
    
    return decodeData.userId
}

export const getCurrentCourse = () => {
  const data = localStorage.getItem('currentCourse');
  
  if(data){
    return JSON.parse(data)
  }else{

    return null
  }

}

export const setCurrentCourse = async (currentData:CourseCardDetailProps) => {
  localStorage.setItem('currentData', JSON.stringify(currentData))
}

export const removeCurrentCourse = () => {
  localStorage.removeItem('currentData');
}

