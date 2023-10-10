import * as React from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Link } from 'react-router-dom';


const data=["FullStack","Front-End","BackEnd"]



export default function BasicSelect() {
  const [open, setOpen] = React.useState(false);
  const [, setSelect] = React.useState('');


  const dropdown=()=>{
    return setOpen(prev=>!prev)
  }
  const handleChange = (event:string) => {
    return setSelect(event)
  };

  const item=()=>{
    return <div className='absolute lg:top-20 top-70  bg-white border shadow-lg w-32  text-center '> { data.map((category)=>(
      <span onClick={dropdown}> <h1 onClick={()=>handleChange(category)} className='hover:text-purple-500 cursor-pointer my-2 '><Link to="/courses"> {category} </Link></h1></span>
    ))}
  </div>}


  return (
   <div>
      <button className='cursor-text'>Category <span onClick={dropdown} className='cursor-pointer'><ArrowDropDownIcon /></span></button>
      {open&&(item())}
   </div>
  );
}