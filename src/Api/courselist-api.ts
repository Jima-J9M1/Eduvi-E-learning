
import { useQuery } from "@tanstack/react-query"
import axios from "axios"

type categories = {
  categoryId:string,
  name:string
}
/*
"id":1,
"name":"Node js",
"description":"Complete node js course ",
"thumbnail":"http://learn.bluemarkcollege.com/images/thumbnails/themnail-1699675909077.jpg",
"introduction_video":"http://localhost:5173/add-course",
"price":"299.00",
"target_audience":"all users can get this course","category_id":1
*/

type course = {
  id:number,
  name:string,
  description :string,
  thumbnail:string,
  price:string,
  target_audience:string
}

/*
 "first_name": "amanuel",
  "last_name": "wonde",
  "phone_number": "123456780",
  "email": "amanuellld@gmail.com",
  "password": "secretpassword",
  "country": "ethiopia",
  "city": "addis ababa",
  "university": "aastu",
  "department": "Software Engineering",
  "git_link": "https://github.com/johndoe",
  "linkdln_link": "https://www.linkedin.com/in/amanuel",
  "profile_img": "https://example.com/profile-image.jpg"
*/
// type userRegister = {
//   id:number,
//   first_name: string,
//   last_name: string,
//   phone_number: string,
//   email: string,
//   password: string,
//   country: string,
//   city: string,
//   university: string,
//   department: string,
//   git_link: string,
//   linkdln_link: string,
//   profile_img: string,
// }

// type userLogin = {
//   email:string, 
//   password:string,
// }



type ApiResponseCategory = {
  data:categories[]
}

type ApiResponseCourse = {
  data:course[]
}

const fetchCategory = async ():Promise<ApiResponseCategory> => {
  const response =  await axios.get('https://portal.bluemarkcollege.com/categories')
  return response
}

const fetchCourses = async ():Promise<ApiResponseCourse> => {
  const response =  await axios.get('https://portal.bluemarkcollege.com/courses')
  return response
}



export const ListCategories = () => {
 return useQuery<ApiResponseCategory, Error>(['categories'], fetchCategory);
}


export const ListCourses = () => {
  return useQuery<ApiResponseCourse, Error>(['courses'], fetchCourses);
 }


// type props={
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     onSuccess:(test:any)=>void,
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     onError:(test:any)=>void
// }

// const client= axios.create({baseURL:'https://portal.bluemarkcollege.com'})


// const  request=({...options})=>{
//     // client.defaults.headers.common.Authorization='Bearer-token'
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     const onSuccess=(response:any)=>response.categories
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     const onError=(error:any)=>{
//         return error
//     }
//     return client(options).then(onSuccess).catch(onError)
// }




//  const getCategories=()=>{
//    return request({ 
//    method:'get',
//    url: '/categories',
//    headers: {
//     "X-API-Key":"token"
//   },
  
//   })
//  }


// export const useCourseCategorie=({onSuccess,onError}:props)=>{
//    return useQuery(['categories'],getCategories,{
//       onSuccess,
//       onError,
//       select:(data:[])=>{
//         console.log(data);
//         return data
//       }
//    }) 
// }