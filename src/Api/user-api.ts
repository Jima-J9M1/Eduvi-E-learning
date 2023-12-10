/* eslint-disable react-hooks/rules-of-hooks */
import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import { user } from "./authenticate"


export type Application = {
    resume:string,
    essay:string,
    portfolio:string | null | undefined
}

export type userData = {
    first_name:string,
    last_name:string,
    email:string,
    password:string,
    phone_number:string,
    country:string,
    city:string,
    university:string,
    department:string,
    git_link:string,
    linkdln_link:string,
    profile_img:string
  }

  type accessType = {
    studentId:number,
    courseId:number
  }


export type userLogin = {
  email:string, 
  password:string,
}

export type byeCoursetype = {
  studentId:string,
  courseId: string,
  portfolio: string
}










const createCourse = async (data: userData): Promise<user> => {

    try{
       const response = await axios.post('https://portal.bluemarkcollege.com/student/register', data)
        
       return response.data

    } catch (error){
      
      return error.response.data

    }
  };
  
  const loginUser = async (data: userLogin): Promise<user> => {
    const response = await axios.post('https://portal.bluemarkcollege.com/student/login', data).
    then((res)=>res.data).catch((err)=>err)
    return response;
  };

  const buyCourse = async (data:byeCoursetype) => {
    try {
      const response = await axios.post('https://portal.bluemarkcollege.com/apply/buy-course', data)
        
      
      return response.data

    } catch (error) {

      return error.response.data

    }
  }

  export const courseAccess = async (data: accessType) => {
    try{
      const response = await axios.post('https://portal.bluemarkcollege.com/apply/check-course-access', data)

      return response.data
    }catch(error) {

      return error.response.data

    }
  }
  
  export const useCreateCourseMutation = () => {
    return useMutation((data: userData) => createCourse(data));
  };

  export const useBuyCourseMutation = () =>{
    return useMutation((data: byeCoursetype) => buyCourse(data));
  }
  export const useLoginCourseMutation = () => {
    return useMutation((data: userLogin) => loginUser(data));
  };


  // export const useCourseAccess = () => {
  //   return useMutation((data:accessType) => courseAccess(data))
  // }
  
  