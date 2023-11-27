
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { CourseCardProps } from "../types"

type categories = {
  categoryId:string,
  name:string
}


type ApiResponseCategory = {
  data: {
    categories: categories[];
  };
}

type ApiResponseCourse = {
    courses:CourseCardProps[];
}

const fetchCategory = async ():Promise<ApiResponseCategory> => {
  const response =  await axios.get('https://portal.bluemarkcollege.com/categories')
  return response
}

const fetchCourses = async ():Promise<ApiResponseCourse> => {
  const response =  await axios.get('https://portal.bluemarkcollege.com/courses')
  return response.data
}



export const ListCategories = () => {
 return useQuery<ApiResponseCategory, Error>(['categories'], fetchCategory);
}


export const ListCourses = () => {
  return useQuery<ApiResponseCourse, Error>(['courses'], fetchCourses);
 }