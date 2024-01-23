
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import {CourseCardProps } from "../types"

type categories = {
  categoryId:string,
  name:string
}
type VideoseenProps={
  studentId:number
   videoId:number
}

type ApiResponseCategory = {
  data: {
    categories: categories[];
  };
}

type ApiResponseCourse = {
    courses:CourseCardProps[];
}
type IdProps={
  userid:number
  couresid:number
  onSuccess?:(test)=>unknown
}

const fetchCategory = async ():Promise<ApiResponseCategory> => {
  const response =  await axios.get('https://portal.bluemarkcollege.com/categories')
  return response
}

const fetchCourses = async ():Promise<ApiResponseCourse> => {
  const response =  await axios.get('https://portal.bluemarkcollege.com/courses')
  console.log(response);
  
  return response.data
}


export const fetchDetailCourses = async ({userid,couresid}:IdProps) => {
  const response =  await axios.get(`https://portal.bluemarkcollege.com/courses/course/${couresid}/student/${userid}`).then((res)=>res)
  return response
}
export const VideoSeen = async ({studentId,videoId}:VideoseenProps) => {
  const data={
    studentId:studentId,
    videoId:videoId
  }  
const response =  await axios.post("https://portal.bluemarkcollege.com/apply/video-seen",data,{
  headers: {
    'Content-Type': 'application/json'
  },
}).then((res)=>res)
  return response
}

export const fetchCoursesWithCategory = async(category:string) => {
    const {data} = ListCourses();

    const course = data?.courses.filter((course) => course.category == category)
    
    console.log("course with category" , course);

    // return course
}


export const ListCategories = () => {
 return useQuery<ApiResponseCategory, Error>(['categories'], fetchCategory);
}


export const ListCourses = () => {
  return useQuery<ApiResponseCourse, Error>(['courses'], fetchCourses);
 }


 export const CourseDetailData = ({userid,couresid,onSuccess}:IdProps) => {
  const id={
    userid:userid,
    couresid:couresid
  }
  return useQuery(['course',id],()=>fetchDetailCourses (id),{
    onSuccess,
      select:(data)=>{
        console.log(data.data.course
          );
       return data.data.course

      },
      enabled:false
  })
 }
 export const coustemVideoSeen = ({studentId,videoId}:VideoseenProps) => {
  const props={
    studentId:studentId,
    videoId:videoId
  }
  return useQuery(['seenVideo',props],()=>VideoSeen(props),{
      select:(data)=>{
        console.log("sya"+data);
       return data.data.course
      },
      enabled:false
  })
 }