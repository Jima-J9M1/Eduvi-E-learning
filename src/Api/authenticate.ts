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
  
  export const Logout = () => {
    const { auth,setAuth } = useAuth()
    localStorage.removeItem('token');
    localStorage.removeItem('currentData');
    const token = localStorage.getItem("token")
    
    setAuth('')

    console.log("result",auth,token)

  };


export const returnTokenData = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const {auth, setAuth} = useAuth()
  
  const token =  localStorage.getItem('token')
  const tokeValue = auth || token
  
  if(isAuthenticated()){
    setAuth(token)
  }
    console.log("authentication",auth)
    const decodeData:{id:number, iat:number} = jwtDecode(String(tokeValue));
    console.log("decodeData", decodeData)
    return decodeData.id
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

