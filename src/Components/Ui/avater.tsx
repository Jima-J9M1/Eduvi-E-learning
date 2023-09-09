import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import  Link  from './link';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

interface avaterProps{
  name:string
  img:any
}


export default function avater({name,img}:avaterProps) {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div className='flex items-center '>
      {name?(<span>{name}</span>):("My Account")}
        <span className='hover:shadow-lg  rounded-full ml-4  shadow-indigo-500/40'>
        {img?(<img className='w-5 h-5' src={img} alt="s" />)
        :(<span aria-describedby={id} ><AccountCircleIcon   color="primary" sx={{fontSize:40} } onClick={handleClick} className='m-2' /></span>)}
        </span>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Typography sx={{ p: 2 }}>cetagory</Typography>
        <Typography sx={{ p: 2 }}><Link  url='#' text='change your password' /></Typography>
      </Popover>
    </div>
  );
}

