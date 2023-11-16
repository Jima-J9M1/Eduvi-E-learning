import * as React from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useCourseCategorie } from "../../Api/courselist-api";
type dataprops={
  categoryId:string
  name:string
}


export default function BasicSelect() {
  const [open, setOpen] = React.useState(false);
  const [select, setSelect]= React.useState('');


  const props={
    onSuccess:(data)=>{
    return console.log(data);
   
},
onError:(error)=>{
  return console.log(error);
  
}
}
const{data}=useCourseCategorie(props)


const handleClick=(event:string)=>{
  setOpen(false)
  setSelect(event)
}




  const dropdown=()=>{
    return setOpen(prev=>!prev)
  }
 
  const item=()=>{
    return <div className='absolute lg:top-20 top-70  bg-white border shadow-lg w-32  text-center '> 
    { data?.map((category:dataprops)=>(
      
      <h1 onClick={()=>handleClick(category.categoryId)} className='hover:text-purple-500 cursor-pointer my-2 '>
        {category.name}
        </h1>
     
    ))}
  </div>}


  return (
   <div>
      <button className='cursor-pointer'>Category<ArrowDropDownIcon  onClick={dropdown}/></button>
      {open&&(item())}
   </div>
  );
}