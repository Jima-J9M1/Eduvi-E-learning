
import { useQuery } from "@tanstack/react-query"
import axios from "axios"

type props={
    onSuccess:(test)=>void,
    onError:(test)=>void
}

const client=axios.create({baseURL:'https://portal.bluemarkcollege.com'})
const  request=({...options})=>{
    // client.defaults.headers.common.Authorization='Bearer-token'
    const onSuccess=(response)=>response.categories
    const onError=(error)=>{
        return error
    }
    return client(options).then(onSuccess).catch(onError)
}




 const getCategories=()=>{
   return request({ 
   method:'get',
   url: '/categories',
   headers: {
    'X-Requested-With': 'XMLHttpRequest',
    "X-API-Key":"token"
  },
  
  })
 }


export const useCourseCategorie=({onSuccess,onError}:props)=>{
   return useQuery(['categories'],getCategories,{
      onSuccess,
      onError,
      select:(data:[])=>{
        console.log(data);
        return data
      }
   }) 
}