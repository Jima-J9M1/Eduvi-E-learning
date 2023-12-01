import * as React from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { ListCategories } from "../../Api/courselist-api";



export default function BasicSelect() {
  const [open, setOpen] = React.useState(false);
  const [, setSelect]= React.useState('');


const {data} = ListCategories()


const handleClick=(event:string)=>{
  setOpen(false)
  setSelect(event)
}




  const dropdown=()=>{
    return setOpen(prev=>!prev)
  }
 
  const item=()=>{
    return <div className='absolute lg:top-10 top-70  bg-white border shadow-lg w-32  text-center '> 
    { data && data.data && data.data.categories.map((category)=>(
      
      <h1 onClick={()=>handleClick(category.categoryId)} className='hover:text-purple-500 cursor-pointer my-2 ' key={category.categoryId}>
        {category.name}
        </h1>
     
    ))}
  </div>}


  return (
   <div>
      <button className='cursor-pointer text-gray-600'>Category<ArrowDropDownIcon  onClick={dropdown}/></button>
      {open&&(item())}
   </div>
  );
}