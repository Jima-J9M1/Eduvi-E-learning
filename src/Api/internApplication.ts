
import { useQuery } from "@tanstack/react-query"
import axios from "axios"

type coustemprops ={
    formData: globalThis.FormData
    onSuccess:(test)=>unknown
    onError:(test)=>unknown
}



const createApplication = async (formData)=> {
    for (let obj of formData) {
        console.log(obj);
      }
    const response =  await axios.post("https://portal.bluemarkcollege.com/apply/aparentship",formData,{
      headers: {
        'Content-Type': 'multipart/form-data',
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