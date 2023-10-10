import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from "./link"
import  Avatar  from "./avater";
import MenuIcon from '@mui/icons-material/Menu';
import Selecter from "./selecte"
import image  from '../../assets/images/Image (4).png';
import { ModalProvider } from '../../Utils/Contexts/ModalContext';
import AuthModal from '../Modals/AuthModal';




export default function BasicPopover() {
  
  const [modalOpen, isModalOpen] = React.useState(false)

  const openModalMethod = ()=>{
     isModalOpen(!modalOpen)
  }

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
    <div>
      <Button aria-describedby={id} variant="text" onClick={handleClick}>
        <MenuIcon fontSize='large' />
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal:'left',
        }}
      >
        <Typography sx={{ p: 2 }}><Link text="Home"  url="/"/></Typography>
        <Typography sx={{ p: 2 }}><Link text="Courses" url="/Courses" /></Typography>
        <Typography sx={{ p: 2 }}><Selecter /></Typography>
        <Typography sx={{ p: 2 }}><Link text="About us" url="/Aboutus" /></Typography>
        <Typography onClick={openModalMethod} sx={{ p: 2 }}><Link text="Contact" url="./Contact" /></Typography>
        <Typography onClick={openModalMethod} sx={{ p: 0.5, m:1 }} className='rounded-3xl bg-yellow-200 p-0 cursor-pointer text-center'>Login</Typography>
      </Popover>
      

    <ModalProvider>
        <AuthModal open={modalOpen} onClose={()=>isModalOpen(!modalOpen)}   />
      </ModalProvider>
    
    
    </div>
  );
}