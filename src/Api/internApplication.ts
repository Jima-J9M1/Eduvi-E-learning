
import { useQuery } from "@tanstack/react-query"
import axios from "axios"

type coustemprops ={
    data:{}
    onSuccess:(test)=>unknown
    onError:(test)=>unknown
}



const createApplication = async (data)=> {
    const response =  await axios.post("https://portal.bluemarkcollege.com/apply/aparentship",{
        data:data
    }).then((res)=>res)
    return response
  }

  export default function CoustemCreateapp({onError,onSuccess,data}:coustemprops){  
    return useQuery(['posts',data],()=>createApplication(data),{
        onSuccess,
        onError,
        select:(data)=>{
         return data    
        },
        enabled:false
    })
    }