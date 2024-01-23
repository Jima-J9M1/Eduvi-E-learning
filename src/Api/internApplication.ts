
import { useQuery } from "@tanstack/react-query"
import axios from "axios"

type coustemprops ={
    formData: globalThis.FormData
    onSuccess:(test)=>unknown
    onError:(test)=>unknown
}

type SubscriptionProps={
  email:string
  onSuccess:(test)=>unknown
  onError:(test)=>unknown
}
const createApplication = async (formData)=> {
    const response =  await axios.post("https://portal.bluemarkcollege.com/apply/aparentship",formData,{
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }).then((res)=>res)
    return response
  }
  const Subscription= async (email:string)=> {
     const data={
      email:email
     }
    const response =  await axios.post("https://portal.bluemarkcollege.com/apply/subscribe",data,{
      headers: {
        'Content-Type': 'application/json'
      },
    }).then((res)=>res)
    return response
  }





  export default function CoustemCreateapp({onError,onSuccess,formData}:coustemprops){  
    return useQuery(['posts',formData],()=>createApplication(formData),{
        onSuccess,
        onError,
        select:(data)=>{
         return data    
        },
        enabled:false
    })
    }

    export const CoustemSubscription=({onError,onSuccess,email}:SubscriptionProps)=>{  
      return useQuery(['posts',email],()=>Subscription(email),{
          onSuccess,
          onError,
          select:(data)=>{
           return data    
          },
          enabled:false
      })
      }