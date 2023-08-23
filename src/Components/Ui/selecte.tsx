import * as React from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


export default function BasicSelect() {
  const [open, setOpen] = React.useState(false);
  const [select, setSelect] = React.useState('');


  const dropdown=()=>{
    return setOpen(prev=>!prev)
  }
  const item=()=>{
    
    const handleChange = (event:string) => {
      return setSelect(event)
    };
  
    return <div className='absolute md:top-20 top-40  bg-white border shadow-lg w-32  text-center '>
      <h1 onClick={()=>handleChange("hellow")} className='hover:text-purple-500 cursor-pointer my-2 '>hellow</h1>
      <h1 onClick={()=>handleChange("hellow")} className='hover:text-purple-500 cursor-pointer my-2 '>hellow</h1>
      <h1 onClick={()=>handleChange("hellow")} className='hover:text-purple-500 cursor-pointer my-2 '>hellow</h1>
      <h1 onClick={()=>handleChange("hellow")} className='hover:text-purple-500 cursor-pointer my-2 '>hellow</h1>
      <h1 onClick={()=>handleChange("hellow")} className='hover:text-purple-500 cursor-pointer my-2 '>hellow</h1>
    </div>
  }


  return (
   <div>
      <button className='cursor-text'>Category <span onClick={dropdown} className='cursor-pointer'><ArrowDropDownIcon /></span></button>
      {open&&(item())}
   </div>
  );
}